import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import axios from 'axios';

import back from '../../photos/back.svg'
import './edit.scss'

export const Edit = () => {
  const {id} = useParams();
  const [selectedCar, setSelectedCar] = useState([]);
  const [newColor, setNewColor] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newAvailable, setNewAvailable] = useState('');

  const handleColor = (e) => {
    setNewColor(e.target.value);
  };
  const handlePrice = (e) => {
    setNewPrice(e.target.value);
  };
  const handleAvailable = (e) => {
    setNewAvailable(e.target.value);
  };
  console.log(newColor);
  console.log(newPrice);
  console.log(newAvailable);

  console.log(selectedCar)

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


  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (newColor.trim() !== '' || newPrice.trim() !== '' || newAvailable.trim() !== '') {
      axios
        .put(`https://myfakeapi.com/api/cars/${id}`, {
          car_color: newColor.trim() !== '' ? newColor : selectedCar.car_color,
          price: newPrice.trim() !== '' ? newPrice : selectedCar.price,
          availability: newAvailable.trim() !== '' ? newAvailable : selectedCar.availability,
        })
        .then(() => {
          setSelectedCar((prevSelectedCar) => {
            return {
              ...prevSelectedCar,
              car_color: newColor.trim() !== '' ? newColor : prevSelectedCar.car_color,
              price: newPrice.trim() !== '' ? newPrice : prevSelectedCar.price,
              availability: newAvailable.trim() !== '' ? newAvailable : prevSelectedCar.availability,
            };
          });
        })
        .catch((err) => console.log(err));
    }
  };


  return (
      <div className='edit'>
        <div className='edit_modal'>
        <Link to={'/choose-car/'}>
          <img src={back} alt="previous page" 
            className='edit__image' />
        </Link>

        <div className='edit__form'>
          <form onSubmit={handleSubmit}>
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
              onChange={handleColor}
              placeholder="Enter color" />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input type="text" id="price"
              defaultValue={selectedCar.price}
              onChange={handlePrice}
              placeholder="Enter price" />
            </div>

            <div className="form-group">
              <label htmlFor="availability">Availability:</label>
              <select id="availability" defaultValue={selectedCar.availability} onChange={handleAvailable}>
                <option value="false">false</option>
                <option value="true">true</option>
              </select>
            </div>

            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}
