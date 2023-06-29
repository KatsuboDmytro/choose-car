import { createContext } from 'react'

import { AxiosData } from '../../hooks/AxiosData'
import { Find, Table, AddNewCar } from '../../components/index'
import './home.scss'

export const HomeContext = createContext({});

export const Home = () => {
  const cars = AxiosData();
  console.log(cars);

  return (
    <HomeContext.Provider value={cars}>
      <Find />
      <Table />
      <AddNewCar />
    </HomeContext.Provider>
  )
}
