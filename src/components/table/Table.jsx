import React from 'react'

import { CarList } from '../carList/CarList'
import './table.scss'

export const Table = () => {
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
        <CarList />
        <CarList />
        <CarList />
        <CarList />
        <CarList />
        <CarList />
        <CarList />        
      </tbody>
    </table>
  )
}
