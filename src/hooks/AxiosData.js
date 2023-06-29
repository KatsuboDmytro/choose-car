import { useEffect, useState } from 'react';

export const AxiosData = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('https://myfakeapi.com/api/cars/')
      .then((res) => res.json())
      .then((data) => setCars(data.cars))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return cars;
};
