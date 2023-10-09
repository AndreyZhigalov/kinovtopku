const getYearsRange = async () => {
  const yearsRange = (await fetch("" + process.env.HTTP_PROTOCOL + process.env.BASE_URL + '/api/movies/years-range', {
    next: { revalidate: 600 },
  }).then((res) => res.json())) as number[];
  
  const filteredAndSortedRange = Array.from(new Set(yearsRange).values()).sort((a, b) => b - a);

  return filteredAndSortedRange;
};

export default getYearsRange;
