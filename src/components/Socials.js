import { useAppearAnimation } from '@/hooks/useAppearAnimation';

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
      className='box flex -translate-y-full scale-0 items-center justify-evenly opacity-0'
    >
      {links.map(link => (
        <a
          key={link.title}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
          className='font-medium uppercase'
        >
          {link.title}
        </a>
      ))}
    </div>
  );
}
