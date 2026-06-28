import { useEffect, useRef } from 'react';

export function ScrollProgressBar() {
  const progressBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!progressBarRef.current) return;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = window.scrollY / totalHeight;
        // Apply GPU-accelerated transform scaleX
        progressBarRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
      } else {
        progressBarRef.current.style.transform = 'scaleX(0)';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialize
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] w-full bg-neutral-100/10 z-[100] pointer-events-none">
      <div
        ref={progressBarRef}
        className="h-full bg-gradient-to-r from-red-500 via-red-600 to-amber-500 shadow-[0_1px_8px_rgba(239,68,68,0.4)] origin-left will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
