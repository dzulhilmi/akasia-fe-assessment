import React, { useState, useEffect, useRef } from 'react';
import PlanetCard, { PlanetType } from './PlanetCard';
import Loading from 'components/Loading';
import Link from 'next/link';

const HomePage = () => {
  const [items, setItems] = useState<PlanetType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState<string | null>('');

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
      const data = await response.json();
      setNext(data.next);
      if (data.results) {
        setItems((prevItems) => [...prevItems, ...data!.results]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    if (next === null) return;
    fetchData();
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loading />}
      <div className="mx-10 flex-1 min-h-screen">
        <h2 className="text-slate-200 font-bold text-2xl my-5">Planets</h2>
        <div className="flex flex-row flex-wrap gap-10 justify-center items-center">
          {items.map((item, i) => (
            <Link key={i} href={`/detail/${item.url.slice(30, 31)}`} passHref>
              <a>
                <PlanetCard key={i} {...item} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
