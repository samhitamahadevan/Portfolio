import Image from 'next/image';
import { useAppearAnimation } from '@/hooks/useAnimation';
import { useState } from 'react';

export default function Work({ timeline, index }) {
  const [active, setActive] = useState(0);

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

  const elRef = useAppearAnimation(timeline, index);

  const preAnimationClass = '-translate-x-full scale-0 opacity-0';

  return (
    <div
      ref={elRef}
      className={`${preAnimationClass} box z-10 py-8 max-lg:px-0`}
    >
      <div className='hide-scrollbar flex h-full flex-col overflow-y-auto max-lg:flex-row max-lg:gap-10 max-lg:overflow-x-auto max-lg:px-6 max-md:gap-6'>
        {projects.map((project, index) => (
          <div
            key={project.title}
            onClick={() => setActive(index)}
            className='max-lg:flex-[0_0_90%]'
          >
            <div className='flex items-baseline justify-between max-lg:justify-start max-lg:gap-4'>
              <h3 className='font-heading text-2xl leading-[100%] max-md:text-xl 2xl:text-[1.5vw]'>
                {project.title}
              </h3>
              {/* Arrow */}
              <Image
                src='/icons/arrow-icon-black.svg'
                width={16}
                height={16}
                alt='arrow'
                className={`${index === active ? 'lg:block' : 'lg:hidden'} mx-1 size-[0.875rem] max-md:size-[0.7rem] 2xl:size-[0.9vw]`}
              />
            </div>

            {/* Thumbnail */}
            <div
              className={`${index === active ? 'lg:block' : 'lg:hidden'} relative mt-5 aspect-[3/2] w-full overflow-hidden rounded-[20px] bg-secondary 2xl:mt-[1.6vh]`}
            >
              <Image
                src='/work.png'
                alt='bride and groom'
                fill={true}
                className='object-cover'
              />
            </div>

            {/* Border */}
            <div
              className={`${index !== projects.length - 1 ? 'lg:block' : 'lg:hidden'} my-[1.75rem] h-[1px] w-full origin-left bg-secondary max-lg:hidden 2xl:my-[2.4vh]`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
