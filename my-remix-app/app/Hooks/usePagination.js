import { useState, useCallback } from 'react';

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = Math.ceil((data?.length || 0) / itemsPerPage);

  const currentData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data?.slice(startIndex, endIndex) || [];
  };

  const nextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, maxPages));
  };

  const prevPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const resetPagination = useCallback(() => {
    setCurrentPage(1);
  }, []);

  return {
    currentData,
    nextPage,
    prevPage,
    currentPage,
    maxPages,
    resetPagination,
  };
};

export default usePagination;
