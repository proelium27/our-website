const bgPatterns = [
  {
    label: "Dots (current)",
    bg: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23BDB7B5'/%3E%3C/svg%3E\")",
  },
  {
    label: "Plus / Cross Grid",
    bg: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Crect x='14' y='15.5' width='4' height='1' fill='%23BDB7B5'/%3E%3Crect x='15.5' y='14' width='1' height='4' fill='%23BDB7B5'/%3E%3C/svg%3E\")",
  },
  {
    label: "Fine Grid Lines",
    bg: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cline x1='0' y1='31.5' x2='32' y2='31.5' stroke='%23BDB7B5' stroke-width='0.5'/%3E%3Cline x1='31.5' y1='0' x2='31.5' y2='32' stroke='%23BDB7B5' stroke-width='0.5'/%3E%3C/svg%3E\")",
  },
  {
    label: "Diagonal Hatching",
    bg: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cline x1='0' y1='0' x2='32' y2='32' stroke='%23BDB7B5' stroke-width='0.5'/%3E%3Cline x1='-32' y1='0' x2='0' y2='32' stroke='%23BDB7B5' stroke-width='0.5'/%3E%3Cline x1='32' y1='0' x2='64' y2='32' stroke='%23BDB7B5' stroke-width='0.5'/%3E%3C/svg%3E\")",
  },
  {
    label: "Hexagonal Grid",
    bg: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='36'%3E%3Cpath d='M0,-12 L10,-6 L10,6 L0,12 L-10,6 L-10,-6 Z M10,6 L21,12 L21,24 L10,30 L0,24 L0,12 Z' fill='none' stroke='%23BDB7B5' stroke-width='0.5'/%3E%3C/svg%3E\")",
  },
  {
    label: "Diamond Grid",
    bg: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M16,0 L32,16 L16,32 L0,16 Z' fill='none' stroke='%23BDB7B5' stroke-width='0.5'/%3E%3C/svg%3E\")",
  },
  {
    label: "Wavy Lines",
    bg: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='20'%3E%3Cpath d='M0,10 C16,0 48,20 64,10' stroke='%23BDB7B5' stroke-width='0.5' fill='none'/%3E%3C/svg%3E\")",
  },
  {
    label: "Topographic",
    bg: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cellipse cx='50' cy='50' rx='48' ry='28' fill='none' stroke='%23BDB7B5' stroke-width='0.5'/%3E%3Cellipse cx='50' cy='50' rx='36' ry='18' fill='none' stroke='%23BDB7B5' stroke-width='0.5'/%3E%3Cellipse cx='50' cy='50' rx='22' ry='10' fill='none' stroke='%23BDB7B5' stroke-width='0.5'/%3E%3C/svg%3E\")",
  },
];

export default function PatternTest() {
  return (
    <div className="flex flex-col">
      {bgPatterns.map(({ label, bg }) => (
        <div
          key={label}
          className="relative overflow-hidden"
          style={{ height: "40vh", backgroundColor: "var(--color-bg, #E9E6E7)" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{ backgroundImage: bg, backgroundRepeat: "repeat" }}
          />
          <span className="absolute left-6 top-5 text-xs font-semibold uppercase tracking-widest text-[#7B7F8A]">
            {label}
          </span>
        </div>
      ))}

      {/* Noise / Grain — uses inline SVG filter (can't use data URI for feTurbulence) */}
      <div
        className="relative overflow-hidden"
        style={{ height: "40vh", backgroundColor: "var(--color-bg, #E9E6E7)" }}
      >
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
        <span className="absolute left-6 top-5 text-xs font-semibold uppercase tracking-widest text-[#7B7F8A]">
          Noise / Grain
        </span>
      </div>
    </div>
  );
}
