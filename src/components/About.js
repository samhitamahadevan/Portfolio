import Image from 'next/image';
import { useAppearAnimation } from '@/hooks/useAppearAnimation';

export default function About({ timeline, index }) {
  const elRef = useAppearAnimation(timeline, index);

  return (
    <div
      ref={elRef}
      className='box flex -translate-y-full scale-0 flex-col justify-between gap-4 opacity-0'
    >
      <Image
        src='/icons/about-icon.svg'
        width={48}
        height={48}
        alt='disk'
        className='size-[2.75rem]'
      />

      <p className='max-w-[21rem] pb-2 text-lg leading-[135%] max-lg:max-w-[28rem] max-lg:text-base'>
        DJ Lisa is a passionate wedding DJ, acclaimed for blending diverse
        musical genres with expert crowd-reading skills. Based in Florida, she
        crafts personalized soundtracks that turn every wedding into an
        unforgettable celebration.
      </p>
    </div>
  );
}
