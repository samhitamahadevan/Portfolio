import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Flip } from 'gsap/Flip';

export const useAppearAnimation = (
  timeline,
  index,
  delay = 0.15,
  animationConfig = {}
) => {
  const elRef = useRef();

  useGSAP(() => {
    if (timeline) {
      timeline.to(
        elRef.current,
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          ...animationConfig, // Override defaults with custom animation props if passed
        },
        index * delay
      );
    }
  }, [timeline, index]);

  return elRef;
};

export const usePortraitAnimation = (timeline, index, animationConfig = {}) => {
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
          ...animationConfig,
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
  return containerRef;
};
