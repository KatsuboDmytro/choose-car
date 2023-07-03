import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useActionContext } from '../../hooks/useActionContext';
import { NavigateTo } from '../index';

export const NewCar = () => {
  const { cars, setCars, isNewAdding, setIsNewAdding } = useActionContext();
  const [availability, setAvailability] = useState(false);

  const {
    register,
    handleSubmit,
  } = useForm({
    mode: "onBlur"
  });

  const handleCloseModal = () => {
    setIsNewAdding(!isNewAdding);
  }
  const handleAvailability = (e) => {
    setAvailability(e.target.value === 'true');
  };
  const onSubmit = (data) => {
    for (const key in data) {
      if (data[key] === '') {
        return false;
      }
      setIsNewAdding(!isNewAdding);
      const updatedData = [...cars, {...data, id: cars.length + 1, availability: availability}];
      setCars(updatedData);
      localStorage.setItem('cars', JSON.stringify(updatedData));
    }
  }

  return (
      <div className={isNewAdding ? "edit" : "edit-visible"}>
        <div className='edit__modal'>
        <NavigateTo onClick={handleCloseModal} title={'Create new car'}/>

        <div className='edit__form'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="company">Company:</label>
              <input type="text" id="company"
              {...register('car')}
              placeholder="Enter company"/>
            </div>
            
            <div className="form-group">
              <label htmlFor="model">Model:</label>
              <input type="text" id="model"
              {...register('car_model')}
              placeholder="Enter model" />
            </div>

            <div className="form-group">
              <label htmlFor="vin">VIN:</label>
              <input type="number" id="vin"
              {...register('car_vin')}
              placeholder="Enter vin" />
            </div>

            <div className="form-group">
              <label htmlFor="year">Year:</label>
              <input type="number" id="year"
              {...register('car_model_year', { valueAsNumber: true })}
              placeholder="Enter year" />
            </div>

            <div className="form-group">
              <label htmlFor="color">Color:</label>
              <input type="text" id="color"
              {...register('car_color')}
              placeholder="Enter color" />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input type="text" id="price"
              {...register('price')}
              placeholder="Enter price" />
            </div>

            <div className="form-group">
              <label htmlFor="availability">Availability:</label>
              <select id="availability" onChange={handleAvailability}>
                <option value="">Choose option</option>
                <option value={'false'}>False</option>
                <option value={'true'}>True</option>
              </select>
            </div>

            <button type="submit" onClick={handleSubmit}>Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}
