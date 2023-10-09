'use client';
import useScreenSize from '@/Hooks/useScreenSize';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';

type Props = {
  url: string;
  isFullscreen: boolean;
  handler: () => any;
};

const CustomSwiperSlide = ({ url, isFullscreen, handler }: Props) => {
  const screenSize = useScreenSize();
  const swiperHook = useSwiper();

  useEffect(() => {
    swiperHook.slideTo(swiperHook.clickedIndex, 0);
  }, [swiperHook, swiperHook.clickedIndex]);

  const slideClass = isFullscreen
    ? `h-screen w-full object-contain m-auto p-4`
    : 'h-[400px] w-80 object-cover m-auto cursor-pointer';

  return (
    <Image
      src={url}
      alt=""
      width={isFullscreen ? screenSize.width : 600}
      height={isFullscreen ? screenSize.height : 400}
      className={slideClass}
      onClick={() => {
        handler();
      }}
    />
  );
};

export default CustomSwiperSlide;
