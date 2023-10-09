'use client';
type Props = {};

const HomeErrorPage = (props: Props) => {
  return (
    <main className="m-auto flex flex-col justify-center items-center w-full min-h-screen">
      <div className="mb-4 text-8xl">👨‍💻</div>
      <h1 className="text-4xl">Ведутся технические работы</h1>
      <p className="text-2xl">Совсем скоро сайт вновь заработает</p>
    </main>
  );
};

export default HomeErrorPage;
