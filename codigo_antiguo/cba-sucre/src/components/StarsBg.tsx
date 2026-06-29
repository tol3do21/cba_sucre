export function StarsBg({ id = "stars", opacity = 0.18 }: { id?: string; opacity?: number }) {
  return (
    <svg
      width="100%"
      height="100%"
      style={{ position: "absolute", inset: 0, opacity, pointerEvents: "none" }}
      aria-hidden="true"
    >
      <defs>
        <pattern id={id} width="60" height="60" patternUnits="userSpaceOnUse">
          <path
            d="M30 18 L33 27 L42 27 L34.5 33 L37.5 42 L30 36.5 L22.5 42 L25.5 33 L18 27 L27 27 Z"
            fill="#fff"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
