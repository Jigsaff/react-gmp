export const SortControl = ({ sortCriterion, onSortCriterion }) => {
  const handleSortChange = ({ target: { value } }) => {
    onSortCriterion(value);
  };

  return (
      <div className="relative inline-flex items-center ml-16">
        <label htmlFor="sort-by"
               className="text-sm text-white opacity-60 mr-18 w-24 flex justify-center font-medium">
          SORT BY:
        </label>
        <select
            className="appearance-none bg-dark-gray border-none rounded-md text-white cursor-pointer py-2 pr-10 pl-5 box-border font-medium"
            name="sort-by"
            id="sort-by"
            onChange={handleSortChange}
            value={sortCriterion}
            data-testid="sort-control"
        >
          <option value="release_date">RELEASE DATE</option>
          <option value="title">TITLE</option>
        </select>
        <div className="absolute top-1/2 right-5 transform -translate-y-1/2">
          <div
              className="w-0 h-0 border-l-5 border-r-5 border-t-5 border-transparent border-red-600 pointer-events-none" />
        </div>
      </div>
  );
};
