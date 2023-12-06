import { ResidentType } from '@pages/detail/[planetId]';
import React from 'react';
import DetailCard from './DetailCard';

type Props = {
  residents: ResidentType[];
};

const ResidentList = ({ residents }: Props) => {
  return (
    <DetailCard title="Residents">
      <h4 className="font-semibold mb-5">Total Resident: {residents?.length}</h4>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left text-sm">Name</th>
            <th className="text-left text-sm">Gender</th>
            <th className="text-left text-sm">Birth</th>
          </tr>
        </thead>
        <tbody>
          {residents?.map((resident, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-500/30' : ''}>
              <td className="w-[200px] text-sm">{resident.name}</td>
              <td className="w-[100px] text-sm">{resident.gender}</td>
              <td className="text-sm">{resident.birth_year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DetailCard>
  );
};

export default ResidentList;
