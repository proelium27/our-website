const services = [
  {
    emoji: "🖥",
    title: "Website Design",
    description:
      "Custom-built websites that look sharp on every device. Clean layouts, fast load times, and a visual identity your clients will trust the moment they land on your page.",
  },
  {
    emoji: "🔍",
    title: "SEO & Google Visibility",
    description:
      "Rank where your customers are searching. We optimize every page for search, set up Google My Business, and build the technical foundation that search engines reward.",
  },
  {
    emoji: "🛡",
    title: "Ongoing Maintenance",
    description:
      "Keep your site secure, fast, and up to date without lifting a finger. We handle updates, backups, performance monitoring, and quick edits so you can focus on running your business.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#6B7C98" }}
          >
            What We Do
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-foreground">
            Everything You Need
            <br />
            to Win Online
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "#7B7F8A" }}>
            We handle the full picture — from stunning design to the technical
            details that get you found and chosen.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-border bg-white/60 p-8"
            >
              <div className="mb-5 text-3xl">{s.emoji}</div>
              <h3
                className="mb-3 text-lg font-semibold tracking-tight"
                style={{ color: "#5E5653" }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#7B7F8A" }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
