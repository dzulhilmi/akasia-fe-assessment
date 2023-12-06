import React from 'react';
import TableRow from './TableRow';
import { PlanetType } from 'components/home/PlanetCard';

type Props = {
  detail: PlanetType;
};

const DetailList = ({
  detail: {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
    created,
    edited
  }
}: Props) => {
  return (
    <table>
      <tbody>
        <TableRow label="Name" value={name} />
        <TableRow label="Rotation Period" value={rotation_period} />
        <TableRow label="Orbital Period" value={orbital_period} />
        <TableRow label="Diameter" value={diameter} />
        <TableRow label="Climate" value={climate} />
        <TableRow label="Gravity" value={gravity} />
        <TableRow label="Terrain" value={terrain} />
        <TableRow label="Surface Water" value={surface_water} />
        <TableRow label="Population" value={population} />
        <TableRow label="Created" value={new Date(created).toLocaleString()} />
        <TableRow label="Edited" value={new Date(edited).toLocaleString()} />
      </tbody>
    </table>
  );
};

export default DetailList;
