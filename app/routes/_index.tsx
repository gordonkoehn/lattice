import type { MetaFunction } from "@vercel/remix";
import React from "react";
import LatticeBackground from "../components/LatticeBackground"; // Import the background component

export const meta: MetaFunction = () => {
  return [
    { title: "Lattice" },
    { name: "description", content: "Coordination & Data Layer of the Robotics Age" },
  ];
};

function InfoTile({ title, subtitle, imagePath }: { title: string; subtitle: string; imagePath: string }) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: '250px',
        maxWidth: '300px', // Added max width for better spacing
        borderRadius: '12px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // White transparent background
        color: '#333', // Darker text color for contrast
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center items horizontally
        padding: '1.5rem',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Softer shadow
        margin: '1rem',
        textAlign: 'center', // Center text
      }}
    >
      {/* Title above image */}
      <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 1rem 0' }}>{title}</h3>
      {/* Image element */}
      <img 
        src={imagePath} 
        alt={title} 
        style={{
          width: '100%', // Make image responsive
          height: '180px', // Fixed height for the image area
          objectFit: 'cover', // Cover the area without distortion
          borderRadius: '8px', // Slightly rounded corners for the image
          marginBottom: '1rem', // Space below image
        }}
      />
      {/* Subtitle below image */}
      <p style={{ fontSize: '1rem', margin: 0 }}>{subtitle}</p>
    </div>
  );
}

export default function Index() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8", padding: "0 1rem", position: 'relative', overflow: 'hidden' }}> {/* Removed background color */}
      <LatticeBackground /> {/* Add the background component */}
      <div style={{ position: 'relative', zIndex: 1 }}> {/* Added wrapper div for content */} 
        <header style={{ textAlign: "center", padding: "3rem 1rem 1rem 1rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-1px" }}>Lattice</h1>
        </header>
        <section style={{ textAlign: 'center', margin: '4rem 0', padding: '0 1rem' }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Lattice - the coordination and data layer for the robotic age</h2>
          <p style={{ marginTop: "1.5rem", fontSize: "1.2rem", color: "#444" }}>We build the infrastructure of the robotic sharing economy.</p>
        </section>
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
      </div> {/* Close wrapper div */}
    </main>
  );
}
