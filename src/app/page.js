'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Intro from '@/components/Intro';
import Nav from '@/components/Nav';
import Portrait from '@/components/Portrait';
import Socials from '@/components/Socials';
import Work from '@/components/Work';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [tl, setTl] = useState();

  useGSAP(() => {
    if (!loaded) return;

    const tl = gsap.timeline();
    setTl(tl);
  }, [loaded]);

  return (
    <main className='w-full'>
      <button className='btn' onClick={() => setLoaded(true)}>
        Play Animation
      </button>

      <div className='min-h-screen p-6 grid grid-cols-12 grid-rows-8 gap-6 max-lg:grid-rows-15 max-md:grid-rows-22'>
        <Nav timeline={tl} index={1} />

        <div className='col-span-8 row-span-7 grid grid-rows-subgrid grid-cols-subgrid max-lg:col-span-12 max-md:row-span-14'>
          <Intro timeline={tl} index={1} />
          <Portrait timeline={tl} index={0} />
          <About timeline={tl} index={1} />
          <Contact timeline={tl} index={1} />
        </div>

        <div className='col-span-4 row-span-7 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-12'>
          <Work timeline={tl} index={1} />
          <Socials timeline={tl} index={1} />
        </div>
      </div>
    </main>
  );
}
