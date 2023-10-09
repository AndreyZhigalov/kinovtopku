import Link from 'next/link';
import React from 'react';

type Props = {};

const FooterNavigation = (props: Props) => {
  return (
    <div className="justify-start items-start gap-[120px] flex flex-wrap">
      <ul className="flex-col justify-start items-start gap-2.5 inline-flex">
        <li className="text-zinc-200 text-2xl font-light ">
          <Link href={''}>Навигация по сайту 1</Link>
        </li>
        <li className="text-zinc-200 text-2xl font-light ">
          <Link href={''}>Навигация по сайту 2</Link>
        </li>
        <li className="text-zinc-200 text-2xl font-light ">
          <Link href={''}>Навигация по сайту 3</Link>
        </li>
        <li className="text-zinc-200 text-2xl font-light ">
          <Link href={''}>Навигация по сайту 4</Link>
        </li>
        <li className="text-zinc-200 text-2xl font-light ">
          <Link href={''}>Навигация по сайту 5</Link>
        </li>
      </ul>
      <ul className="flex-col justify-start items-start gap-2.5 inline-flex">
        <li className="text-zinc-200 text-2xl font-light ">
          <Link href={''}>Ещё какая-то ссылка 1</Link>
        </li>
        <li className="text-zinc-200 text-2xl font-light ">
          <Link href={''}>Ещё какая-то ссылка 2</Link>
        </li>
        <li className="text-zinc-200 text-2xl font-light ">
          <Link href={''}>Ещё какая-то ссылка 3</Link>
        </li>
      </ul>
      <ul className="flex-col justify-start items-start gap-2.5 inline-flex">
        <div className=" text-zinc-200 text-2xl font-light ">
          <li className="text-zinc-200 text-2xl font-light ">
            <Link href={''}>Очень важные ссылки</Link>
          </li>
          <li className="text-zinc-200 text-2xl font-light ">
            <Link href={''}>Которые никто</Link>
          </li>
          <li className="text-zinc-200 text-2xl font-light ">
            <Link href={''}>Никогда</Link>
          </li>
          <li className="text-zinc-200 text-2xl font-light ">
            <Link href={''}> Не кликнет</Link>
          </li>
          <li className="text-zinc-200 text-2xl font-light ">
            <Link href={''}>Но надежда есть</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default FooterNavigation;
