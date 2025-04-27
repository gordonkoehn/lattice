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
        <h2>Technical Architecture</h2>
        <ul>
          <li>
            <strong>Data Storage:</strong> Task outputs (e.g., 3D maps, crop data) stored on Walrus, ensuring decentralized, immutable, and verifiable data availability.
          </li>
          <li>
            <strong>Order Management:</strong> Task orders and completion criteria hosted transparently on Sui smart contracts, inspired by DeepBook’s efficient order book for high-throughput, low-latency matching of tasks and operators.
          </li>
          <li>
            <strong>Integration:</strong> Sui smart contracts handle escrow, payments, and verification, interfacing with Walrus for on-chain proof of delivery, ensuring trustless execution.
          </li>
        </ul>
      </section>
      <section style={{ margin: '2rem 0' }}>
        <h2>Lattice Tokenomics</h2>
        <h3>Why On-Chain</h3>
        <ul>
          <li><strong>Low-Friction Payments:</strong> Seamless transactions for robots and humans.</li>
          <li><strong>Data Verification:</strong> Walrus ensures immutable, verifiable data delivery.</li>
          <li><strong>Trustless Contracts:</strong> Peer-to-peer agreements on Sui eliminate platform risk.</li>
        </ul>
        <h3>Token Model</h3>
        <ul>
          <li><strong>Type:</strong> Utility token named <strong>Silicon</strong>, built on Sui blockchain.</li>
          <li><strong>Utility:</strong>
            <ul>
              <li>Payments for tasks and data delivery by robots or humans.</li>
              <li>Staking by operators to ensure quality (slashed for poor performance).</li>
            </ul>
          </li>
          <li><strong>Sui Features:</strong>
            <ul>
              <li><strong>zkLogin:</strong> Seamless logins via web credentials, abstracting wallet management for humans.</li>
              <li><strong>Stablecoin Conversion:</strong> Automatic conversion to USDC/USDT via Sui smart contracts.</li>
              <li><strong>Hold/Sell:</strong> Users choose to hold Silicon or sell seamlessly, with transactions managed by Sui smart contracts.</li>
            </ul>
          </li>
        </ul>
        <h3>Token Supply</h3>
        <ul>
          <li><strong>Total Supply:</strong> 1B Silicon tokens (fixed).</li>
          <li><strong>Allocation:</strong>
            <ul>
              <li>Team: 15% (150M, 4-year vesting).</li>
              <li>Ecosystem Fund: 20% (200M, for development, partnerships).</li>
              <li>Community: 65% (650M, via task rewards).</li>
            </ul>
          </li>
          <li><strong>No Presale:</strong> Distributed through task rewards.</li>
        </ul>
        <h3>Token Flow</h3>
        <ol>
          <li>Task posters (humans or robots) buy Silicon, deposit into escrow.</li>
          <li>Operators (robotic or human) complete tasks, upload data to Walrus.</li>
          <li>Walrus verifies data; Silicon released to operators.</li>
          <li>Platform takes 1-2% fee for ecosystem funding.</li>
        </ol>
        <h3>Incentives</h3>
        <ul>
          <li><strong>Operators (Robots/Humans):</strong> Earn Silicon; high-quality data boosts reputation.</li>
          <li><strong>Task Posters:</strong> Access efficient, verified data; potential data sale revenue.</li>
        </ul>
        <h3>Data Handling</h3>
        <ul>
          <li><strong>Storage:</strong> Walrus for immutable, decentralized storage.</li>
          <li><strong>Verification:</strong> On-chain proof of delivery on Sui triggers payments.</li>
          <li><strong>Data Marketplace:</strong> Future sales of anonymized data (40% poster, 40% operator, 20% platform).</li>
        </ul>
        <h3>Sustainability</h3>
        <ul>
          <li><strong>Demand:</strong> Driven by task posting, staking, and data sales.</li>
          <li><strong>Supply:</strong> Fixed, balanced by fees and potential Silicon burns.</li>
        </ul>
      </section>
    </main>
  );
}
