import { FilmType } from '@pages/detail/[planetId]';
import React from 'react';
import DetailCard from './DetailCard';

type Props = {
  films: FilmType[];
};

const FilmList = ({ films }: Props) => {
  return (
    <DetailCard title="Films">
      <h4 className="font-semibold mb-5">Total Film: {films?.length}</h4>
      <table>
        <thead>
          <tr>
            <th className="text-left text-sm">Title</th>
            <th className="text-left text-sm">Director</th>
            <th className="text-left text-sm">Release Date</th>
            <th className="text-left text-sm">Total Episode</th>
          </tr>
        </thead>
        <tbody>
          {films?.map((film, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-500/30' : ''}>
              <td className="w-[200px] text-sm">{film.title}</td>
              <td className="w-[200px] text-sm">{film.director}</td>
              <td className="w-[200px] text-sm">{film.release_date}</td>
              <td className="w-[200px] text-sm">{film.episode_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DetailCard>
  );
};

export default FilmList;
