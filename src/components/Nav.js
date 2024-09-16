import { useAppearAnimation } from '@/hooks/useAnimation';

export default function Nav({ timeline, index }) {
  const elRef = useAppearAnimation(timeline, index);

  const preAnimationClass = 'translate-y-full scale-0 opacity-0';

  return (
    <nav
      className={`${preAnimationClass} box flex items-center justify-center`}
      ref={elRef}
    >
      <div className='content font-heading text-2xl 2xl:text-[1.5vw]'>
        Bentolio
      </div>
    </nav>
  );
}
