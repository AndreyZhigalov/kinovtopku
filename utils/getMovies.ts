const getMovies = async (params: searchParams) => {
  const searchParams =
    '?' +
    Object.entries(params).reduce((query, value) => query + value[0] + '=' + value[1] + '&', '');

  const response = await fetch(
    `${process.env.HTTP_PROTOCOL}${process.env.BASE_URL}/api/movies${searchParams.length > 1 ? searchParams : ''}`,
    {
      next: { revalidate: 600 },
    },
  );
  if (!response.ok) throw new Error('Список фильмов не был получен');

  const movieList: MovieType[] = await response.json();
  return movieList;
};
export default getMovies;
