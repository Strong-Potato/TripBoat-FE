import axios from 'axios';
import {Dispatch} from 'react';

import {DataType, TripSpace, TripSpaceData} from '@/types/home';

export async function getHomeTripSpace(set: Dispatch<React.SetStateAction<TripSpaceData[] | undefined>>) {
  try {
    const fetchData = await axios.get('/api/members/my-spaces/upcoming', {
      params: {
        page: 0,
        size: 5,
      },
    });
    const data: DataType<TripSpace> = fetchData.data;
    console.log(data);

    set(data?.data.spaces);
  } catch (error) {
    console.log(error);
  }
}
