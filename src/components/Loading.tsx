import React from 'react';
import { IoPlanet } from 'react-icons/io5';

const Loading = () => {
  return (
    <div className="z-50 fixed top-[50%] left-[50%] animate-spin">
      <IoPlanet className="text-white" size={30} />
    </div>
  );
};

export default Loading;
