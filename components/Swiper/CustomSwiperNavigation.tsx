'use client';
import { useSwiper } from 'swiper/react';

type Props = {
  direction: 'prev' | 'next';
};

const CustomSwiperNavigation = ({ direction }: Props) => {
  const swiperHook = useSwiper();
  const handler = () => {
    if (direction === 'next') swiperHook.slideNext();
    if (direction === 'prev') swiperHook.slidePrev();
  };
  return (
    <div
      onClick={handler}
      className={`text-6xl text-bold text-neutral-50 absolute ${
        direction === 'next' ? 'right-4' : 'left-4'
      } top-1/2 z-40 -translate-y-1/2 cursor-pointer select-none text-shadow`}>
      {direction === 'next' ? '\u02C3' : direction === 'prev' ? '\u02C2' : ''}
    </div>
  );
};

export default CustomSwiperNavigation;
