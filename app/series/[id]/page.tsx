import Image from 'next/image';
import posterPlaceholder from '@/public/assets/images/film-poster-placeholder.png';
import { PostersGallery } from '@/components';
import { Metadata } from 'next/types';
import { getSingleMovie } from '@/utils';

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const movieData: MovieType = await fetch(
    `${process.env.HTTP_PROTOCOL}${process.env.BASE_URL}/api/movies/${id}`,
    {
      next: { revalidate: 600 },
    },
  ).then((res) => res.json());
  return {
    title: movieData.title,
    description: movieData.overview,
    openGraph: {
      type: 'website',
      title: movieData.title,
      description: movieData.overview,
      siteName: 'Киновтопку.ру',
      url: 'https://киновтопку.ру',
      images: [movieData.poster_path ?? ''],
    },
  };
}

type Props = {
  params: { id: string };
};

const SeriePage = async ({ params: { id } }: Props) => {
  const movie = await getSingleMovie(Number(id));

  return (
    <main className="container m-auto my-10 w-full min-h-screen px-4">
      <article className="mb-8 w-full flex lg:flex-row flex-col justify-start items-start gap-6">
        <Image
          className="w-80 h-[453px] max-lg:m-auto"
          src={movie.poster_path ?? posterPlaceholder}
          alt=""
          width={320}
          height={453}
        />
        <div className="p-4 flex-col justify-start items-start flex-1">
          <h1 className="mb-4 text-4xl font-bold">{movie.title}</h1>
          <p className="text-2xl text-gray-950">{movie.overview}</p>
          <div className="px-4 pt-8 flex-col justify-start items-start gap-6 flex">
            <ul className="flex flex-col justify-center items-start gap-4 ">
              <li className="justify-start items-center gap-2 flex flex-wrap max-sm:flex-col">
                <div className="text-3xl text-gray-800">Режиссёр:</div>
                <div className="text-2xl text-gray-950">{movie.directors.director}</div>
              </li>
              <li className="justify-start items-center gap-2 flex flex-wrap max-sm:flex-col">
                <div className="text-3xl text-gray-800">Сценарист:</div>
                <div className="text-2xl text-gray-950">{movie.directors.writer}</div>
              </li>
              <li className="justify-start items-center gap-2 flex flex-wrap max-sm:flex-col">
                <div className="text-3xl text-gray-800">Оператор:</div>
                <div className="text-2xl text-gray-950">{movie.directors.operator}</div>
              </li>
            </ul>
            <div className="flex flex-col">
              <div className="mb-2 text-3xl text-gray-800">Актёрский состав:</div>
              <ul className="justify-start items-start gap-2.5 flex-col">
                {movie.cast.map((actor) => (
                  <li className="text-2xl text-gray-950 " key={actor}>
                    {actor}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
      <PostersGallery photos={movie.gallery} />
    </main>
  );
};

export default SeriePage;
