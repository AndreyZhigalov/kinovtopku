'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type Props = {
  text: string;
  type: string;
};

const FilterButton = ({ text, type }: Props) => {
  const params = useSearchParams();
  let isActive = params.get('type') === type ? true : !params.get('type') && type === 'movies';

  const fullLink = params.get('type')
    ? `?${params.toString().replace(/(movies)|(series)/, type)}`
    : `?type=${type}${params.toString().length ? '&' : ''}${params.toString()}`;

  return (
    <div>
      <Link
        href={`${fullLink}`}
        className={`w-[113px] h-[37px] px-2 py-1 ${
          isActive ? 'bg-red-700' : 'bg-neutral-50'
        } rounded shadow justify-center items-center inline-flex border-none ${
          isActive ? 'text-neutral-50' : ''
        } text-2xl font-normal `}>
        {text}
      </Link>
    </div>
  );
};

export default FilterButton;
