import { useAppearAnimation } from '@/hooks/useAnimation';

export default function Socials({ timeline, index }) {
  const links = [
    {
      title: 'Instagram',
      url: '',
    },
    {
      title: 'Linkedin',
      url: '',
    },
    {
      title: 'Pinterest',
      url: '',
    },
  ];

  const elRef = useAppearAnimation(timeline, index);

  return (
    <div
      ref={elRef}
      className='box flex -translate-y-full scale-0 items-center justify-evenly gap-2 opacity-0'
    >
      {links.map(link => (
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
