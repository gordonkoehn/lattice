import type { MetaFunction } from "@vercel/remix";
import React, { useRef, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Lattice" },
    { name: "description", content: "Coordination & Data Layer of the Robotics Age" },
  ];
};

const sections = [
  {
    title: "Lattice - the coordination and data layer for the robotic age",
    desc: "We build the infrastructure of the robotic sharing economy."
  },
  {
    title: "Imagine Fiverr but for Robots",
    desc: "Across Producers. Monetize your Robots, Let Market Forces win."
  }
];

function Section({ title, desc, index }: { title: string; desc: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        el.classList.add("visible");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="fade-section"
      style={{
        opacity: 0,
        transform: "translateY(40px)",
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
        margin: "4rem 0",
        padding: "0 1rem",
        textAlign: "center"
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{title}</h2>
      <p style={{ marginTop: "1.5rem", fontSize: "1.2rem", color: "#444" }}>{desc}</p>
    </section>
  );
}

function InfoTile({ title, subtitle, imagePath }: { title: string; subtitle: string; imagePath: string }) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: '250px',
        height: '300px',
        borderRadius: '12px',
        backgroundImage: `url(${imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '1.5rem',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        textShadow: '0 1px 3px rgba(0,0,0,0.6)',
        margin: '1rem',
      }}
    >
      <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 0.5rem 0' }}>{title}</h3>
      <p style={{ fontSize: '1rem', margin: 0 }}>{subtitle}</p>
    </div>
  );
}

export default function Index() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `.fade-section.visible { opacity: 1 !important; transform: none !important; }`;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8", background: "#f8f9fa", padding: "0 1rem" }}>
      <header style={{ textAlign: "center", padding: "3rem 1rem 1rem 1rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-1px" }}>Lattice</h1>
        <p style={{ fontSize: "1.3rem", color: "#555", marginTop: 8 }}>
          The coordination and data layer for the robotic age
        </p>
      </header>

      <section style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '1000px',
        margin: '4rem auto',
        padding: '0 1rem',
      }}>
        <InfoTile
          title="Contribute Data"
          subtitle="Monetize your robots experiences."
          imagePath="/robotic_contributer.png"
        />
        <InfoTile
          title="Curate Data"
          subtitle="Earn by enhancing recollection."
          imagePath="/robotic_curator.png"
        />
        <InfoTile
          title="Consume Data"
          subtitle="Accelerate robotic real-world learning."
          imagePath="/robotic_consumers.png"
        />
      </section>

      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        {sections.map((s, i) => (
          <Section key={i} {...s} index={i} />
        ))}
      </div>
    </main>
  );
}
