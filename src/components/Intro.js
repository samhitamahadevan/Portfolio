import { useAppearAnimation } from '@/hooks/useAppearAnimation';
import Image from 'next/image';

export default function Intro({ timeline, index }) {
  const elRef = useAppearAnimation(timeline, index);

  return (
    <div
      ref={elRef}
      className='box z-10 flex translate-x-full scale-0 flex-col justify-between gap-4 opacity-0'
    >
      <div className='relative ml-auto size-[6vw] max-lg:size-[9vw] max-md:size-[14vw]'>
        <Image src='/icons/intro-icon.svg' fill={true} alt='flower' />
      </div>

      <h1 className='max-w-[17ch] pb-8 font-heading text-[3.5vw] leading-[100%] max-lg:text-[4.5vw] max-md:text-[8vw]'>
        Let’s create dance floor
        <span className='font-extralight italic'> magic</span> for your special
        day
      </h1>
    </div>
  );
}
