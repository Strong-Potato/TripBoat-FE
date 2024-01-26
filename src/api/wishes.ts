import axios from 'axios';
import {Dispatch} from 'react';

import {DataType} from '@/types/home';
import {Wishes} from '@/types/wish';

export async function getUserWishes(set: Dispatch<Wishes | undefined>) {
  try {
    const fetchData = await axios.get('/api/members/my-places');
    const data: DataType<Wishes> = fetchData.data;
    set(data.data);
  } catch (error) {
    console.log(error);
  }
}
