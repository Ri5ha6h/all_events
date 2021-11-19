import axios from 'axios';
import { Category } from '../Modal/Category';
import { Event } from '../Modal/Event';

interface CategoryResponse {
  data: Category[];
}

interface EventResponse{
    data: Event[];
}

export const categoryApi = () => {
  return axios.get<CategoryResponse | any>(
    'https://allevents.s3.amazonaws.com/tests/categories.json'
  );
};

export const allApi = () => {
   return axios.get<EventResponse | any>(
      'https://allevents.s3.amazonaws.com/tests/all.json'
    );
}

export const musicApi = () => {
    return axios.get<EventResponse | any>(
       'https://allevents.s3.amazonaws.com/tests/music.json'
     );
 }

 export const businessApi = () => {
    return axios.get<EventResponse | any>(
       'https://allevents.s3.amazonaws.com/tests/business.json'
     );
 }

 export const sportsApi = () => {
    return axios.get<EventResponse | any>(
       'https://allevents.s3.amazonaws.com/tests/sports.json'
     );
 }

 export const workshopsApi = () => {
    return axios.get<EventResponse | any>(
       'https://allevents.s3.amazonaws.com/tests/workshops.json'
     );
 }
