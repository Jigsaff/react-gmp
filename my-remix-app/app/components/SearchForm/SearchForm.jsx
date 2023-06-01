import { Form } from '@remix-run/react';
import Button from '../Button/Button';
import { Outlet } from 'react-router-dom';

export async function action({ request }) {
  let formData = await request.formData();
  const movieName = formData.get('movieName');

  return movieName;
}

const SearchForm = ({ initialSearchQuery }) => {
  return (
      <div className="w-2/3 mx-auto my-10">
        <h1 className="uppercase text-4xl font-light text-white mb-10 text-center">Find
          your movie</h1>
        <Form className="flex items-center" method="get">
          <input
              type="text"
              name="query"
              autoComplete="off"
              placeholder="What do you want to watch?"
              className="w-[713px] h-[57px] bg-[#323232] rounded ml-[150px] text-xl pl-5 text-white opacity-70"
          />
          <Button type="submit"
                  className="bg-[#F65261] rounded w-[223px] h-[57px] uppercase text-white ml-[14px] font-medium text-xl">search</Button>
        </Form>
        <Outlet/>
      </div>
  );
};

export default SearchForm;