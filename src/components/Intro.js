import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Intro({ timeline, index }) {
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
      className='box col-span-5 row-span-4 max-lg:col-span-8 max-md:col-span-12 z-10 opacity-0 scale-0 translate-x-full'
    >
      <div className='content'>Intro</div>
    </div>
  );
}
