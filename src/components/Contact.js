import Image from 'next/image';
import { useBoxAnimation } from '@/hooks/useAnimation';

export default function Contact({ data, timeline, index }) {
  const elRef = useBoxAnimation(timeline, index);

  const preAnimationClass = '-translate-y-full scale-0 opacity-0';

  return (
    <div
      ref={elRef}
      className={`${preAnimationClass} box flex flex-col justify-between gap-4 bg-secondary text-white`}
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
            className='mx-2 size-[1.35rem] 2xl:size-[1.25vw]'
          />
        )}
      </div>

      <h2
        className='pb-2 font-heading text-[3vw] leading-[100%] max-lg:text-[4vw] max-md:text-[7.5vw]'
        dangerouslySetInnerHTML={{ __html: data?.heading }}
      ></h2>
    </div>
  );
}
