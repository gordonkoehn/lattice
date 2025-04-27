import React from "react";
export default function Architecture() {
  return (
    <main style={{ padding: '2rem', maxWidth: 700, margin: '0 auto' }}>
      <h1>Architecture</h1>
      <section style={{ margin: '2rem 0' }}>
        <h2>Why On-Chain</h2>
        <ul>
          <li><strong>Low-Friction Payments:</strong> Seamless transactions for robots and humans.</li>
          <li><strong>Data Verification:</strong> Walrus ensures immutable, verifiable data delivery.</li>
          <li><strong>Trustless Contracts:</strong> Peer-to-peer agreements on Sui eliminate platform risk.</li>
        </ul>
      </section>
      <section style={{ margin: '2rem 0' }}>
        <h2>Token Model</h2>
        <ul>
          <li><strong>Type:</strong> Utility token named <strong>Silicon</strong>, built on Sui blockchain.</li>
          <li><strong>Utility:</strong>
            <ul>
              <li>Payments for data collection (Contributors) and curation (Curators).</li>
              <li>Staking by Contributors and Curators to ensure quality (slashed for poor performance).</li>
            </ul>
          </li>
          <li><strong>Sui Features:</strong>
            <ul>
              <li><strong>zkLogin:</strong> Seamless logins via web credentials, abstracting wallet management.</li>
              <li><strong>Stablecoin Conversion:</strong> Automatic conversion to USDC/USDT via Sui smart contracts.</li>
              <li><strong>Hold/Sell:</strong> Participants choose to hold Silicon or sell seamlessly via Sui smart contracts.</li>
            </ul>
          </li>
        </ul>
      </section>
      <section style={{ margin: '2rem 0' }}>
        <h2>Token Supply</h2>
        <ul>
          <li><strong>Total Supply:</strong> 1B Silicon tokens (fixed).</li>
          <li><strong>Allocation:</strong>
            <ul>
              <li>Team: 15% (150M, 4-year vesting).</li>
              <li>Ecosystem Fund: 20% (200M, for development, partnerships).</li>
              <li>Community: 65% (650M, via task and curation rewards).</li>
            </ul>
          </li>
          <li><strong>No Presale:</strong> Distributed through task and curation rewards.</li>
        </ul>
      </section>
      <section style={{ margin: '2rem 0' }}>
        <h2>Token Flow</h2>
        <ol>
          <li>Consumers post bounties with Silicon, deposited into escrow for data collection and curation.</li>
          <li>Contributors (robotic or human) collect data (e.g., 3D maps, crop data), upload to Walrus.</li>
          <li>Curators refine data (e.g., clean, annotate), upload enhanced data to Walrus.</li>
          <li>Walrus verifies data and curation quality; Silicon released to Contributors and Curators.</li>
          <li>Platform takes 1-2% fee for ecosystem funding.</li>
        </ol>
      </section>
      <section style={{ margin: '2rem 0' }}>
        <h2>Incentives</h2>
        <ul>
          <li><strong>Contributors:</strong> Earn Silicon for data collection; high-quality submissions boost reputation.</li>
          <li><strong>Curators:</strong> Earn Silicon for refining data; quality curation enhances reputation.</li>
          <li><strong>Consumers:</strong> Access raw and refined data; potential revenue from data sales.</li>
        </ul>
      </section>
      <section style={{ margin: '2rem 0' }}>
        <h2>Data Handling</h2>
        <ul>
          <li><strong>Storage:</strong> Raw and curated data stored on Walrus for immutability.</li>
          <li><strong>Verification:</strong> On-chain proof of delivery on Sui triggers payments.</li>
          <li><strong>Data Marketplace:</strong> Future sales of anonymized data (40% Consumer, 30% Contributor, 20% Curator, 10% platform).</li>
        </ul>
      </section>
      <section style={{ margin: '2rem 0' }}>
        <h2>Sustainability</h2>
        <ul>
          <li><strong>Demand:</strong> Driven by bounty posting, staking, and data sales.</li>
          <li><strong>Supply:</strong> Fixed, balanced by fees and potential Silicon burns.</li>
        </ul>
      </section>
      <section style={{ margin: '2rem 0' }}>
        <h2>Technical Architecture</h2>
        <ul>
          <li><strong>Data Storage:</strong> Raw and curated data stored on Walrus, ensuring decentralized, immutable availability.</li>
          <li><strong>Order Management:</strong> Bounties and completion criteria hosted transparently on Sui smart contracts, inspired by DeepBook’s efficient order book for matching Contributors, Curators, and Consumers.</li>
          <li><strong>Integration:</strong> Sui smart contracts manage escrow, payments, and verification, interfacing with Walrus for on-chain proof of delivery.</li>
        </ul>
      </section>
    </main>
  );
}
