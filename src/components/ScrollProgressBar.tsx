import React, { useState, useEffect } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop || document.body.scrollTop;
      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        const scrolled = (scrollPx / winHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, scrolled)));
      } else {
        setScrollProgress(0);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-slate-900/30 pointer-events-none"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.6)] transition-[width] duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
