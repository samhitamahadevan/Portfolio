import Image from 'next/image';
import {
  getPreBoxAnimationClass,
  useArrowAnimation,
  useBoxAnimation,
} from '@/hooks/useAnimation';

export default function Contact({ data, timeline, index }) {
  const boxRef = useBoxAnimation(timeline, index);

  const preAnimationClass = getPreBoxAnimationClass(
    '-translate-y-full scale-0 opacity-0'
  );

  const { containerRef, handleMouseEnter, handleMouseLeave } =
    useArrowAnimation();

  return (
    <div
      ref={boxRef}
      className={`${preAnimationClass} box bg-secondary text-white`}
    >
      <a
        ref={containerRef}
        href={`mailto:${data?.email}`}
        target='_blank'
        rel='noopener noreferrer'
        className='flex h-full w-full flex-col justify-between gap-4'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='flex items-center justify-between'>
          <p className='max-w-[10ch] text-base leading-[120%] 2xl:text-[0.85vw]'>
            {data?.label}
          </p>

          {data?.linkIcon && (
            <Image
              src={data.linkIcon}
              width={24}
              height={24}
              alt='arrow'
              className='arrow mr-2 size-[1.35rem] 2xl:size-[1.25vw]'
            />
          )}
        </div>

        <h2
          className='pb-2 font-heading text-[3vw] font-medium leading-[100%] max-lg:text-[4vw] max-md:text-[9vw]'
          dangerouslySetInnerHTML={{ __html: data?.heading }}
        ></h2>
      </a>
    </div>
  );
}
