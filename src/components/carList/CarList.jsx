import { useNavigate } from 'react-router';
import available from '../../photos/true.svg';
import unAvailable from '../../photos/false.svg';

export const CarList = ({ car }) => {
  const navigate = useNavigate();

  const changeCondition = (event) => {
    if(event.target.value === 'edit'){
      navigate(`/choose-car/${car.id}`);
    }
  };

  return (
    <tr>
      <td>{car.car}</td>
      <td>{car.car_model}</td>
      <td>{car.car_vin}</td>
      <td>{car.car_color}</td>
      <td>{car.car_model_year}</td>
      <td>{car.price}</td>
      <td>
        {car.availability ? (
          <img src={available} alt="available" style={{ cursor: 'pointer' }} />
        ) : (
          <img src={unAvailable} alt="not available" />
          )}
      </td>
      <td>
        <div className="dropdown">
          <select onChange={changeCondition}>
            <option value="choice">Choice...</option>
            <option value="edit">Edit</option>
            <option value="delete">Delete</option>
          </select>
        </div>
      </td>
    </tr>
  );
};
