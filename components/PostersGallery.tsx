'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import useScreenSize from '@/Hooks/useScreenSize';
import { useState } from 'react';
import { CustomSwiperSlide, CustomSwiperNavigation } from '.';

// Import Swiper styles
import 'swiper/css';

type Props = {
  photos: string[];
};

export const PosterGallery = ({ photos }: Props) => {
  const screenSize = useScreenSize();
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const slidesPerView = () => {
    const count = Math.floor(screenSize.width / 320);
    if (isFullscreen) {
      return 1;
    } else {
      return count > 5 ? 5 : count < 1 ? 1 : count;
    }
  };

  const swiperWrapperClass = isFullscreen
    ? `transition-height fixed top-0 left-0 z-30 w-max-[${screenSize.width}] h-max-[${screenSize.height}] h-full w-full bg-black bg-opacity-80`
    : 'w-full';

  return (
    <div className={swiperWrapperClass}>
      <Swiper spaceBetween={32} slidesPerView={slidesPerView()} className="relative">
        {isFullscreen && (
          <div
            className="fixed right-4 top-4 text-5xl text-zinc-50 z-40 cursor-pointer"
            onClick={() => setIsFullscreen(false)}>
            X
          </div>
        )}
        {photos.map((url, i) => (
          <SwiperSlide key={url}>
            <CustomSwiperSlide
              url={url}
              isFullscreen={isFullscreen}
              handler={() => {
                setIsFullscreen(() => true);
              }}
            />
          </SwiperSlide>
        ))}
        <CustomSwiperNavigation direction={'prev'} />
        <CustomSwiperNavigation direction={'next'} />
      </Swiper>
    </div>
  );
};

export default PosterGallery;
