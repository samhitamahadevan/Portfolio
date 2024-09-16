import { usePortraitAnimation } from '@/hooks/useAnimation';
import Image from 'next/image';

export default function Portrait({ timeline, index = 0 }) {
  const containerRef = usePortraitAnimation(timeline, index);

  return (
    <div ref={containerRef} className='size-full'>
      <div
        className='item resting-state box bg-secondary opacity-0'
        data-flip-id='item'
      >
        <Image
          src='/portrait.png'
          fill={true}
          alt='black woman'
          className='h-full w-full object-contain object-bottom'
        />
      </div>

      <div
        className='loader loader-state box bg-secondary'
        data-flip-id='loader'
      >
        <Image
          src='/portrait.png'
          fill={true}
          alt='black woman'
          className='h-full w-full object-contain object-bottom'
          priority={true}
        />
      </div>
    </div>
  );
}
