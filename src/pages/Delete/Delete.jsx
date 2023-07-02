import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { ActionContext } from '../../components/table/Table';
import { HomeContext } from '../Home/Home';
import './delete.scss';

export const Delete = () => {
  const { id } = useParams();
  const [cars, setCars] = useState([]);
  const [active, setActive] = useState(false);
  const setToDelete = useContext(ActionContext);
  //const navigate = useNavigate();
  useEffect(() => {
    const storedData = localStorage.getItem('cars');

    if (storedData) {
      setCars(JSON.parse(storedData));
    }
  }, []);

  console.log(cars)

  const handlerDelete = () => {
    const updatedData = cars.filter((item) => item.id !== id);
    setCars(updatedData);
    localStorage.setItem('cars', JSON.stringify(updatedData));
  };

  useEffect(() => {
    handlerDelete();
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        {active ? (
          <>
            <p>Element successfully deleted 😐</p>
            <div className="modal-buttons">
              <Link to="/choose-car/">
                <button className="cancel-button">Go back</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <p>Are you sure you want to delete this card?</p>
            <div className="modal-buttons">
              <Link to="/choose-car/">
                <button className="cancel-button">Cancel</button>
              </Link>
              <button className="delete-button" onClick={handlerDelete}>
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
