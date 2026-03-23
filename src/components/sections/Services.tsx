type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function MonitorIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="#6B7C98"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="3" width="24" height="16" rx="2.5" />
      <path d="M9 25h10M14 19v6" />
    </svg>
  );
}

function SearchUpIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="#6B7C98"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="m26 26-5.5-5.5" />
      <path d="M9 12l3-3 3 3M12 9v6" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="#6B7C98"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 3L4 7v7c0 6.5 4.5 11 10 13 5.5-2 10-6.5 10-13V7L14 3z" />
      <path d="M10 14l3 3 5-5" />
    </svg>
  );
}

const services: Service[] = [
  {
    icon: <MonitorIcon />,
    title: "Website Design",
    description:
      "Custom-built websites that look sharp on every device. Clean layouts, fast load times, and a visual identity your clients will trust — deployed on Vercel so your site loads fast enough to rank higher on Google.",
  },
  {
    icon: <SearchUpIcon />,
    title: "SEO & Google Visibility",
    description:
      "Rank where your customers are searching. We optimize every page for search, set up your Google Business Profile, and build the technical foundation that gets you higher in Google Maps results.",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Ongoing Maintenance",
    description:
      "Think of us as your web team on retainer. We handle monthly performance reports, security monitoring, content updates, and a guaranteed response SLA — so you can focus on running your business.",
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
            We handle the full picture — from design to the technical details
            that get you found and chosen.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-border bg-white/60 p-8"
            >
              <div className="mb-5">{s.icon}</div>
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
