import {
  disableAnimation,
  getPreBoxAnimationClass,
  usePortraitAnimation,
} from '@/hooks/useAnimation';
import Image from 'next/image';

export default function Portrait({ data, timeline, index = 0 }) {
  const containerRef = usePortraitAnimation(timeline, index);

  const preAnimationClass = getPreBoxAnimationClass('scale-100 opacity-0');

  return (
    <div ref={containerRef} className='size-full'>
      <div
        className={`${preAnimationClass} item box relative left-0 top-0 z-20 aspect-auto h-full w-full translate-x-0 translate-y-0 transform bg-secondary`}
        data-flip-id='item'
      >
        {data?.image && (
          <Image
            src={data.image}
            fill={true}
            alt='black woman'
            className='h-full w-full object-contain object-bottom'
            priority={true}
          />
        )}
      </div>

      {!disableAnimation && (
        <div
          className='loader box absolute-center z-30 aspect-[400/450] h-auto w-[30vw] bg-secondary max-md:w-[50vw]'
          data-flip-id='loader'
        >
          {data?.image && (
            <Image
              src={data.image}
              fill={true}
              alt='black woman'
              className='h-full w-full object-contain object-bottom'
              priority={true}
            />
          )}
        </div>
      )}
    </div>
  );
}
