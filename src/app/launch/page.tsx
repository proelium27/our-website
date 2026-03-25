"use client";
import { useState } from "react";

const palette = {
  bg: "#E9E6E7",
  surface: "#DEDAD9",
  border: "#CEC9C8",
  text: "#5E5653",
  muted: "#7B7F8A",
  accent: "#6B7C98",
  taupe: "#AB978C",
};

const sections = [
  {
    id: "today",
    emoji: "🚀",
    title: "Do Today",
    items: [
      { text: "Push site to GitHub → Vercel auto-deploys", tag: "Now", sub: null },
      { text: "Create Google My Business listing for Fixable", tag: "Now", sub: "Surfaces you in local search when people look for web designers near them." },
      { text: "Both co-founders update LinkedIn to 'Co-founder @ Fixable'", tag: "Now", sub: "Social proof starts with your own profiles." },
      { text: "Build prospect list — 20 local DMV businesses with weak or no websites", tag: "Now", sub: "Search Google Maps for plumbers, dentists, restaurants, contractors with bad or missing sites." },
      { text: "Identify 3–5 warm leads from existing network", tag: "Now", sub: "A plumber, dentist, restaurant owner, or contractor who already knows and trusts you." },
    ],
  },
  {
    id: "week2",
    emoji: "📣",
    title: "Week 2 — Outreach Begins",
    items: [
      { text: "Contact 5 warm network prospects first", tag: "Week 2", sub: "\"Hi [Name], we just launched Fixable — we build websites for local businesses. Would love to show you what we could do for [Business].\"" },
      { text: "Post on LinkedIn about Fixable's first project", tag: "Week 2", sub: "Own the story. Before/after screenshot. Keep it short and genuine." },
      { text: "Join DMV local business Facebook groups", tag: "Week 2", sub: "Be helpful, don't pitch. Answer questions. Become a known face before you sell." },
      { text: "Begin cold outreach to prospect list (5–10 per day)", tag: "Week 2", sub: "The offer: free mockup of their new site, no commitment required." },
    ],
  },
  {
    id: "week34",
    emoji: "💰",
    title: "Weeks 3–4 — First Closes",
    items: [
      { text: "Deliver all mockups within 3–5 days as promised", tag: "Week 3", sub: "This is your proof of speed. Reliability is your biggest early differentiator." },
      { text: "Screenshot every prospect's old site before outreach", tag: "Week 3", sub: "You'll need the before/after when you close them and add them to your portfolio." },
      { text: "Close 1–2 paying clients at 50–60% of full price", tag: "Week 4", sub: "In exchange for a testimonial and permission to feature their site in the portfolio." },
      { text: "Ask first clients: \"Do you know any other business owners who need this?\"", tag: "Week 4", sub: "Referrals from satisfied clients are your highest-leverage early channel." },
    ],
  },
  {
    id: "firstclient",
    emoji: "⭐",
    title: "First Client Playbook",
    items: [
      { text: "Build their site → screenshot before and after", tag: null, sub: null },
      { text: "Ask for a written testimonial", tag: null, sub: "Make it specific: what problem did we solve, what changed, would they recommend us." },
      { text: "Add their site to the portfolio section on fixable.co", tag: null, sub: "Real work beats mockups every time." },
      { text: "Update hero stats on the site with real numbers", tag: null, sub: null },
      { text: "Ask for a Google review for Fixable's GMB listing", tag: null, sub: null },
    ],
  },
  {
    id: "seo",
    emoji: "📈",
    title: "Months 2–3 — SEO Flywheel",
    items: [
      { text: "Build vertical landing pages", tag: "Later", sub: "/hvac-web-design, /restaurant-web-design, /dentist-web-design — each targets a high-intent keyword." },
      { text: "Get 5 Google reviews on GMB listing", tag: "Later", sub: "Five reviews puts Fixable on the map — literally. Local pack eligibility starts here." },
      { text: "Write first case study", tag: "Later", sub: "\"How we helped [business] get 3x more calls with a new website\" — one page, real numbers." },
      { text: "Reach out to Bethesda Chamber of Commerce / DC SBDC", tag: "Later", sub: "Show up, be young founders, ask about member spotlights or referral programs." },
      { text: "Pitch the 'young founder' story to local DMV news", tag: "Later", sub: "Local press loves young entrepreneur stories. One article = months of social proof." },
    ],
  },
];

const tagColors: Record<string, { bg: string; color: string }> = {
  "Now":    { bg: "rgba(107,124,152,0.15)", color: "#6B7C98" },
  "Week 2": { bg: "rgba(171,151,140,0.2)",  color: "#AB978C" },
  "Week 3": { bg: "rgba(94,86,83,0.12)",    color: "#5E5653" },
  "Week 4": { bg: "rgba(94,86,83,0.12)",    color: "#5E5653" },
  "Later":  { bg: "#CEC9C8",                color: "#7B7F8A" },
};

