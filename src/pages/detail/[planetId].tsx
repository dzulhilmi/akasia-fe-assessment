import { WishListType } from '@pages/wishlist';
import Header from 'components/Header';
import DetailList from 'components/detail/DetailList';
import FilmList from 'components/detail/FilmList';
import ResidentList from 'components/detail/ResidentList';
import { PlanetType } from 'components/home/PlanetCard';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';

export type ResidentType = {
  name: string;
  gender: string;
  birth_year: string;
};

export type FilmType = {
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
};

type Props = {
  detail: PlanetType;
  residents: ResidentType[];
  films: FilmType[];
  planetId: string;
};

const DetailPage = ({ detail, films, residents, planetId }: Props) => {
  const [number] = useState(() => Math.floor(Math.random() * 7) + 1);
  const [isWishList, setIsWishList] = useState<boolean>(() => {
    const currentWishList: WishListType[] = JSON.parse(
      localStorage.getItem('akasia') ?? '[]'
    ) as WishListType[];
    if (currentWishList.find((el) => el.planetId === planetId)) {
      return true;
    } else {
      return false;
    }
  });

  const handleWishList = () => {
    const currentWishList: WishListType[] = JSON.parse(
      localStorage.getItem('akasia') ?? '[]'
    ) as WishListType[];
    let newData: WishListType[] = [];
    if (currentWishList.find((el) => el.planetId === planetId)) {
      newData = currentWishList.filter((currentData) => currentData.planetId !== planetId);
      setIsWishList(false);
    } else {
      newData = [...currentWishList, { ...detail, planetId }];
      setIsWishList(true);
    }
    localStorage.setItem('akasia', JSON.stringify(newData));
  };

  return (
    <div className="flex flex-col bg-[url('/assets/bg.jpg')] bg-center bg-cover bg-no-repeat bg-fixed">
      <Head>
        <title>Planet - {detail.name}</title>
        <meta name="description" content="Explore the planets in the universe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="min-h-screen p-10">
        <div className="relative w-full h-full rounded-lg p-5 bg-blue-100/60 flex flex-col sm:flex-row">
          <button
            className={`absolute right-5 ${
              isWishList ? 'text-rose-700' : 'text-rose-50'
            } hover:text-rose-300`}
            onClick={handleWishList}
          >
            <FaHeart />
          </button>
          <div className="w-fit sm:min-w-[250px]">
            <Image
              src={`/assets/planets/planets-${number}.png`}
              width={250}
              height={250}
              alt="planets"
              className="animate-spin-slow drop-shadow-[0_4px_4px_rgba(211,44,255,0.5)]"
            />
          </div>
          <DetailList detail={detail} />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <ResidentList residents={residents} />
          <FilmList films={films} />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context: { query: { planetId: string } }) => {
  const { planetId } = context.query;
  const res = await fetch(`https://swapi.dev/api/planets/${planetId}/`);
  const detail = await res.json();

  const residents: any[] = await Promise.all(
    detail.residents.map(async (resident: string) => {
      const residentRes = await fetch(resident);
      const data = await residentRes.json();
      return data;
    })
  );
  const films: any[] = await Promise.all(
    detail.films.map(async (film: string) => {
      const filmRes = await fetch(film);
      const data = await filmRes.json();
      return data;
    })
  );
  return { props: { detail, residents, films, planetId } };
};

export default DetailPage;
