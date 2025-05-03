import type { MetaFunction } from "@vercel/remix";
import React from "react";
import { Link } from "@remix-run/react"; // Import Link
import LatticeBackground from "../components/LatticeBackground"; // Import the background component

export const meta: MetaFunction = () => {
  return [
    { title: "Lattice" },
    { name: "description", content: "Coordination & Data Layer of the Robotics Age" },
  ];
};

// Update InfoTile props to include linkTo
function InfoTile({ title, subtitle, imagePath, linkTo }: { title: string; subtitle: string; imagePath: string; linkTo: string }) {
  return (
    // Wrap the tile content with Link
    <Link to={linkTo} style={{ textDecoration: 'none', color: 'inherit', display: 'block', flex: 1, minWidth: '250px', maxWidth: '300px', margin: '1rem' }}>
      <div
        style={{
          borderRadius: '12px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // White transparent background
          color: '#333', // Darker text color for contrast
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center items horizontally
          padding: '1.5rem',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Softer shadow
          textAlign: 'center', // Center text
          height: '100%', // Ensure div takes full height of the link wrapper
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out', // Add transition for hover effect
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        }}
      >
        {/* Title above image */}
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.2rem', fontWeight: 600 }}>{title}</h3>
        <img
          src={imagePath}
          alt={`${title} illustration`}
          style={{
            width: '100%', // Make image responsive
            maxWidth: '150px', // Limit max width
            height: 'auto', // Maintain aspect ratio
            marginBottom: '1rem', // Space below image
            objectFit: 'contain',
          }}
        />
        <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.4 }}>{subtitle}</p>
      </div>
    </Link>
  );
}

export default function Index() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8", position: 'relative', overflowX: 'hidden', overflowY: 'auto' }}> {/* Ensure vertical scroll */}
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
        
        <div className="p-6 m-6 bg-green-100 text-green-800 rounded-lg shadow">
          Tailwind is working!
        </div>

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
            linkTo="/contribute"
          />
          <InfoTile
            title="Curate Data"
            subtitle="Earn by enhancing recollection."
            imagePath="/robotic_curator.png"
            linkTo="/curate"
          />
          <InfoTile
            title="Consume Data"
            subtitle="Accelerate robotic real-world learning."
            imagePath="/robotic_consumers.png"
            linkTo="/consume"
          />
        </section>

        {/* How It Works Section */}
        <section style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white background
          padding: '4rem 2rem',
          margin: '4rem 0',
          textAlign: 'center',
        }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>How Lattice Works</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 1.5rem auto', fontSize: '1.1rem', color: '#555' }}>
            Lattice connects robots, data curators, and AI developers in a seamless ecosystem. Robots contribute valuable real-world data, curators enhance it, and developers leverage it to build smarter AI.
          </p>
          {/* Placeholder for a diagram or more detailed steps */}
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '2rem' }}>
            <div style={{ flex: 1, minWidth: '200px', margin: '1rem' }}>
              <img src="/robotic_contributer.png" alt="Contribute" style={{ width: '80px', height: 'auto', marginBottom: '0.5rem' }} />
              <h4 style={{ color: '#333' }}>Contribute</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Robots share experiences.</p>
            </div>
            <div style={{ flex: 1, minWidth: '200px', margin: '1rem' }}>
              <img src="/robotic_curator.png" alt="Curate" style={{ width: '80px', height: 'auto', marginBottom: '0.5rem' }} />
              <h4 style={{ color: '#333' }}>Curate</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Humans enhance data.</p>
            </div>
            <div style={{ flex: 1, minWidth: '200px', margin: '1rem' }}>
              <img src="/robotic_consumers.png" alt="Consume" style={{ width: '80px', height: 'auto', marginBottom: '0.5rem' }} />
              <h4 style={{ color: '#333' }}>Consume</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>AI learns faster.</p>
            </div>
          </div>
        </section>

        {/* Our Technology Section */}
        <section style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white background
          padding: '4rem 2rem',
          margin: '4rem 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <div style={{ flex: 1, minWidth: '300px', paddingRight: '2rem', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>Powered by Cutting-Edge Tech</h2>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#555' }}>
              We leverage decentralized technologies like Sui blockchain and Walrus storage to ensure secure, transparent, and efficient data exchange and coordination.
            </p>
            <Link to="/architecture" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Learn about our Architecture →</Link>
          </div>
          <div style={{ flex: 1, minWidth: '300px', textAlign: 'center' }}>
            {/* Placeholder for a technology graphic */}
            <img src="/Silicon.png" alt="Technology Stack" style={{ maxWidth: '300px', width: '100%', height: 'auto', borderRadius: '8px' }} />
          </div>
        </section>

        {/* Placeholder Footer Section (Optional) */}
        <footer style={{
          backgroundColor: 'rgba(240, 240, 240, 0.8)',
          padding: '2rem 1rem',
          marginTop: '4rem',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#666'
        }}>
          © {new Date().getFullYear()} Lattice. All rights reserved.
          {/* Add more footer links if needed */}
        </footer>

      </div>
    </main>
  );
}
