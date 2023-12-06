import React from 'react';

type Props = {
  label: string;
  value: string;
};

const TableRow = ({ label, value }: Props) => {
  return (
    <tr className="flex flex-col md:flex-row">
      <td className="w-[150px] font-semibold">{label}</td>
      <td>{value}</td>
    </tr>
  );
};

export default TableRow;
