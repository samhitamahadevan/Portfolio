'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState, useRef } from 'react';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Intro from '@/components/Intro';
import Nav from '@/components/Nav';
import Portrait from '@/components/Portrait';
import Socials from '@/components/Socials';
import Work from '@/components/Work';

export default function Home() {
  const loadingBarRef = useRef();
  const loadingTl = useRef();

  const [loaded, setLoaded] = useState(false);
  const [tl, setTl] = useState();

  useGSAP(() => {
    loadingTl.current = gsap
      .timeline()
      .to(loadingBarRef.current, {
        scaleX: 1,
        ease: 'slow.out',
        // duration: 1.5,
        duration: 0,
        onComplete: () => setLoaded(true),
      })
      .to(loadingBarRef.current, { autoAlpha: 0 });
  });

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

  return (
    <main className='w-full'>
      <div
        ref={loadingBarRef}
        className='fixed left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-primary'
      />

      {/* Bento Grid */}
      <div className='grid min-h-screen grid-cols-12 grid-rows-8 gap-6 p-6 max-lg:grid-rows-15 max-md:grid-rows-22'>
        <div className='col-span-12 row-span-1'>
          <Nav timeline={tl} index={1} />
        </div>

        {/* Left column */}
        <div className='col-span-8 row-span-7 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-12 max-md:row-span-14'>
          <div className='col-span-5 row-span-4 max-lg:col-span-8 max-md:col-span-12'>
            <Intro timeline={tl} index={1} />
          </div>

          <div className='col-span-3 row-span-4 max-lg:col-span-4 max-md:col-span-12'>
            <Portrait timeline={tl} index={0} />
          </div>

          <div className='col-span-4 row-span-3 max-lg:col-span-6 max-md:col-span-12'>
            <About timeline={tl} index={1} />
          </div>

          <div className='col-span-4 row-span-3 max-lg:col-span-6 max-md:col-span-12'>
            <Contact timeline={tl} index={1} />
          </div>
        </div>

        {/* Right column */}
        <div className='col-span-4 row-span-7 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-12'>
          <div className='col-span-4 row-span-6 max-lg:col-span-12'>
            <Work timeline={tl} index={1} />
          </div>

          <div className='col-span-4 row-span-1 max-lg:col-span-12'>
            <Socials timeline={tl} index={1} />
          </div>
        </div>
      </div>
    </main>
  );
}
