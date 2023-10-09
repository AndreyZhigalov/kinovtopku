'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

type Props = {
  options: string[] | number[];
};

const FIlterSelection = ({ options }: Props) => {
  const params = useSearchParams();
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="text-neutral-50 text-2xl z-10 relative">
      <div
        className="w-[200px] h-[37px] px-4 bg-red-700 rounded shadow flex justify-between items-center"
        onClick={() => setIsActive((value) => !value)}>
        <div className="text-2xl">{'\u25BC'}</div>
        <div>{params.get('year') ?? 'ВСЕ ГОДА'}</div>
      </div>
      <div
        className={`h-[300px] w-[200px] overflow-y-scroll flex flex-col absolute ${
          !isActive ? 'hidden' : ''
        }`}>
        <Link
          href={`?type=${params.get('type') ?? 'movies'}`}
          className="px-2 py-1 bg-neutral-50 text-2xl text-gray-950 text-end w-full"
          onClick={(e) => {
            setIsActive(() => false);
          }}>
          ВСЕ ГОДА
        </Link>
        {options.map((option, index) => (
          <Link
            href={`?type=${params.get('type') ?? 'movies'}&year=${option}`}
            key={index}
            className="px-2 py-1 bg-neutral-50 text-2xl text-gray-950 text-end w-full"
            onClick={(e) => {
              setIsActive(() => false);
            }}>
            {option}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FIlterSelection;
