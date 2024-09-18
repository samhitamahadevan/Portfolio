import Image from 'next/image';
import { useBoxAnimation, useWorkAnimation } from '@/hooks/useAnimation';

export default function Work({ timeline, index }) {
  const projects = [
    {
      title: 'First Dance',
      link: '',
      media: '',
    },
    {
      title: 'Cocktail Hour',
      link: '',
      media: '',
    },
    {
      title: 'Dinner Music',
      link: '',
      media: '',
    },
    {
      title: 'After Party',
      link: '',
      media: '',
    },
    {
      title: 'Last Dance',
      link: '',
      media: '',
    },
    {
      title: 'Yet Another Dance',
      link: '',
      media: '',
    },
  ];

  const elRef = useBoxAnimation(timeline, index);

  const preAnimationClass = '-translate-x-full scale-0 opacity-0';

  const { containerRef, handleClick } = useWorkAnimation();

  return (
    <div
      ref={elRef}
      className={`${preAnimationClass} box relative z-10 overflow-hidden py-0`}
    >
      <div
        className='hide-scrollbar flex h-full flex-col overflow-y-auto max-lg:overflow-y-visible'
        ref={containerRef}
      >
        {projects.map((project, index) => (
          <ProjectItem
            key={project.title}
            project={project}
            index={index}
            isLast={index === projects.length - 1}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div className='pointer-events-none absolute bottom-0 left-0 z-10 h-8 w-full bg-gradient-to-b from-white/0 to-white/50'></div>
    </div>
  );
}

const ProjectItem = ({ project, index, isLast, handleClick }) => {
  return (
    <button
      key={project.title}
      onClick={event => handleClick(event)}
      // onMouseEnter={event => handleClick(event)}
      className={`${index === 0 ? 'pointer-events-none' : 'pointer-events-auto'} button relative py-8`}
    >
      <div className='flex w-full items-baseline justify-between'>
        <h3 className='font-heading text-2xl leading-[100%] 2xl:text-[1.5vw]'>
          {project.title}
        </h3>
        {/* Arrow */}
        <a
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
          className={`${index === 0 ? 'opacity-1' : 'opacity-0'} arrow pointer-events-auto mx-1 inline-block`}
        >
          <Image
            src='/icons/arrow-icon-black.svg'
            width={16}
            height={16}
            alt='arrow'
            className='size-[0.875rem] 2xl:size-[0.9vw]'
          />
        </a>
      </div>

      {/* Thumbnail */}
      <div
        className={`${index === 0 ? 'mt-5 h-auto 2xl:mt-[1.6vh]' : 'h-0'} thumbnail relative aspect-[3/2] w-full origin-top overflow-hidden rounded-[20px] bg-secondary`}
      >
        <Image
          src='/work.png'
          alt='bride and groom'
          fill={true}
          className='object-cover'
        />
      </div>

      {/* Border */}
      {!isLast && (
        <div className='absolute bottom-0 left-0 h-[1px] w-full origin-left bg-secondary' />
      )}
    </button>
  );
};
