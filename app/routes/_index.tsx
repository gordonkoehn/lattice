import type { MetaFunction } from "@vercel/remix";
import React, { useRef, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const sections = [
  {
    title: "Lattice - the coordination and data layer for the robotic age",
    video: "/A_dark,_industrial_tunnel_stretching_endlessly_int_0e1cbf22-1246-40e8-86ae-fed05990e0fc.mp4",
    desc: "We build the infrastructure of the robotic sharing economy."
  },
  {
    title: "Imagine Fiverr but for Robots",
    video: "/The_scene_depicts_a_humanoid_robot_walking_through_9701774e-357b-4976-8d4a-d6c74e369a76.webm",
    desc: "Across Producers. Monetize your Robots, Let Market Forces win."
  },
  {
    title: "Peer to Peer Payments and Verification of Task Completion",
    video: "/An_astronautical_laboratory_in_outer_space,_featur_9bff623b-375e-49b7-98a4-c09a642e6328.mp4",
    desc: "Secure, decentralized, and automated."
  },
  {
    title: "Placeholder for Flashy Animation",
    video: "/A_whimsical_scene_of_a_green_frog_puppet_sipping_t_cc49a246-9eeb-4ea4-a164-939a6f94aea7.mp4",
    desc: "Dynamic content coming soon."
  }
];

function Section({ title, video, desc, index }: any) {
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
        textAlign: "center"
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{title}</h2>
      <video src={video} autoPlay loop muted playsInline style={{ maxWidth: "100%", borderRadius: 16, boxShadow: "0 4px 32px #0002" }} />
      <p style={{ marginTop: "1.5rem", fontSize: "1.2rem", color: "#444" }}>{desc}</p>
    </section>
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
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8", background: "#f8f9fa" }}>
      <header style={{ textAlign: "center", padding: "3rem 1rem 1rem 1rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-1px" }}>Lattice</h1>
        <p style={{ fontSize: "1.3rem", color: "#555", marginTop: 8 }}>
          The coordination and data layer for the robotic age
        </p>
      </header>
      {sections.map((s, i) => (
        <Section key={i} {...s} index={i} />
      ))}
    </main>
  );
}
