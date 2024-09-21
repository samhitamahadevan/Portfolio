import Box from './Box';

export default function Nav({ data, timeline }) {
  const contentAnimation = delay => {
    timeline.from('.logo', { yPercent: 100 }, delay + 0.3);
  };

  return (
    <Box
      timeline={timeline}
      className='translate-y-full scale-0 opacity-0'
      callbackAnimation={contentAnimation}
    >
      <nav className={'flex size-full items-center justify-center'}>
        <div className='overflow-hidden font-heading text-2xl font-medium 2xl:text-[1.5vw]'>
          <span className='logo block'>{data?.logo}</span>
        </div>
      </nav>
    </Box>
  );
}
