import { useEffect, useState, createContext, useCallback } from 'react'
import { Table, AddNewCar } from '../../components/index'
import './home.scss'
import axios from 'axios';

export const HomeContext = createContext([]);

export const Home = () => {
  const [cars, setCars] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get('https://myfakeapi.com/api/cars/');
      setCars(response.data.cars);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <HomeContext.Provider value={cars}>
      <Table />
      <AddNewCar />
    </HomeContext.Provider>
  )
}
