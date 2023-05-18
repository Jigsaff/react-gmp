import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, params = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          params: params,
          cancelToken: source.token,
        });

        setData(response.data.data || response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        } else {
          setError(error.message);
        }
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      source.cancel('Operation canceled by the user.');
    };
  }, [url, params]);

  return { data, loading, error };
};

export default useFetch;