import Image from 'next/image';
import { getPreBoxAnimationClass, useBoxAnimation } from '@/hooks/useAnimation';

export default function About({ data, timeline, index }) {
  const boxRef = useBoxAnimation(timeline, index);

  const preAnimationClass = getPreBoxAnimationClass(
    '-translate-y-full scale-0 opacity-0'
  );

  return (
    <div
      ref={boxRef}
      className={`${preAnimationClass} box flex flex-col justify-between gap-4`}
    >
      {/* Icon */}
      {data?.icon && (
        <Image
          src={data.icon}
          width={48}
          height={48}
          alt='disk'
          className='size-[2.75rem] 2xl:size-[2.5vw]'
        />
      )}

      <p className='max-w-[32ch] pb-2 text-lg leading-[135%] max-lg:max-w-[40ch] max-lg:text-base 2xl:max-w-[44ch] 2xl:text-[0.9vw]'>
        {data?.text}
      </p>
    </div>
  );
}
