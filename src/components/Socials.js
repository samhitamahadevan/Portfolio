import { useBoxAnimation } from '@/hooks/useAnimation';

export default function Socials({ data, timeline, index }) {
  const elRef = useBoxAnimation(timeline, index);

  const preAnimationClass = '-translate-y-full scale-0 opacity-0';

  return (
    <div
      ref={elRef}
      className={`${preAnimationClass} box flex items-center justify-evenly gap-2`}
    >
      {data?.links?.map(link => (
        <a
          key={link.title}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-base font-medium uppercase max-md:text-sm 2xl:text-[0.85vw]'
        >
          {link.title}
        </a>
      ))}
    </div>
  );
}
