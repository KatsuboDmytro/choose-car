import { useContext, useEffect, useState } from 'react'
import { Input, NavigateTo } from '../../components';
import { ActionContext } from '../../components/table/Table';
import './edit.scss'

export const Edit = () => {
  const [selectedCar, setSelectedCar] = useState([]);
  const [newColor, setNewColor] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newAvailable, setNewAvailable] = useState('');
  const {cars, setCars, isEditing, setIsEditing, checkedItem} = useContext(ActionContext);

  const handleColor = (e) => {
    setNewColor(e.target.value);
  };
  const handlePrice = (e) => {
    setNewPrice(e.target.value);
  };
  const handleAvailable = (e) => {
    if (e.target.value === 'false') {
      setNewAvailable(false);
    }
    if (e.target.value === 'true') {
      setNewAvailable(true);
    }
  };

  const handleCloseModal = () => {
    setIsEditing(!isEditing);
  }
  const handleSubmit = () => {
    if (newColor !== '' || newPrice !== '' || newAvailable !== '') {
      setIsEditing(!isEditing);
      const editedData = cars.map((car) => {
        if (car.id === checkedItem) {
          return {
            ...car,
            car_color: newColor !== '' ? newColor : selectedCar.car_color,
            price: newPrice !== '' ? newPrice : selectedCar.price,
            availability: newAvailable !== '' ? newAvailable : selectedCar.availability
          };
        }
        return car;
      });
      setCars(editedData);
      localStorage.setItem('cars', JSON.stringify(editedData));
    }
  };
  
  useEffect(() => {
    const editedCar = cars.filter((item) => item.id === checkedItem);
    setSelectedCar(editedCar[0]);
  }, [checkedItem]);

  return (
    <div className={isEditing ? "edit" : "edit-visible"}>
      <div className='edit__modal'>
        <NavigateTo onClick={handleCloseModal} title={'Edit info about car'}/>

        <div className='edit__form'>
          <form onSubmit={handleSubmit}>
            <Input 
              labelB={'Company'}
              labelS={'company'}
              defaultValue={selectedCar.car}
              isDisabled={true}
            />
            <Input 
              labelB={'Model'}
              labelS={'model'}
              defaultValue={selectedCar.car_model}
              isDisabled={true}
            />
            <Input 
              labelB={'VIN'}
              labelS={'vin'}
              defaultValue={selectedCar.car_vin}
              isDisabled={true}
            />
            <Input 
              labelB={'Year'}
              labelS={'year'}
              defaultValue={selectedCar.car_model_year}
              isDisabled={true}
            />
            <Input 
              labelB={'Color'}
              labelS={'color'}
              defaultValue={selectedCar.car_color}
              changes={handleColor}
              isDisabled={false}
            />
            <Input 
              labelB={'Price'}
              labelS={'price'}
              defaultValue={selectedCar.price}
              changes={handlePrice}
              isDisabled={false}
            />
            <div className="form-group">
              <label htmlFor="availability">Availability:</label>
              <select id="availability" onChange={handleAvailable}>
                <option value=''>Choose option</option>
                <option value={false}>false</option>
                <option value={true}>true</option>
              </select>
            </div>

            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}
