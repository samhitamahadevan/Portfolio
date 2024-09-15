import { useAppearAnimation } from '@/hooks/useAppearAnimation';

export default function Work({ timeline, index }) {
  const elRef = useAppearAnimation(timeline, index);

  return (
    <div ref={elRef} className='box z-10 -translate-x-full scale-0 opacity-0'>
      <div className='content'>Work</div>
    </div>
  );
}
