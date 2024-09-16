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
  ];

  const elRef = useAppearAnimation(timeline, index);

  const preAnimationClass = '-translate-x-full scale-0 opacity-0';

  return (
    <div ref={elRef} className={`${preAnimationClass} box z-10 py-8`}>
      <div className='hide-scrollbar flex h-full flex-col overflow-y-auto max-lg:max-h-[75vh] max-md:max-h-[60vh]'>
        {projects.map((project, index) => (
          <div key={project.title} onClick={() => setActive(index)}>
            <div className='flex items-baseline justify-between'>
              <h3 className='font-heading text-2xl leading-[100%] 2xl:text-[1.5vw]'>
                {project.title}
              </h3>
              {index === active && (
                <Image
                  src='/icons/arrow-icon-black.svg'
                  width={16}
                  height={16}
                  alt='arrow'
                  className='mx-1 size-[0.875rem] 2xl:size-[0.9vw]'
                />
              )}
            </div>

            {index === active && (
              <div className='relative mt-4 aspect-[3/2] w-full overflow-hidden rounded-[20px] bg-secondary 2xl:mt-[1.6vh]'>
                <Image
                  src='/work.png'
                  alt='bride and groom'
                  className=''
                  fill={true}
                />
              </div>
            )}

            {index !== projects.length - 1 && (
              <div className='my-[1.35rem] h-[1px] w-full origin-left bg-secondary 2xl:my-[2.4vh]' />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
