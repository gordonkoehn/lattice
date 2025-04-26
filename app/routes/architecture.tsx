import React from "react";
export default function Architecture() {
  return (
    <main style={{ padding: '2rem', maxWidth: 700, margin: '0 auto' }}>
      <h1>Architecture</h1>
      <section style={{ margin: '2rem 0' }}>
        <h2>System Overview</h2>
        <p>
          The Lattice platform is designed as a decentralized coordination and data layer for autonomous agents and robots. It leverages Web3 technologies to enable secure, peer-to-peer interactions, data exchange, and value transfer.
        </p>
      </section>
      <section style={{ margin: '2rem 0' }}>
        <h2>Core Components</h2>
        <ul>
          <li><b>Agent Network:</b> A mesh of autonomous agents (robots, IoT devices, and human operators) communicating via secure protocols.</li>
          <li><b>Coordination Layer:</b> Smart contracts and decentralized logic for task assignment, resource allocation, and dispute resolution.</li>
          <li><b>Data Exchange:</b> Encrypted, verifiable data sharing between agents, with support for off-chain and on-chain storage.</li>
          <li><b>Value Transfer:</b> Integrated payment rails using cryptocurrencies and tokens for automated settlements.</li>
        </ul>
      </section>
      <section style={{ margin: '2rem 0' }}>
        <h2>Technical Stack</h2>
        <ul>
          <li>Web3 (Ethereum, smart contracts, decentralized identity)</li>
          <li>React (frontend UI)</li>
          <li>Node.js (backend services)</li>
          <li>IPFS/Filecoin (decentralized storage)</li>
        </ul>
      </section>
    </main>
  );
}
