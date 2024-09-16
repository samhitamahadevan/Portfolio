import { useAppearAnimation } from '@/hooks/useAnimation';

export default function Nav({ timeline, index }) {
  const elRef = useAppearAnimation(timeline, index);

  return (
    <nav
      className='box flex translate-y-full scale-0 items-center justify-center opacity-0'
      ref={elRef}
    >
      <div className='content font-heading text-2xl 2xl:text-[1.5vw]'>
        Bentolio
      </div>
    </nav>
  );
}
