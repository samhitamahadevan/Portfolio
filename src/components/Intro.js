import { useAppearAnimation } from '@/hooks/useAnimation';
import Image from 'next/image';

export default function Intro({ timeline, index }) {
  const heading = `Let’s create dance floor <span class='font-extralight italic'> magic</span> for your special day`;

  const elRef = useAppearAnimation(timeline, index);

  return (
    <div
      ref={elRef}
      className='box z-10 flex translate-x-full scale-0 flex-col justify-between gap-4 opacity-0'
    >
      <div className='relative ml-auto size-[6vw] max-lg:size-[9vw] max-md:size-[14vw]'>
        <Image src='/icons/intro-icon.svg' fill={true} alt='flower' />
      </div>

      <h1
        dangerouslySetInnerHTML={{ __html: heading }}
        className='max-w-[17ch] pb-8 font-heading text-[3.5vw] leading-[100%] max-lg:text-[4.5vw] max-md:text-[8vw]'
      ></h1>
    </div>
  );
}
