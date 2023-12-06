import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type Props = {
  total: number;
  itemsPerPage: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
};

const Pagination = ({ total, itemsPerPage, currentPage, handlePageChange }: Props) => {
  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <div className="flex items-center justify-end gap-3 mt-5">
      <button
        className="text-slate-800"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaChevronLeft size={10} />
      </button>
      {Array.from({ length: Math.min(totalPages) }, (_, index) => (
        <button
          key={index}
          disabled={currentPage === index + 1}
          onClick={() => handlePageChange(index + 1)}
          className="disabled:bg-slate-200 hover:bg-slate-200 p-1 text-xs rounded-full h-5 w-5 inline-flex items-center justify-center"
        >
          {index + 1}
        </button>
      ))}
      <button
        className="text-slate-800"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaChevronRight size={10} />
      </button>
    </div>
  );
};

export default Pagination;
