import { useEffect, useState, createContext, useCallback } from 'react';
import axios from 'axios';
import { Loader, Table } from '../../components/index';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const HomeContext = createContext([]);

export const Home = () => {
  const [cars, setCars] = useLocalStorage([], 'cars');
  const [isLoading, setIsLoading] = useState(false);

  const responseData = async () => {
    const response = await axios.get('https://myfakeapi.com/api/cars/');
    setIsLoading(false);
    setCars(response.data.cars);
    localStorage.setItem('cars', JSON.stringify(response.data.cars));
  }

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const storedData = localStorage.getItem('cars');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (parsedData.length !== 0) {
          setCars(parsedData);
          setIsLoading(false);
        } else {
          responseData();
        }
      } else {
        responseData();
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, [setCars]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <HomeContext.Provider value={{ cars, setCars }}>
      {isLoading ? <Loader /> : <Table />}
    </HomeContext.Provider>
  );
};