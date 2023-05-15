import axios from 'axios';
import { mapArrToString } from '@/mapArrToString/mapArrToString.ts';
import { User } from '@/getData/types.ts';

export const getData = async () => {
  try {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    const userIds = response.data.map(user => user.id);

    return mapArrToString(userIds);
  } catch (e) {
    console.error(e);
  }
};
