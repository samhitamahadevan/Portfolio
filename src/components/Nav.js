import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Nav({ timeline, index }) {
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
    <nav
      className='box col-span-12 row-span-1 opacity-0 scale-0 translate-y-full'
      ref={elRef}
    >
      <div className='content font-black'>Bentolio</div>
    </nav>
  );
}
