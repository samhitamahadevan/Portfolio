import localFont from 'next/font/local';
import Global from '@/components/Global';
import './globals.css';

export const metadata = {
  title: 'Samhita Mahadevan',
  description:
    'Samhita Mahadevan Portfolio',
};

const fontHeading = localFont({
  src: [
    {
      path: '../../public/fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-heading',
});

const fontBody = localFont({
  src: [
    {
      path: '../../public/fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-body',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='hide-scrollbar'>
      <body
        className={`${fontHeading.variable} ${fontBody.variable} antialiased`}
      >
        <Global />
        {children}
      </body>
    </html>
  );
}
