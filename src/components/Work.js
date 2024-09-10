import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Work({ timeline, index }) {
  const elRef = useRef();

  useGSAP(() => {
    timeline &&
      timeline.to(
        elRef.current,
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
        },
        index * 0.15
      );
  }, [timeline, index]);

  return (
    <div
      ref={elRef}
      className='box col-span-4 row-span-6 max-lg:col-span-12 z-10 opacity-0 scale-0 -translate-x-full'
    >
      <div className='content'>Work</div>
    </div>
  );
}
