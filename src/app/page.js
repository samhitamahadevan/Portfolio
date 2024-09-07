export default function Home() {
  return (
    <main className='w-full'>
      <div className='min-h-screen p-6 grid grid-cols-12 grid-rows-8 gap-6 max-lg:grid-rows-15 max-md:grid-rows-22'>
        <nav className='box col-span-12 row-span-1'>
          <div className='content font-black'>Bentolio</div>
        </nav>

        <div className='col-span-8 row-span-7 grid grid-rows-subgrid grid-cols-subgrid max-lg:col-span-12 max-md:row-span-14'>
          <div className='box col-span-5 row-span-4 max-lg:col-span-8 max-md:col-span-12'>
            <div className='content'>Slogan</div>
          </div>
          <div className='box col-span-3 row-span-4 max-lg:col-span-4 max-md:col-span-12'>
            <div className='content'>Image</div>
          </div>

          <div className='box col-span-4 row-span-3 max-lg:col-span-6 max-md:col-span-12'>
            <div className='content'>About</div>
          </div>
          <div className='box bg-secondary text-white col-span-4 row-span-3 max-lg:col-span-6 max-md:col-span-12'>
            <div className='content'>Contact</div>
          </div>
        </div>

        <div className='col-span-4 row-span-7 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-12'>
          <div className='box col-span-4 row-span-6 max-lg:col-span-12'>
            <div className='content'>Work</div>
          </div>
          <div className='box col-span-4 row-span-1 max-lg:col-span-12'>
            <div className='content'>Socials</div>
          </div>
        </div>
      </div>
    </main>
  );
}
