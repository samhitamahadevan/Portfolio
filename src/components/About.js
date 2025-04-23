import Image from 'next/image';
import Box from './Box';
import React from 'react';


export default function About({ data, timeline }) {
  const contentAnimation = delay => {
    const offset = 0.3;
    timeline
      .from('.about-text', { opacity: 0, y: 30, duration: 0.8 }, delay + offset)
      .from(
        '.about-icon',
        { opacity: 0, rotate: 180, duration: 1, ease: 'slow.out' },
        delay + offset
      );
  };

  return (
    <Box
      timeline={timeline}
      className='-translate-y-full scale-0 opacity-0'
      callbackAnimation={contentAnimation}
    >
      <div className='flex size-full flex-col justify-between gap-2 max-w-[40rem] '>
        {/* Icon */}
        <div className='size-[2.75rem]'>
          {data?.icon && (
            <Image
              src={data.icon}
              width={48}
              height={48}
              alt='disk'
              className='about-icon size-full'
            />
          )}
        </div>

        <p className='about-text max-w-[28rem] pb-2 text-base leading-[135%]'>
          {/* {data?.text} */}
          cs master's candidate at purdue (2025) with experience as a graduate research assistant in applying foundational models to digital forensics. my technical journey, rooted at anna university, includes roles at {' '}
        <a href="https://www.striim.com" target="_blank" rel="noopener noreferrer" className="underline">
          striim Inc.
        </a>,{' '}
        <a href="https://www.deepcognition.ai" target="_blank" rel="noopener noreferrer" className="underline">
          deep cognition inc.
        </a>, and{' '}
        <a href="https://cardeahealth.io" target="_blank" rel="noopener noreferrer" className="underline">
          cardea health
        </a>,providing diverse experience across technology domains. i'm passionate about transforming concepts into reality, delivering impactful ai solutions that solve real problems. beyond tech, i find balance through swimming and trivia games. always eager to collaborate on innovative ml/ai projects that push boundaries and satisfy my natural curiosity.
        </p>
      </div>
    </Box>
  );
}
