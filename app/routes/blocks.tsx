type Block = {
  id: number;
  title: string;
  emoji: string;
  category: string;
  description: string;
};

const blocks: Block[] = [
  { id: 1, title: "Modular Design", emoji: "🧱", category: "Architecture",    
    description: "Components structured like a lattice: reusable and robust."},
  { id: 2, title: "Reusable Code", emoji: "♻️", category: "Engineering",    
    description: "Functions and modules that scale with minimal duplication."},
  { id: 3, title: "Real-Time Feedback", emoji: "⚡", category: "UX",    
    description: "Immediate visual and interactive responses to user input."},
  { id: 4, title: "Semantic Data", emoji: "🧠", category: "Knowledge",    
    description: "Data structures that support meaningful machine interaction."},
];

import { useState } from "react";

export default function BlocksPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleBlock = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <main style={{ padding: "4rem 2rem", fontFamily: "Inter, sans-serif" }}>
      <h1 style={{ textAlign: "center", fontWeight: "700", fontSize: "2rem" }}>
        Lattice Blocks
      </h1>
      <p style={{ textAlign: "center", color: "#A2A8B4", marginTop: "0.5rem" }}>
        Powered by Silicon. Built for structure.
      </p>



      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "24px",
          marginTop: "3rem",
        }}
      >
          {blocks.map((block) => {
            const isExpanded = expandedId === block.id;
            return (
              <div
                key={block.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #A2A8B4",
                  borderRadius: "12px",
                  padding: "24px",
                  textAlign: "center",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.04)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  cursor: "pointer",
                }}
                onClick={() => toggleBlock(block.id)}
                onMouseOver={(e) => {
                  (e.currentTarget.style.transform = "scale(1.02)");
                  (e.currentTarget.style.boxShadow =
                    "0 6px 16px rgba(0, 0, 0, 0.1)");
                }}
                onMouseOut={(e) => {
                  (e.currentTarget.style.transform = "scale(1)");
                  (e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0, 0, 0, 0.04)");
                }}
              >
                <div style={{ fontSize: "2.5rem" }}>{block.emoji}</div>
                <h3 style={{ margin: "1rem 0 0.5rem", fontWeight: "700" }}>
                  {block.title}
                </h3>
                <small style={{ color: "#A2A8B4" }}>{block.category}</small>
                {isExpanded && (
                  <p style={{ marginTop: "1rem", color: "#333", fontSize: "0.95rem" }}>
                    {block.description}
                  </p>
                )}
              </div>
            );
          })}
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button
          style={{
            backgroundColor: "#FF6A00",
            color: "#FFFFFF",
            padding: "12px 24px",
            fontSize: "16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={() => alert("This could create a new block!")}
        >
          + Add New Block
        </button>
      </div>
    </main>
  );
}
