import React from 'react';

export const CarList = ({ car }) => {
  return (
    <tr>
      <td>{car.car}</td>
      <td>{car.car_model}</td>
      <td>{car.car_vin}</td>
      <td>{car.car_color}</td>
      <td>{car.car_model_year}</td>
      <td>{car.price}</td>
      <td>{car.availability}</td>
      <td>
        <div className="dropdown">
          <select>
            <option value="choice">Choice...</option>
            <option value="edit">Edit</option>
            <option value="delete">Delete</option>
          </select>
        </div>
      </td>
    </tr>
  );
};
