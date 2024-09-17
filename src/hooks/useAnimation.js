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

export const useWorkAnimation = () => {
  const containerRef = useRef();
  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleClick = contextSafe(event => {
    gsap.set('.button', { pointerEvents: 'auto' });
    gsap.to('.thumbnail', { height: 0, marginTop: 0 });
    gsap.to('.arrow', { autoAlpha: 0 });

    const currentButton = event.currentTarget;
    const currentThumbnail = currentButton.querySelector('.thumbnail');
    const currentArrow = currentButton.querySelector('.arrow');

    gsap.set(currentButton, { pointerEvents: 'none' });
    gsap.to(currentThumbnail, { height: 'auto', marginTop: '1.25rem' });
    gsap.to(currentArrow, { autoAlpha: 1 });
  });

  return { containerRef, handleClick };
};

export const useBoxAnimation = (
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
