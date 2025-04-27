import React from "react";

export default function Mission() {
  return (
    <main style={{ padding: '2rem', maxWidth: 700, margin: '0 auto' }}>
      <h1>Mission</h1>
      <section style={{ margin: '2rem 0' }}>
        <h2>Our Mission</h2>
        <p>
        Autonomous robots are stuck in corporate silos, wasting effort on duplicated tasks like 3D mapping and data generation for embodied AI; Lattice builds a decentralized coordination and data layer on Sui, enabling efficient task collaboration and data sharing among robots, such as warehouse robotics.
        </p>
      </section>
      <section style={{ margin: '2rem 0' }}>
        <h2>100-Word Pitch</h2>
        <p>
          Autonomous robots are revolutionizing industries, yet corporate silos trap their potential, duplicating tasks like 3D mapping and data generation for embodied AI, such as warehouse robotics. Lattice, built on Sui’s blockchain, unlocks this by providing a decentralized coordination and data layer, optimizing task allocation and data sharing among robots. In warehouses, robots can coordinate inventory tracking, share navigation insights, and enhance efficiency. On-chain, Lattice ensures:
        </p>
        <ul>
          <li><strong>Low-Friction Payments</strong>: Seamless, low-cost transactions via Sui’s high-throughput blockchain.</li>
          <li><strong>Data Verification</strong>: Walrus delivers immutable, trusted AI data.</li>
          <li><strong>Trustless Contracts</strong>: Sui’s smart contracts enable secure, intermediary-free agreements.</li>
        </ul>
        <p>Lattice fosters a robotic sharing economy, breaking barriers and encouraging collaboration.</p>
      </section>
    </main>
  );
}
