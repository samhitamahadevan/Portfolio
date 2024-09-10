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
    <div
      ref={containerRef}
      className='col-span-3 row-span-4 max-lg:col-span-4 max-md:col-span-12'
    >
      <div
        className='item bg-secondary overflow-hidden box resting-state opacity-0'
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
        className='loader bg-secondary overflow-hidden box loader-state'
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
