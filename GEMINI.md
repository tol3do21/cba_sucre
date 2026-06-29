# Configuración de Orquestación Automática: CBA Sucre Web

## Stack Tecnológico Obligatorio
- **Framework:** HTML5 Nativo, Limpio y Semántico.
- **Estilos:** Tailwind CSS (vía CDN o configuración local simple).
- **Interactividad:** JavaScript Vanilla (JS Puro).
- **Idioma del Código:** Técnico, limpio y sin modismos/coloquialismos.

## Estándares de SEO y Optimización Técnica
- **Semántica:** Uso obligatorio de etiquetas HTML5 semánticas (<header>, <main>, <section>, etc.).
- **Jerarquía:** Máximo un (1) encabezado <h1> por documento, seguido de una estructura jerárquica estricta (h2, h3).
- **Metadatos:** Incluir metaetiquetas SEO estándar (description, keywords, viewport) y etiquetas Open Graph (og:) para optimización en redes sociales.
- **Imágenes:** Atributo 'alt' descriptivo obligatorio en todas las etiquetas <img> para accesibilidad y SEO. Nombres de archivos de imagen limpios y descriptivos.

## Enrutamiento Automático de Sub-Agentes y Skills
El modelo principal debe actuar como Orquestador General y delegar tareas de forma autónoma a las habilidades de la carpeta `.agents/skills/` según el contexto del prompt del usuario:

1. **Si el usuario pide estructurar, diseñar o maquetar componentes visuales:**
   - Invoca automáticamente el Skill: `frontend-arquitecto`.
2. **Si el usuario solicita inicializar páginas, editar el <head> o reestructurar contenidos:**
   - Invoca automáticamente el Skill: `seo-tecnico`.
3. **Si el usuario solicita contenido, imágenes, fotos o mockups visuales reales de la marca:**
   - Invoca automáticamente el Skill: `media-extractor`.
4. **Antes de ejecutar cualquier comando de escritura o modificación en el disco local:**
   - Activa obligatoriamente el Skill: `flujo-aprobacion`.

## Restricciones Estrictas
- **PROHIBIDO** el uso de Python o la creación de servidores backend.
- **PROHIBIDO** el uso de frameworks pesados o librerías ajenas.
- **Protocolo:** Ningún sub-agente puede escribir código directamente en los archivos del espacio de trabajo sin pasar primero por la validación del chat y la aprobación manual del usuario.