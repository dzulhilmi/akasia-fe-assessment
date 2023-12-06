import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import HomePage from 'components/home/HomePage';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-[url('/assets/bg.jpg')] bg-center bg-cover bg-no-repeat bg-fixed">
      <Head>
        <title>Front-end Assestment Test</title>
        <meta name="description" content="Explore the planets in the universe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* List of the planets */}
      <HomePage />
    </div>
  );
};

export default Home;
