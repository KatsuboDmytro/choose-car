import { useEffect, useState, createContext, useCallback } from 'react'
import { Find, Table, AddNewCar } from '../../components/index'
import './home.scss'

export const HomeContext = createContext([]);

export const Home = () => {
  const [cars, setCars] = useState([]);

  const fetchData = useCallback(() => {
    fetch('https://myfakeapi.com/api/cars/')
      .then((res) => res.json())
      .then((data) => setCars(data.cars))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <HomeContext.Provider value={cars}>
      <Find />
      <Table />
      <AddNewCar />
    </HomeContext.Provider>
  )
}
