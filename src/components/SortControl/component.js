import { useState } from 'react';

export const SortControl = ({ currentSelection, onSelectionChange }) => {
  const [selection, setSelection] = useState(currentSelection);

  const handleSelectionChange = (e) => {
    const value = e.target.value;
    setSelection(value);
    onSelectionChange(value);
  };

  return (
      <div>
        <label htmlFor="sort-control"
               className="uppercase text-white opacity-60 mr-3 text-xl font-normal">Sort
          by</label>
        <select
            className="font-medium text-xl uppercase bg-light-black text-white border-0 cursor-pointer outline-none"
            id="sort-control" value={selection}
            onChange={handleSelectionChange}>
          <option value="releaseDate">Release Date</option>
          <option value="title">Title</option>
        </select>
      </div>
  );
};
