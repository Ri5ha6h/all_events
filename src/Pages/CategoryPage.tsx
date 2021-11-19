import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { categoryApi } from '../Api/Api';
import { Category } from '../Modal/Category';

const CategoryPage = () => {
  const [category, setCategory] = useState<
    Category[]
  >([]);

  useEffect(() => {
    categoryApi().then((res) => {
      return setCategory(res.data);
    });
  }, []);
  return (
    <div className='flex flex-col w-screen px-2 py-4 sm:px-6 sm:flex-row sm:justify-between sm:items-center'>
      <h1 className='text-3xl font-semibold text-gray-500'>
        Categories
      </h1>
      <ul className='flex mt-5 space-x-1 sm:space-x-5 sm:mt-0'>
        {category.map((item, i) => (
          <Link key={i} to={`/${item.category}`}>
            <li className='text-lg font-medium tracking-wider text-gray-400 sm:text-xl hover:underline hover:text-gray-700'>
              {item.category}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default memo(CategoryPage);
