import { NextResponse } from 'next/server';

import moviesList from '@/fakeDB/low_rated.json';

const movies: MovieType[] = moviesList;

export const GET = async (req: Request, { params: { id } }: { params: { id: string } }) => {
  return NextResponse.json(movies.find((movie) => movie.id === +id));
};
