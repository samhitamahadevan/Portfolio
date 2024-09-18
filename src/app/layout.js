import './globals.css';
import Global from '@/components/Global';

export const metadata = {
  title: 'Bentolio',
  description:
    'Bentolio is a clean and customizable portfolio template built on Bento Grids, perfect for showcasing your work.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='hide-scrollbar'>
      <body className={`antialiased`}>
        <Global />
        {children}
      </body>
    </html>
  );
}
