import localFont from 'next/font/local';
import { Fraunces, DM_Sans, Cormorant_Garamond } from 'next/font/google';
import Global from '@/components/Global';
import './globals.css';

export const metadata = {
  title: 'Bentolio',
  description:
    'Bentolio is a clean and customizable portfolio template built on Bento Grids, perfect for showcasing your work.',
};

const pangaia = localFont({
  src: [
    {
      path: './fonts/PPPangaia-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/PPPangaia-UltralightItalic.woff2',
      weight: '200',
      style: 'italic',
    },
  ],
  variable: '--font-pangaia',
});

const gilroy = localFont({
  src: [
    {
      path: './fonts/Gilroy-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Gilroy-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy',
});

const fontHeading = Fraunces({
  weight: ['500', '300'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

// const fontHeading = Cormorant_Garamond({
//   weight: ['500', '300'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-heading',
// });

const fontBody = DM_Sans({
  weight: ['300', '500'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='hide-scrollbar'>
      <body
        className={`${pangaia.variable} ${gilroy.variable} ${fontHeading.variable} ${fontBody.variable} antialiased`}
      >
        <Global />
        {children}
      </body>
    </html>
  );
}
