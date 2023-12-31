import { useActionContext } from '../../hooks/useActionContext';
import available from '../../assets/true.svg';
import unAvailable from '../../assets/false.svg';

export const CarList = ({ car }) => {
  const { setIsDeleting, setCheckedItem, setIsEditing } = useActionContext();

  const changeCondition = (event) => {
    if (event.target.value === 'edit') {
      setIsEditing(true);
    }
    if (event.target.value === 'delete') {
      setIsDeleting(true);
    }
    setCheckedItem(car.id);
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
          <select value="" onChange={changeCondition}>
            <option value="">Choice...</option>
            <option value="edit">Edit</option>
            <option value="delete">Delete</option>
          </select>
        </div>
      </td>
    </tr>
  );
};
