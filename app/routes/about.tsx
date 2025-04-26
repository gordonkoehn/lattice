import React from "react";

export default function About() {
  return (
    <main style={{ padding: '2rem', maxWidth: 700, margin: '0 auto' }}>
      <h1>About / Team</h1>
      <section style={{ margin: '2rem 0' }}>
        <h2>Founders</h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <img src="/gordon_profile_pic.webp" alt="Gordon Koehn" style={{ width: 160, height: 160, objectFit: 'cover', borderRadius: '50%', boxShadow: '0 2px 16px #0002' }} />
            <h3 style={{ marginTop: '1rem' }}>Gordon Koehn</h3>
            <p>Co-Founder & Web3 Lead</p>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <img src="/jonas-profile_pic.jpeg" alt="Jonas" style={{ width: 160, height: 160, objectFit: 'cover', borderRadius: '50%', boxShadow: '0 2px 16px #0002' }} />
            <h3 style={{ marginTop: '1rem' }}>Jonas</h3>
            <p>Co-Founder & Robotics Lead</p>
          </div>
        </div>
      </section>
    </main>
  );
}
