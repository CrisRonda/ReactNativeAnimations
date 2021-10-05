import {useCallback, useEffect, useState} from 'react';
import fakedata from './data.json';

// let headersList = {
//   Accept: '*/*',
//   'User-Agent': 'Thunder Client (https://www.thunderclient.io)',
//   Authorization: 'XXX',
// };
const usePexels = () => {
  const [data, setData] = useState([]);
  const getData = useCallback(async () => {
    try {
      // const response = await fetch(
      //   'https://api.pexels.com/v1/curated?page=1&per_page=220',
      //   {
      //     method: 'GET',
      //     headers: headersList,
      //   },
      // );
      const _data = fakedata;
      setData(_data || []);
    } catch (error) {
      setData([]);
      console.log(error);
    }
  }, []);
  useEffect(() => {
    if (!data.length) {
      getData();
    }
  }, [data.length, getData]);
  return {data};
};

export default usePexels;
