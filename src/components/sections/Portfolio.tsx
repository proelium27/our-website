const projects = [
  {
    name: "Riverside Plumbing & Heating",
    tag: "Home Services",
    bg: "#DDE1E9",
  },
  {
    name: "The Oak Table",
    tag: "Restaurant",
    bg: "#E3DDDB",
  },
  {
    name: "Apex Fitness Studio",
    tag: "Health & Fitness",
    bg: "#E8E2DF",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="border-y border-border py-24"
      style={{ backgroundColor: "#DEDAD9" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#6B7C98" }}
          >
            Selected Work
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-foreground">
            Our Work
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "#7B7F8A" }}>
            A sample of the websites we've built for local businesses just like yours.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.name}
              className="overflow-hidden rounded-xl border border-border bg-white"
            >
              {/* Mock browser preview */}
              <div
                className="relative flex h-52 flex-col"
                style={{ backgroundColor: p.bg }}
                aria-label={`${p.name} project preview`}
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 border-b border-black/10 bg-white/40 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-black/15" />
                  <span className="h-2 w-2 rounded-full bg-black/15" />
                  <span className="h-2 w-2 rounded-full bg-black/15" />
                  <span className="ml-2 h-3 flex-1 rounded bg-white/50 text-[10px]" />
                </div>
                {/* Preview area */}
                <div className="flex flex-1 items-center justify-center">
                  <span
                    className="rounded px-2 py-1 text-xs font-medium"
                    style={{ color: "#7B7F8A", backgroundColor: "rgba(255,255,255,0.5)" }}
                  >
                    Project Preview
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <span
                  className="mb-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold"
                  style={{ backgroundColor: "#E9E6E7", color: "#7B7F8A" }}
                >
                  {p.tag}
                </span>
                <h3
                  className="mb-4 text-base font-semibold tracking-tight"
                  style={{ color: "#5E5653" }}
                >
                  {p.name}
                </h3>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-70"
                  style={{ color: "#6B7C98" }}
                  aria-label={`View ${p.name} project`}
                >
                  View Project
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
