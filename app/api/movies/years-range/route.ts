import { NextResponse } from 'next/server';

import moviesList from '@/fakeDB/low_rated.json';

const movies: MovieType[] = moviesList;

export const GET = async (req: Request) => {
  const range = movies.map((movie) => new Date(movie.release_date).getFullYear());
  return NextResponse.json(range);
};
