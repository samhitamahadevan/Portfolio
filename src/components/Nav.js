import { useBoxAnimation } from '@/hooks/useAnimation';

export default function Nav({ data, timeline, index }) {
  const elRef = useBoxAnimation(timeline, index);

  const preAnimationClass = 'translate-y-full scale-0 opacity-0';

  return (
    <nav
      className={`${preAnimationClass} box flex items-center justify-center`}
      ref={elRef}
    >
      <div className='font-heading text-2xl 2xl:text-[1.5vw]'>{data?.logo}</div>
    </nav>
  );
}
