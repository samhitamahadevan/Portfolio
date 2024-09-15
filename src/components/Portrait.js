import { useGSAP } from '@gsap/react';
import { Flip } from 'gsap/Flip';
import Image from 'next/image';
import { useRef } from 'react';

export default function Portrait({ timeline, index = 0 }) {
  const containerRef = useRef();

  useGSAP(
    () => {
      if (!timeline) return;

      const state = Flip.getState('.loader');

      Flip.fit('.loader', '.item');

      timeline.add(
        Flip.from(state, {
          duration: 0.4,
          ease: 'power1.out',
        })
          .set('.item', { opacity: 1 })
          .set('.loader', { visibility: 'hidden' }),
        0
      );
    },
    {
      dependencies: [timeline, index],
      scope: containerRef,
    }
  );

  return (
    <div ref={containerRef} className='size-full'>
      <div
        className='item resting-state box bg-secondary opacity-0'
        data-flip-id='item'
      >
        <Image
          src='/portrait.png'
          fill={true}
          alt='Picture of the author'
          className='block object-contain object-bottom'
        />
      </div>

      <div
        className='loader loader-state box bg-secondary'
        data-flip-id='loader'
      >
        <Image
          src='/portrait.png'
          fill={true}
          alt='Picture of the author'
          className='block object-contain object-bottom'
        />
      </div>
    </div>
  );
}
