import { useState } from 'react';

function ProfileCard({ name, bio, emoji }: { name: string; bio: string; emoji: string }) {
  const handleClick = () => {
    alert(`You clicked on ${name}'s profile!`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        border: '1px solid #ccc',
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '300px',
        margin: '40px auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        cursor: 'pointer',
        textAlign: 'center',
      }}
    >
      <h2>Name: {name}</h2>
      <p>Bio: {bio}</p>
      <p>My favorite emoji: {emoji}</p>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <main>
      <h1 style={{ textAlign: 'center' }}>My Profile</h1>
      <ProfileCard
        name="Jonas Petersen"
        bio="Let's build something awesome with no time and no knowledge of the tech stack.."
        emoji="🤖"
      />
    </main>
  );
}
