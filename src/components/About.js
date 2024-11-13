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
          As a Master’s candidate in Computer Science at Purdue University, graduating in May 2025, I am currently a Graduate Research Assistant focused on applying LLMs in Digital Forensics. My technical journey, rooted at Anna University, includes roles at{' '}
        <a href="https://www.striim.com" target="_blank" rel="noopener noreferrer" className="underline">
          Striim Inc.
        </a>,{' '}
        <a href="https://www.deepcognition.ai" target="_blank" rel="noopener noreferrer" className="underline">
          Deep Cognition Inc.
        </a>, and{' '}
        <a href="https://cardeahealth.io" target="_blank" rel="noopener noreferrer" className="underline">
          Cardea Health
        </a>, providing diverse experience across technology domains. I excel at transforming concepts into reality, delivering impactful AI and ML solutions. Outside of work, I enjoy swimming and playing trivia, balancing my professional aspirations with a sense of curiosity. I’m always excited to collaborate on cutting-edge Machine Learning and AI projects.
        </p>
      </div>
    </Box>
  );
}
