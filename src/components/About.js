import Image from 'next/image';
import { useAppearAnimation } from '@/hooks/useAnimation';

export default function About({ timeline, index }) {
  const text = `
    DJ Lisa is a passionate wedding DJ, acclaimed for blending diverse
    musical genres with expert crowd-reading skills. Based in Florida, she
    crafts personalized soundtracks that turn every wedding into an
    unforgettable celebration.
  `;

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
        className='size-[2.75rem] 2xl:size-[2.5vw]'
      />

      <p className='max-w-[32ch] pb-2 text-lg leading-[135%] max-lg:max-w-[40ch] max-lg:text-base 2xl:text-[0.9vw]'>
        {text}
      </p>
    </div>
  );
}
