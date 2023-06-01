import { useState, useContext } from 'react';
import SearchContext from '../../pages/MovieListPage/SearchContext';
import Button from '../Button';
import { Outlet } from 'react-router-dom';

export const SearchForm = ({ initialSearchQuery }) => {
  const [value, setValue] = useState(initialSearchQuery || '');
  const { handleSearchQueryChange } = useContext(SearchContext);

  const handleForm = event => {
    event.preventDefault();

    if (value.trim() === '') {
      handleSearchQueryChange('');
    } else {
      handleSearchQueryChange(value);
    }
  };

  return (
      <div className="w-2/3 mx-auto my-10">
        <h1 className="uppercase text-4xl font-light text-white mb-10 text-center">Find
          your movie</h1>
        <form className="flex items-center" onSubmit={handleForm}>
          <input
              type="text"
              placeholder="What do you want to watch?"
              value={value}
              onChange={({ target: { value } }) => setValue(value)}
              className="w-[713px] h-[57px] bg-[#323232] rounded ml-[150px] text-xl pl-5 text-white opacity-70"
          />
          <Button type="submit"
                  className="bg-[#F65261] rounded w-[223px] h-[57px] uppercase text-white ml-[14px] font-medium text-xl">Search</Button>
        </form>
        <Outlet/>
      </div>
  );
};