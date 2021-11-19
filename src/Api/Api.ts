import axios from 'axios';
import { Category } from '../Modal/Category';
import { Event } from '../Modal/Event';

interface CategoryResponse {
  data: Category[];
}



export const categoryApi = () => {
  return axios.get<CategoryResponse | any>(
    'https://allevents.s3.amazonaws.com/tests/categories.json'
  );
};

