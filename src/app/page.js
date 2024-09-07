import About from '@/components/About';
import Contact from '@/components/Contact';
import Intro from '@/components/Intro';
import Nav from '@/components/Nav';
import Portrait from '@/components/Portrait';
import Socials from '@/components/Socials';
import Work from '@/components/Work';

export default function Home() {
  return (
    <main className='w-full'>
      <div className='min-h-screen p-6 grid grid-cols-12 grid-rows-8 gap-6 max-lg:grid-rows-15 max-md:grid-rows-22'>
        <Nav />

        <div className='col-span-8 row-span-7 grid grid-rows-subgrid grid-cols-subgrid max-lg:col-span-12 max-md:row-span-14'>
          <Intro />
          <Portrait />
          <About />
          <Contact />
        </div>

        <div className='col-span-4 row-span-7 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-12'>
          <Work />
          <Socials />
        </div>
      </div>
    </main>
  );
}
