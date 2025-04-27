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
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8", padding: "0 1rem", position: 'relative', overflow: 'hidden' }}>
      <LatticeBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Combined Header Section */}
        <header style={{
          textAlign: "center",
          padding: "4rem 1rem 3rem 1rem",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          {/* Logo */}
          <img 
            src="/lattic.png" 
            alt="Lattice Logo" 
            style={{
              width: '100px', // Adjust size as needed
              height: 'auto',
              marginBottom: '1rem', // Space below logo
            }}
          />

          {/* Removed Orange Box */}
          <h1 style={{
            fontSize: "3.5rem", // Slightly larger
            fontWeight: 700,
            letterSpacing: "-0.5px",
            color: '#000000', // Black color
            margin: '0 0 1.5rem 0', // Adjusted margin
          }}>Lattice</h1>

          {/* Subtitle H2 */}
          <h2 style={{
            fontSize: "1.9rem", // Larger size
            fontWeight: 500,
            color: '#222',
            margin: '0 0 1rem 0', // Adjusted margin bottom
            maxWidth: '750px',
            lineHeight: 1.4,
          }}>The coordination and data layer for the robotic age</h2>

          {/* Tagline H3 */}
          <h3 style={{
            fontSize: "1.3rem", // Larger size
            fontWeight: 400,
            color: '#444',
            margin: 0,
            maxWidth: '650px',
            lineHeight: 1.5,
          }}>We build the infrastructure of the robotic sharing economy.</h3>
        </header>

        {/* InfoTile Section */}
        <section style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '1000px',
          margin: '2rem auto 4rem auto', // Adjusted top margin
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
      </div>
    </main>
  );
}
