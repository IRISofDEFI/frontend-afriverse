
import React from 'react';

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-black">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #000;
          color: white;
          overflow-x: hidden;
        }

        .font-heading {
          font-family: 'Syne', sans-serif;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #00ff88, #00ffff);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #00ff88, #00ffff);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom gradient text selection */
        ::selection {
          background: rgba(0, 255, 136, 0.2);
          color: #00ff88;
        }

        /* Particle glow effects */
        .particle-glow {
          filter: blur(1px);
          mix-blend-mode: screen;
        }

        /* Custom button hover effects */
        .btn-glow:hover {
          box-shadow: 
            0 0 20px rgba(0, 255, 136, 0.5),
            0 0 40px rgba(0, 255, 136, 0.3),
            0 0 60px rgba(0, 255, 136, 0.1);
        }
      `}</style>
      {children}
    </div>
  );
}
