import { useEffect, useState } from 'react';
import { client } from '../lib/client';

export const useFetchData = (query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(query);
        console.log(result);
        setData(result);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    };
    fetchData();
  }, [query]);

  return { data, error };
};
