import { getPreBoxAnimationClass, useBoxAnimation } from '@/hooks/useAnimation';

export default function Socials({ data, timeline, index }) {
  const boxRef = useBoxAnimation(timeline, index);

  const preAnimationClass = getPreBoxAnimationClass(
    '-translate-y-full scale-0 opacity-0'
  );

  return (
    <div
      ref={boxRef}
      className={`${preAnimationClass} box flex items-center justify-evenly gap-2`}
    >
      {data?.links?.map(link => (
        <a
          key={link.title}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
          className='flex text-base font-medium uppercase leading-[100%] max-md:text-sm 2xl:text-[0.85vw]'
        >
          {link.title}
        </a>
      ))}
    </div>
  );
}
