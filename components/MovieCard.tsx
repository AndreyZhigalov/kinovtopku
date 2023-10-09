import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import posterPlaceholder from '@/public/assets/images/film-poster-placeholder.png';

type Props = {
  movie: MovieType;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <article className="lg:w-[600px] lg:h-[300px] w-[300px] h-[500px] bg-white flex max-lg:flex-col">
      <Link href={`${movie.media_type}/${movie.id}`} className="block lg:w-1/3 w-full">
        <Image
          className="lg:h-[300px] h-[200px] object-cover w-full"
          src={movie.poster_path ?? posterPlaceholder}
          alt=""
          height={500}
          width={500}
        />
      </Link>
      <div className="p-3 flex flex-col justify-start items-start gap-3 lg:w-2/3 w-full">
        <Link href={`${movie.media_type}/${movie.id}`}>
          <h3 className="text-[32px] font-bold line-clamp-2">{movie.title}</h3>
        </Link>
        <p className="text-2xl line-clamp-6">{movie.overview}</p>
      </div>
    </article>
  );
};

export default MovieCard;
