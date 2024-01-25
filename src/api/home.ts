import axios from 'axios';
import {Dispatch} from 'react';

import {DataType, TripSpace, TripSpaceData, Vote} from '@/types/home';

export async function getHomeTripSpace(set: Dispatch<React.SetStateAction<TripSpaceData[] | undefined>>) {
  try {
    const fetchData = await axios.get('/api/members/my-spaces/upcoming', {
      params: {
        page: 0,
        size: 5,
      },
      withCredentials: true,
    });
    if (fetchData.data) {
      const data: DataType<TripSpace> = fetchData.data;
      set(data?.data.spaces);
    }
    console.log(fetchData);
  } catch (error) {
    console.log(error);
  }
}

export async function getHomeVote(set: Dispatch<React.SetStateAction<Vote | undefined>>) {
  try {
    const fetchData = await axios.get('/api/votes/notVoted', {
      withCredentials: true,
    });
    if (fetchData.data) {
      set(fetchData.data);
    }
    console.log(fetchData);
  } catch (error) {
    console.log(error);
  }
}
