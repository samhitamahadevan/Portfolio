import Image from 'next/image';
import { useArrowAnimation, useDropdownAnimation } from '@/hooks/useAnimation';
import Box from './Box';
import { BLUR_DATA_URL } from '@/config';

export default function Work({ data, timeline }) {
  const { containerRef, handleClick } = useDropdownAnimation();

  const contentAnimation = delay => {
    const offset = 0.3;
    timeline
      .from('.work-heading', { yPercent: 100, stagger: 0.18 }, delay + offset)
      .from(
        '.work-border',
        { scaleX: 0, stagger: 0.18, ease: 'slow.out' },
        delay + offset
      )
      .from('.thumbnail', { opacity: 0 }, delay + offset);
  };

  return (
    <Box
      timeline={timeline}
      className='-translate-x-full scale-0 py-0 opacity-0'
      callbackAnimation={contentAnimation}
    >
      <div className='relative z-10 size-full overflow-hidden'>
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
        <div className='pointer-events-none absolute bottom-0 left-0 z-10 h-8 w-full bg-gradient-to-b from-primary/0 to-primary/50'></div>
      </div>
    </Box>
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
      className={`${index === 0 ? 'pointer-events-none' : 'pointer-events-auto'} button relative pb-[calc(1.8rem-2px)] pt-[1.8rem]`}
    >
      <div
        className='flex w-full items-baseline justify-between'
        ref={containerRef}
      >
        {/* Title */}
        <h3 className='overflow-hidden font-heading text-2xl font-semibold leading-[100%]'>
          <span className='work-heading block pb-[2px]'>{project?.title}</span>
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
              className='arrow size-[0.9rem]'
            />
          )}
        </a>
      </div>

      {/* Thumbnail and Content */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${index === 0 ? 'mt-4 h-auto' : 'h-0'} thumbnail pointer-events-auto relative block w-full origin-top overflow-hidden`}
      >
        <div className="p-4">
          {/* Experience */}
          {Array.isArray(project.experience) && (
            <div className="mb-4">
              <ul className="text-gray-700 text-left about-text space-y-2">
                {project.experience.map((item, idx) => (
                  <li key={idx} className="text-left">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Education */}
          {Array.isArray(project.education) && (
            <div className="mb-4">
              <ul className="text-gray-700 text-left about-text space-y-2">
                {project.education.map((item, idx) => (
                  <li key={idx} className="text-left">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {item.institution}
                      </a>
                    ) : (
                      item.institution
                    )}
                    {" "} - {item.degree}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Projects */}
          {Array.isArray(project.academic) && (
            <div className="mb-4">
              <ul className="text-gray-700 text-left about-text space-y-4">
                {project.academic.map((item, idx) => (
                  <li key={idx} className="text-left">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline block text-base leading-relaxed break-words"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <span className="block text-base leading-relaxed break-words">{item.title}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills */}
          {Array.isArray(project.skills) && (
            <div className="mb-4">
              {project.skills.map((skillCategory, idx) => (
                <div key={idx} className="mb-2">
                  {/* Skill Category and Items */}
                  <p className="text-gray-700 text-left">
                    <span className="font-semibold">{skillCategory.category}:</span> {skillCategory.items.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Awards and Publications */}
          {Array.isArray(project.awards_and_publications) && (
            <div className="mb-4">
              <ul className="text-gray-700 text-left about-text space-y-2">
                {project.awards_and_publications.map((item, idx) => (
                  <li key={idx} className="text-lg">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <span>{item.title}</span>
                    )}
                    {item.institution && ` - ${item.institution}`}
                    {item.publication && `, ${item.publication}`}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Border */}
      {!isLast && (
        <div className='work-border absolute bottom-0 left-0 h-[1px] w-full origin-left bg-secondary' />
      )}
    </button>
  );
};