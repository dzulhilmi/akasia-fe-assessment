import React from 'react';

type Props = {
  title: string;
  children: React.ReactElement | React.ReactElement[];
};

const DetailCard = ({ title, children }: Props) => {
  return (
    <div className="mt-5 flex-1">
      <h3 className="font-bold text-xl text-slate-50 mb-2">{title}</h3>
      <div className="relative w-full h-full rounded-lg p-5 bg-blue-100/60">{children}</div>
    </div>
  );
};

export default DetailCard;
