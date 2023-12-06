import React from 'react';

type Props = {
  columns: { label: string; className?: string }[];
  children: React.ReactElement | React.ReactElement[];
};

const Table = ({ columns, children }: Props) => {
  return (
    <table className="w-full">
      <thead className="overflow-hidden">
        <tr>
          {columns.map((column, i) => (
            <th key={i} className={`text-left font-semibold text-sm ${column.className}`}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      {children}
    </table>
  );
};

export default Table;
