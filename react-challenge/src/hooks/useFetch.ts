import useSWR from 'swr';
import api from '../services/api';

export const useFetch: any = (url: string) => {
  const { data, error } = useSWR(url, async url2 => {
    const response = await api.get(url2);
    return response.data;
  });

  return { data, error };
};