import { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import { Loader, Table } from '../../components/index';

export const CarsContext = createContext([]);

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const storedData = JSON.parse(localStorage.getItem('cars') || '[]');

        if (storedData.length) {
          setCars(storedData);
          setIsLoading(false);
        } else {
          const response = await axios.get('https://myfakeapi.com/api/cars/');
          setIsLoading(false);
          setCars(response.data.cars);
          localStorage.setItem('cars', JSON.stringify(response.data.cars));
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <CarsContext.Provider value={{ cars, setCars }}>
      {isLoading ? <Loader /> : <Table />}
    </CarsContext.Provider>
  );
};