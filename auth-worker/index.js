export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Redirigir a GitHub para que el usuario inicie sesión
    if (url.pathname === "/auth") {
      const redirectUrl = new URL("https://github.com/login/oauth/authorize");
      redirectUrl.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
      redirectUrl.searchParams.set("scope", "repo,user");
      return Response.redirect(redirectUrl.toString(), 302);
    }

    // 2. Recibir el código de GitHub y canjearlo por un Token
    if (url.pathname === "/callback") {
      const code = url.searchParams.get("code");
      if (!code) return new Response("Falta el código de autorización", { status: 400 });

      const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code: code
        })
      });

      const tokenData = await tokenResponse.json();
      
      if (tokenData.error) {
        return new Response(tokenData.error_description || tokenData.error, { status: 400 });
      }

      // 3. Enviar el token de vuelta al panel de Decap CMS
      const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Autorizado</title>
      </head>
      <body>
        <script>
          const token = ${JSON.stringify(tokenData.access_token)};
          const message = 'authorization:github:success:{"token":"' + token + '","provider":"github"}';
          
          // Enviamos el mensaje al panel de Decap CMS que abrió la ventana
          window.opener.postMessage(message, '*');
          window.close();
        </script>
      </body>
      </html>
      `;

      return new Response(html, { headers: { "Content-Type": "text/html;charset=UTF-8" } });
    }

    return new Response("Ruta no encontrada", { status: 404 });
  }
};
