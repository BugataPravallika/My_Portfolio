import React, { useEffect, useState } from 'react';

export const CursorGlow: React.FC = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMouseCoords = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMouseCoords);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMouseCoords);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[2] transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(139, 92, 246, 0.06), transparent 80%)`,
      }}
    />
  );
};
