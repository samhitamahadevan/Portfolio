import Image from 'next/image';
import {
  getPreBoxAnimationClass,
  useBoxAnimation,
  useWorkAnimation,
} from '@/hooks/useAnimation';

export default function Work({ data, timeline, index }) {
  const elRef = useBoxAnimation(timeline, index);

  const preAnimationClass = getPreBoxAnimationClass(
    '-translate-x-full scale-0 opacity-0'
  );

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
        {data?.projects?.map((project, index) => (
          <ProjectItem
            key={project?.title}
            project={project}
            index={index}
            isLast={index === data.projects.length - 1}
            handleClick={handleClick}
            linkIcon={data?.linkIcon}
          />
        ))}
      </div>
      <div className='pointer-events-none absolute bottom-0 left-0 z-10 h-8 w-full bg-gradient-to-b from-white/0 to-white/50'></div>
    </div>
  );
}

const ProjectItem = ({
  project = {},
  index,
  isLast,
  handleClick,
  linkIcon,
}) => {
  return (
    <button
      onClick={event => handleClick(event)}
      className={`${index === 0 ? 'pointer-events-none' : 'pointer-events-auto'} button relative py-8`}
    >
      <div className='flex w-full items-baseline justify-between'>
        {/* Title */}
        <h3 className='font-heading text-2xl leading-[100%] 2xl:text-[1.5vw]'>
          {project?.title}
        </h3>
        {/* Arrow Link */}
        <a
          href={project?.url}
          target='_blank'
          rel='noopener noreferrer'
          className={`${index === 0 ? 'opacity-1' : 'opacity-0'} arrow pointer-events-auto mx-1 inline-block`}
        >
          {linkIcon && (
            <Image
              src={linkIcon}
              width={16}
              height={16}
              alt='arrow'
              className='size-[0.875rem] 2xl:size-[0.9vw]'
            />
          )}
        </a>
      </div>

      {/* Thumbnail */}
      <div
        className={`${index === 0 ? 'mt-5 h-auto 2xl:mt-[1.6vh]' : 'h-0'} thumbnail relative aspect-[3/2] w-full origin-top overflow-hidden rounded-[20px] bg-secondary`}
      >
        {project?.media && (
          <Image
            src={project.media}
            alt='bride and groom'
            fill={true}
            className='object-cover'
            priority={index === 0 ? true : false}
          />
        )}
      </div>

      {/* Border */}
      {!isLast && (
        <div className='absolute bottom-0 left-0 h-[1px] w-full origin-left bg-secondary' />
      )}
    </button>
  );
};
