const getSingleMovie = async (id: number) => {
  const resolve = await fetch(`${process.env.HTTP_PROTOCOL}${process.env.BASE_URL}/api/movies/${id}`, {
    next: { revalidate: 600 },
  });
  if (!resolve.ok) throw new Error('Фильм или сериал не найден');
  const movie = await resolve.json() as MovieType;

  return movie;
};

export default getSingleMovie;
