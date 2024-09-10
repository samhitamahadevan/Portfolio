import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Socials({ timeline, index }) {
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
      className='box col-span-4 row-span-1 max-lg:col-span-12 opacity-0 scale-0 -translate-y-full'
    >
      <div className='content'>Socials</div>
    </div>
  );
}
