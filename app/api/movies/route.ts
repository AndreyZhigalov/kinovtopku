import { NextResponse } from 'next/server';

import moviesList from '@/fakeDB/low_rated.json';

const movies: MovieType[] = moviesList;

export const GET = async (req: Request) => {
  const params = new URL(req.url).searchParams;
  let filteredMovies: MovieType[];

  let mediaType = params.get('type');
  if (params.get('type')) {
    filteredMovies = movies.filter((movie) => movie.media_type === mediaType);
  } else {
    filteredMovies = movies.filter((movie) => movie.media_type === 'movies');
  }

  const releaseDate = params.get('year');
  if (releaseDate) {
    filteredMovies = filteredMovies.filter(
      (movie) => new Date(movie.release_date).getFullYear() === +releaseDate,
    );
  }

  filteredMovies = filteredMovies.sort((a, b) => a.vote_average - b.vote_average).slice(0, 10);

  return NextResponse.json(filteredMovies);
};
