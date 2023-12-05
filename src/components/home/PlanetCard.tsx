import Image from 'next/image';
import React, { useState } from 'react';

export type PlanetType = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

const PlanetCard = ({ name, population, terrain }: PlanetType) => {
  const [number] = useState(() => Math.floor(Math.random() * 7) + 1);
  return (
    <div className="relative p-5 min-h-[250px] w-[240px] my-5 rounded-2xl bg-blue-950/90 text-slate-50 pt-28 flex items-center justify-center flex-col hover:cursor-pointer hover:bg-blue-950/80 duration-200">
      <div className="absolute -top-10">
        <Image
          src={`/assets/planets/planets-${number}.png`}
          width={150}
          height={150}
          alt="planets"
          className="absolute -top-10 drop-shadow-[0_4px_4px_rgba(211,44,255,0.5)]"
        />
      </div>
      <div className="font-bold text-base">{name.toUpperCase()}</div>
      <div className="text-center">
        <ul className="flex flex-col text-sm text-slate-300">
          <li>
            <span className="font-semibold">population</span>: {population}
          </li>
          <li>
            <span className="font-semibold">terrain</span>: {terrain}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlanetCard;
