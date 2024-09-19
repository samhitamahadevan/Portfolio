import { getPreBoxAnimationClass, useBoxAnimation } from '@/hooks/useAnimation';

export default function Nav({ data, timeline, index }) {
  const boxRef = useBoxAnimation(timeline, index);

  const preAnimationClass = getPreBoxAnimationClass(
    'translate-y-full scale-0 opacity-0'
  );

  return (
    <nav
      className={`${preAnimationClass} box flex items-center justify-center`}
      ref={boxRef}
    >
      <div className='font-heading text-2xl font-medium 2xl:text-[1.5vw]'>
        {data?.logo}
      </div>
    </nav>
  );
}