function Checkmark() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <polyline
        points="1.5,5 4,7.5 8.5,2"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LaunchStrategyPage() {
  const totalItems = sections.reduce((a, s) => a + s.items.length, 0);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggleItem = (sId: string, iIdx: number) => {
    const key = `${sId}-${iIdx}`;
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSection = (sId: string) => {
    setCollapsed((prev) => ({ ...prev, [sId]: !prev[sId] }));
  };

  const totalChecked = Object.values(checked).filter(Boolean).length;
  const pct = totalItems ? (totalChecked / totalItems) * 100 : 0;

  return (
    <div
      style={{
        fontFamily: "inherit",
        background: palette.bg,
        minHeight: "100vh",
        padding: "40px 20px 80px",
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: palette.accent,
              marginBottom: 8,
            }}
          >
            Fixable
          </div>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: 8,
              color: palette.text,
            }}
          >
            Launch Strategy
          </h1>
          <p style={{ fontSize: 14, color: palette.muted, lineHeight: 1.6 }}>
            Direct outreach → free mockup → first paying clients → portfolio → inbound.
          </p>
        </div>

        {/* Progress */}
        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 12,
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              flex: 1,
              height: 8,
              background: palette.border,
              borderRadius: 99,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${pct}%`,
                background: palette.accent,
                borderRadius: 99,
                transition: "width 0.3s ease",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: palette.accent,
              whiteSpace: "nowrap",
            }}
          >
            {totalChecked} / {totalItems} done
          </div>
        </div>

        {/* Phases */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 8,
            marginBottom: 28,
          }}
        >
          {[
            { label: "Phase 1", sub: "✓ HVAC demo built", done: true },
            { label: "Phase 2", sub: "Site live, outreach begins", active: true },
            { label: "Phase 3", sub: "2–3 paying clients" },
            { label: "Phase 4", sub: "SEO + referrals" },
          ].map((p, i) => (
            <div
              key={i}
              style={{
                background: p.active ? palette.accent : palette.surface,
                border: `1px solid ${p.done || p.active ? palette.accent : palette.border}`,
                borderRadius: 10,
                padding: "12px 10px",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: p.active ? "#fff" : p.done ? palette.accent : palette.text,
                  marginBottom: 3,
                }}
              >
                {p.label}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: p.active ? "rgba(255,255,255,0.8)" : palette.muted,
                  lineHeight: 1.4,
                }}
              >
                {p.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Sections */}
        {sections.map((section) => {
          const sChecked = section.items.filter(
            (_, i) => checked[`${section.id}-${i}`]
          ).length;
          const isCollapsed = collapsed[section.id];

          return (
            <div key={section.id} style={{ marginBottom: 20 }}>
              <div
                onClick={() => toggleSection(section.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 10,
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                <span style={{ fontSize: 16 }}>{section.emoji}</span>
                <span style={{ flex: 1, fontSize: 15, fontWeight: 700, color: palette.text }}>
                  {section.title}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: palette.muted,
                    background: palette.surface,
                    border: `1px solid ${palette.border}`,
                    borderRadius: 99,
                    padding: "2px 8px",
                  }}
                >
                  {sChecked}/{section.items.length}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    color: palette.muted,
                    transform: isCollapsed ? "rotate(-90deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                    display: "inline-block",
                  }}
                >
                  ▼
                </span>
              </div>

              {!isCollapsed && (
                <div
                  style={{
                    background: palette.surface,
                    border: `1px solid ${palette.border}`,
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  {section.items.map((item, iIdx) => {
                    const key = `${section.id}-${iIdx}`;
                    const isDone = !!checked[key];

                    return (
                      <div
                        key={iIdx}
                        onClick={() => toggleItem(section.id, iIdx)}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 12,
                          padding: "13px 18px",
                          borderBottom:
                            iIdx < section.items.length - 1
                              ? `1px solid ${palette.border}`
                              : "none",
                          cursor: "pointer",
                          opacity: isDone ? 0.5 : 1,
                          transition: "opacity 0.2s",
                        }}
                      >
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            flexShrink: 0,
                            marginTop: 1,
                            border: `2px solid ${isDone ? palette.accent : palette.border}`,
                            borderRadius: 6,
                            background: isDone ? palette.accent : palette.bg,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.15s",
                          }}
                        >
                          {isDone && <Checkmark />}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              fontSize: 14,
                              fontWeight: 500,
                              color: palette.text,
                              lineHeight: 1.5,
                            }}
                          >
                            {item.tag && (
                              <span
                                style={{
                                  display: "inline-block",
                                  fontSize: 10,
                                  fontWeight: 700,
                                  letterSpacing: "0.06em",
                                  textTransform: "uppercase",
                                  padding: "2px 8px",
                                  borderRadius: 99,
                                  marginRight: 7,
                                  background: tagColors[item.tag]?.bg,
                                  color: tagColors[item.tag]?.color,
                                }}
                              >
                                {item.tag}
                              </span>
                            )}
                            {item.text}
                          </div>
                          {item.sub && (
                            <div
                              style={{
                                fontSize: 12,
                                color: palette.muted,
                                marginTop: 3,
                                lineHeight: 1.5,
                              }}
                            >
                              {item.sub}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {/* Reset */}
        <button
          onClick={() => setChecked({})}
          style={{
            display: "block",
            margin: "24px auto 0",
            background: "transparent",
            border: `1.5px solid ${palette.border}`,
            borderRadius: 8,
            padding: "9px 22px",
            fontFamily: "inherit",
            fontSize: 13,
            fontWeight: 600,
            color: palette.muted,
            cursor: "pointer",
          }}
        >
          Reset all
        </button>
      </div>
    </div>
  );
}
