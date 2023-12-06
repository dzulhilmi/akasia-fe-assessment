import Header from 'components/Header';
import Pagination from 'components/Pagination';
import Table from 'components/Table';
import { PlanetType } from 'components/home/PlanetCard';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

export type WishListType = PlanetType & {
  planetId: string;
};
type Props = {};

const WishListPage = (props: Props) => {
  const [rawData, setRawData] = useState<WishListType[]>([]);
  const [data, setData] = useState<WishListType[]>(rawData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const sliceItems = rawData.slice(startIndex, endIndex);

    setData(sliceItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, rawData, itemsPerPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const akasiaData = JSON.parse(localStorage?.getItem('akasia') ?? '[]') as WishListType[];
    setRawData(akasiaData);
  }, []);

  return (
    <div className="flex flex-col bg-[url('/assets/bg.jpg')] bg-center bg-cover bg-no-repeat bg-fixed">
      <Head>
        <title>Wishlist</title>
        <meta name="description" content="Explore the planets in the universe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="min-h-screen p-10">
        <h3 className="text-lg text-slate-50 font-semibold mb-5">WishList</h3>
        <div className="relative w-full h-full rounded-lg p-5 bg-blue-100/60">
          <Table
            columns={[
              {
                label: 'Name'
              },
              {
                label: 'Population',
                className: 'hidden sm:table-cell'
              },
              {
                label: 'Gravity',
                className: 'hidden md:table-cell'
              },
              {
                label: 'Climate',
                className: 'hidden sm:table-cell'
              },
              {
                label: 'Diameter',
                className: 'hidden sm:table-cell'
              },
              {
                label: 'Created Date'
              }
            ]}
          >
            <tbody>
              {data.map((planet, i) => (
                <tr key={planet.planetId} className={i % 2 === 0 ? 'bg-slate-500/30' : ''}>
                  <td className="text-sm">{planet.name}</td>
                  <td className="text-sm hidden sm:table-cell">{planet.population}</td>
                  <td className="text-sm hidden md:table-cell">{planet.gravity}</td>
                  <td className="text-sm hidden sm:table-cell">{planet.climate}</td>
                  <td className="text-sm hidden sm:table-cell">{planet.diameter}</td>
                  <td className="text-sm">{new Date(planet.created).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            total={rawData.length}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default WishListPage;
