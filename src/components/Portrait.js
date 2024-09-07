import Image from 'next/image';

export default function Portrait() {
  return (
    <div className='bg-secondary relative overflow-hidden box col-span-3 row-span-4 max-lg:col-span-4 max-md:col-span-12'>
      {/* <div className='content'>Image</div> */}
      <Image
        src='/portrait.png'
        fill={true}
        alt='Picture of the author'
        className='block object-contain object-right-bottom'
      />
    </div>
  );
}
