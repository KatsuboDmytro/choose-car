import React, { useContext } from 'react';
import { HomeContext } from '../../pages';
import { CarList } from '../carList/CarList';
import './table.scss';

export const Table = () => {
  const cars = useContext(HomeContext);
  console.log(cars);

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Company</th>
          <th>Model</th>
          <th>VIN</th>
          <th>Color</th>
          <th>Year</th>
          <th>Price</th>
          <th>Availability</th>
          <th>Actions columns</th>
        </tr>
      </thead>

      <tbody>
         {
            cars.map((car) => <CarList key={car.id} car={car} />)
  }
      </tbody>
    </table>
  );
};
