import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import cover from '@/public/assets/images/logo/logo-full.svg';
import favicon from '@/public/favicon.ico';
import appleTouch from '@/public/apple-touch-icon.png';
import androidChrome from '@/public/android-chrome-512x512.png';
import { Header, Footer } from '@/components';

const inter = Inter({ subsets: ['cyrillic', 'latin'] });

export const metadata: Metadata = {
  title: 'Кино в топку - самые плохие фильмы в истории',
  description: 'Рейтинг фильмов от самых худших, до средних, но всё же плохих фильмов.',
  keywords:
    'кино в топку, самые плохие фильмы, топ самых плохих фильмов, рейтинг наихудших фильмов, рейтинг фильмов, топ фильмов, kinovtopku',
  openGraph: {
    title: 'КИНО В ТОПКУ',
    description: 'Таких плохих фильмов вы нигде не видели. Но это поправимо.',
    url: 'https://киновтопку.ру',
    siteName: 'Киновтопку.ру',
    type: 'website',
    images: [cover.src],
  },
  icons: {
    shortcut: favicon.src,
    apple: appleTouch.src,
    icon: androidChrome.src,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru-Ru">
      <body className={inter.className + ' p-0 relative'}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
