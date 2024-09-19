'use client';

import { useState } from 'react';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Intro from '@/components/Intro';
import Nav from '@/components/Nav';
import Portrait from '@/components/Portrait';
import Socials from '@/components/Socials';
import Work from '@/components/Work';
import { disableAnimation, useGlobalTimeline } from '@/hooks/useAnimation';
import LoadingBar from '@/components/LoadingBar';

export default function MainGrid({ data = {} }) {
  const [loaded, setLoaded] = useState(disableAnimation);
  const tl = useGlobalTimeline(loaded);

  return (
    <>
      {!disableAnimation && <LoadingBar onFinish={() => setLoaded(true)} />}

      {/* Bento Grid */}
      <div className='grid h-screen min-h-[800px] grid-cols-12 grid-rows-10 gap-4 p-4 max-lg:h-auto max-lg:grid-rows-none'>
        <div className='col-span-12 row-span-1'>
          <Nav data={data?.nav} timeline={tl} index={1} />
        </div>

        {/* Left column */}
        <div className='col-span-8 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-12'>
          <div className='col-span-5 row-span-5 max-lg:col-span-8 max-md:col-span-12'>
            <Intro data={data?.intro} timeline={tl} index={1} />
          </div>

          <div className='col-span-3 row-span-5 max-lg:col-span-4 max-md:col-span-12'>
            <Portrait data={data?.portrait} timeline={tl} index={0} />
          </div>

          <div className='col-span-4 row-span-4 max-lg:col-span-6 max-md:col-span-12'>
            <About data={data?.about} timeline={tl} index={1} />
          </div>

          <div className='col-span-4 row-span-4 max-lg:col-span-6 max-md:col-span-12'>
            <Contact data={data?.contact} timeline={tl} index={1} />
          </div>
        </div>

        {/* Right column */}
        <div className='col-span-4 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full'>
          <div className='col-span-4 row-span-8 max-lg:col-span-full'>
            <Work data={data?.work} timeline={tl} index={1} />
          </div>

          <div className='col-span-4 row-span-1 max-lg:col-span-full'>
            <Socials data={data?.socials} timeline={tl} index={1} />
          </div>
        </div>
      </div>
    </>
  );
}
