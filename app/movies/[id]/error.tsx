"use client"
type Props = {}

const MovieErrorPage = (props: Props) => {
  return (
    <main className="m-auto flex flex-col justify-center items-center w-full min-h-screen">
      <div className="mb-4 text-8xl">🥺</div>
      <h1 className="text-4xl">Ой, фильм не был найден</h1>
      <p className="text-2xl">Возможно его и не было</p>
    </main>
  );
}

export default MovieErrorPage;