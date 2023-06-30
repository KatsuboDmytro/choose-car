import { useCallback, useContext, useEffect, useState } from 'react'

import { ActiveContext } from '../table/Table';
import back from '../../photos/back.svg'
import './edit.scss'
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const Edit = () => {
  const {id} = useParams();
  const [selectedCar, setSelectedCar] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`https://myfakeapi.com/api/cars/${id}`);
      setSelectedCar(response.data.Car);
    } catch (error) {
      console.error('Error getting car by id', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);



  return (
      <div className='edit'>
        <div className='edit_modal'>
        <Link to={'/choose-car/'}>
          <img src={back} alt="previous page" 
            className='edit__image' />
        </Link>

        <div className='edit__form'>
          <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="company">Company:</label>
              <input type="text" id="company"
              defaultValue={selectedCar.car}
              placeholder="Enter company"
              className="disabled-input"
              disabled/>
            </div>
            
            <div className="form-group">
              <label htmlFor="model">Model:</label>
              <input type="text" id="model"
              defaultValue={selectedCar.car_model}
              placeholder="Enter model"
              className="disabled-input" 
              disabled/>
            </div>

            <div className="form-group">
              <label htmlFor="vin">VIN:</label>
              <input type="number" id="vin"
              defaultValue={selectedCar.car_vin}
              placeholder="Enter vin"
              className="disabled-input" 
              disabled/>
            </div>

            <div className="form-group">
              <label htmlFor="year">Year:</label>
              <input type="number" id="year"
              defaultValue={selectedCar.car_model_year}
              placeholder="Enter year"
              className="disabled-input" 
              disabled/>
            </div>

            <div className="form-group">
              <label htmlFor="color">Color:</label>
              <input type="text" id="color"
              defaultValue={selectedCar.car_color}
              placeholder="Enter color" />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input type="text" id="price"
              defaultValue={selectedCar.price}
              placeholder="Enter price" />
            </div>

            <div className="form-group">
              <label htmlFor="available">Available:</label>
              <input type="text" id="available"
              defaultValue={selectedCar.availability}
              placeholder="Enter available" />
            </div>

            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}
