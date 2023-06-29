import { useEffect, useState } from 'react'

export const AxiosData = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://www.balldontlie.io/api/v1/teams")
      .then((response) => response.json())
      .then((response) => setCars(response.data));
  }, []);

  return { cars };
}
