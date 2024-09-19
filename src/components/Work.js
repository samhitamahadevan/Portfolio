import Image from 'next/image';
import {
  getPreBoxAnimationClass,
  useArrowAnimation,
  useBoxAnimation,
  useWorkAnimation,
} from '@/hooks/useAnimation';

export default function Work({ data, timeline, index }) {
  const boxRef = useBoxAnimation(timeline, index);

  const preAnimationClass = getPreBoxAnimationClass(
    '-translate-x-full scale-0 opacity-0'
  );

  const { containerRef, handleClick } = useWorkAnimation();

  return (
    <div
      ref={boxRef}
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
  const { containerRef, handleMouseEnter, handleMouseLeave } =
    useArrowAnimation();

  return (
    <button
      onClick={event => handleClick(event)}
      className={`${index === 0 ? 'pointer-events-none' : 'pointer-events-auto'} button relative py-8 2xl:py-[1.5vw]`}
    >
      <div
        className='flex w-full items-baseline justify-between'
        ref={containerRef}
      >
        {/* Title */}
        <h3 className='font-heading text-2xl font-normal leading-[100%] 2xl:text-[1.5vw]'>
          {project?.title}
        </h3>
        {/* Arrow Link */}
        <a
          href={project?.url}
          target='_blank'
          rel='noopener noreferrer'
          className={'pointer-events-auto inline-block px-2'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {linkIcon && (
            <Image
              src={linkIcon}
              width={16}
              height={16}
              alt='arrow'
              className={`${index === 0 ? 'opacity-1' : 'opacity-0'} arrow size-[0.875rem] 2xl:size-[0.9vw]`}
            />
          )}
        </a>
      </div>

      {/* Thumbnail */}
      <a
        href={project?.url}
        target='_blank'
        rel='noopener noreferrer'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${index === 0 ? 'mt-5 h-auto' : 'h-0'} thumbnail pointer-events-auto relative block aspect-[3/2] w-full origin-top overflow-hidden rounded-[20px] bg-secondary`}
      >
        {project?.media && (
          <Image
            src={project.media}
            alt='bride and groom'
            fill={true}
            className='object-cover transition-transform duration-700 ease-out hover:scale-105'
            priority={index === 0 ? true : false}
          />
        )}
      </a>

      {/* Border */}
      {!isLast && (
        <div className='absolute bottom-0 left-0 h-[1px] w-full origin-left bg-secondary' />
      )}
    </button>
  );
};
