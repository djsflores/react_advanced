import { useState, useEffect } from 'react';
import axios from 'axios';

// const useFetch = async (url) => {
const useFetch = (url) => {
  // const resp = await axios(url);
  // return resp;
  const [dataFetch, setDataFetch] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const handleFetch = async () => {
    try {
      const { data } = await axios(url);
      setDataFetch({
        loading: false,
        error: null,
        // data,
        data: data?.results,
      });
    } catch (error) {
      setDataFetch({
        loading: false,
        error,
      });
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  // return resp;
  return ({
    dataFetch,
  });
};

export default useFetch;
