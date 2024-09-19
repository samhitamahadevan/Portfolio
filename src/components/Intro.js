import { getPreBoxAnimationClass, useBoxAnimation } from '@/hooks/useAnimation';
import Image from 'next/image';

export default function Intro({ data, timeline, index }) {
  const boxRef = useBoxAnimation(timeline, index);

  const preAnimationClass = getPreBoxAnimationClass(
    'translate-x-full scale-0 opacity-0'
  );

  return (
    <div
      ref={boxRef}
      className={`${preAnimationClass} box z-10 flex flex-col justify-between gap-4`}
    >
      {/* Icon */}
      {data?.icon && (
        <Image
          src={data.icon}
          width={100}
          height={100}
          alt='flower'
          className='ml-auto size-[6vw] max-lg:size-[9vw] max-md:size-[14vw]'
        />
      )}

      <h1
        className='max-w-[17ch] pb-8 font-heading text-[3.5vw] font-normal leading-[100%] max-lg:text-[4.5vw] max-md:text-[8vw]'
        dangerouslySetInnerHTML={{ __html: data?.heading }}
      ></h1>
    </div>
  );
}
