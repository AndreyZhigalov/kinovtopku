import { FIlterSelection, FilterButton, MovieCard } from '@/components';
import { getMovies, getYearsRange } from '@/utils';
import moviesNotFound from '@/public/assets/images/icons/movies-not-found.png';
import Image from 'next/image';

type Props = {
  params: {};
  searchParams: searchParams;
};

export default async function Home({ searchParams }: Props) {
  const moviesList = await getMovies(searchParams);
  const yearsRange = await getYearsRange();
  return (
    <main className="container flex-column my-8 mx-auto min-h-screen">
      {searchParams?.year ? (
        <h1 className="px-4 text-center  lg:text-5xl text-3xl font-bold ">
          Самые низкорейтинговые {searchParams?.type == 'series' ? 'сериалы' : 'фильмы'} за{' '}
          {searchParams.year}
        </h1>
      ) : (
        <h1 className="px-4 text-center  lg:text-5xl text-3xl font-bold ">
          ТОП 10 самых низкорейтинговых {searchParams?.type == 'series' ? 'сериалов' : 'фильмов'}
        </h1>
      )}
      <div className="px-4 mt-6 flex gap-2 lg:justify-start justify-center align-middle flex-wrap ">
        <FilterButton text="Фильмы" type={'movies'} />
        <FilterButton text="Сериалы" type={'series'} />
        <FIlterSelection options={yearsRange} />
      </div>
      <ul className="w-min-[360px] w-full pt-4 justify-center items-start gap-6 flex flex-wrap">
        {moviesList.length ? (
          moviesList.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))
        ) : (
          <div className="my-10">
            <Image
              src={moviesNotFound.src}
              alt=""
              width={500}
              height={500}
              className="m-auto w-80"
            />
            <h2 className="px-4 text-center  text-3xl  font-bold ">
              За этот период {searchParams?.type == 'series' ? 'сериалов' : 'фильмов'} не найдено
              <br />
              Попробуйте выбрать {searchParams?.type == 'series' ? 'фильмы' : 'сериалы'}
            </h2>
          </div>
        )}
      </ul>
    </main>
  );
}
