export const SortControl = ({ sortCriterion, onSortCriterion }) => {
  const handleSortChange = ({ target: { value } }) => {
    onSortCriterion(value);
  };

  return (
      <div>
        <label htmlFor="sort-control"
               className="uppercase text-white opacity-60 mr-3 text-xl font-normal">Sort
          by</label>
        <select
            className="font-medium text-xl uppercase bg-light-black text-white border-0 cursor-pointer outline-none"
            id="sort-control" value={sortCriterion}
            data-testid="sort-control"
            onChange={handleSortChange}>
          <option value="releaseDate">Release Date</option>
          <option value="title">Title</option>
        </select>
      </div>
  );
};
