import React from 'react';

const LatticeBackground: React.FC = () => {
  return (
    <div className="lattice-container" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden',
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
    }}>
      {Array.from({ length: 25 }).map((_, index) => (
        <div
          key={index}
          className="hexagon"
          style={{
            position: 'absolute',
            width: `${30 + Math.random() * 70}px`,
            height: `${30 + Math.random() * 70}px`,
            background: 'rgba(255, 165, 0, 0.1)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationName: 'float',
            animationDuration: `${20 + Math.random() * 40}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationDelay: `${Math.random() * 10}s`,
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            boxShadow: '0 0 10px rgba(255, 165, 0, 0.3)',
          }}
        />
      ))}
      {Array.from({ length: 40 }).map((_, index) => (
        <div
          key={`dot-${index}`}
          className="dot"
          style={{
            position: 'absolute',
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            background: 'rgba(255, 165, 0, 0.5)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationName: 'pulse',
            animationDuration: `${10 + Math.random() * 20}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
            100% {
              transform: translateY(0) rotate(0deg);
            }
          }
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.3;
            }
            50% {
              transform: scale(1.5);
              opacity: 0.8;
            }
            100% {
              transform: scale(1);
              opacity: 0.3;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LatticeBackground;
