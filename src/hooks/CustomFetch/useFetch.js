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

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setDataFetch({
        loading: false,
        error: null,
        data,
        // data: data.results,
      });
    } catch (error) {
      setDataFetch({
        loading: false,
        error,
      });
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  // return resp;
  // return ({
  //   dataFetch,
  // });
  return dataFetch;
};

export default useFetch;
