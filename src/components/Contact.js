import Image from 'next/image';
import { useAppearAnimation } from '@/hooks/useAppearAnimation';

export default function Contact({ timeline, index }) {
  const elRef = useAppearAnimation(timeline, index);

  return (
    <div
      ref={elRef}
      className='box flex -translate-y-full scale-0 flex-col justify-between gap-4 bg-secondary text-white opacity-0'
    >
      <div className='flex items-center justify-between'>
        <p className='max-w-[10ch] text-base leading-[120%]'>
          Have some questions?
        </p>

        <Image
          src='/icons/arrow-icon.svg'
          width={24}
          height={24}
          alt='disk'
          className='mx-2 size-[1.35rem]'
        />
      </div>

      <h2 className='pb-2 font-heading text-[3vw] leading-[100%] max-lg:text-[4vw] max-md:text-[7.5vw]'>
        Contact <span className='font-extralight italic'>me</span>
      </h2>
    </div>
  );
}
