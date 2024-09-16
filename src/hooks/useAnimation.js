import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { Flip } from 'gsap/Flip';

export const useGlobalTimeline = loaded => {
  const [tl, setTl] = useState();
  useGSAP(() => {
    gsap.set(document.body, { overflow: 'hidden' });
    window.scrollTo({ top: 0 });

    if (!loaded) return;

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => gsap.set(document.body, { overflow: 'auto' }),
    });
    setTl(tl);
  }, [loaded]);

  return tl;
};

export const useLoadingBarAnimation = (
  callback = () => {},
  animationConfig = {}
) => {
  const loadingBarRef = useRef();
  const loadingTl = useRef();

  useGSAP(() => {
    loadingTl.current = gsap
      .timeline()
      .to(loadingBarRef.current, {
        scaleX: 1,
        ease: 'slow.out',
        duration: 1,
        ...animationConfig,
        onComplete: () => callback(),
      })
      .to(loadingBarRef.current, { autoAlpha: 0 });
  });

  return loadingBarRef;
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
