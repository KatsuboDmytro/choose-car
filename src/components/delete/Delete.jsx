import { useContext, useState } from 'react';
import { ActionContext } from '../table/Table';
import './delete.scss';

export const Delete = () => {
  const {cars, setCars, isDeleting, setIsDeleting, checkedItem} = useContext(ActionContext);
  const [toDelete, setToDelete] = useState(false);

  const handlerCheckItWasDeleted = () => {
    setIsDeleting(false);
    setToDelete(false);
  }

  const handlerCheckItNeedToBeDeleted = () => {
    setToDelete(true);
    const updatedData = cars.filter((item) => item.id !== checkedItem);
    setCars(updatedData);
    localStorage.setItem('cars', JSON.stringify(updatedData));
  }

  return (
    <div className={isDeleting ? "modal" : "modal-visible"}>
      <div className="modal-content">
        {toDelete ? (
          <>
            <p>Element successfully deleted 😐</p>
            <div className="modal-buttons">
              <button className="cancel-button" onClick={handlerCheckItWasDeleted}>Go back</button>
            </div>
          </>
        ) : (
          <>
            <p>Are you sure you want to delete this card?</p>
            <div className="modal-buttons">
              <button className="cancel-button" onClick={handlerCheckItWasDeleted}>Cancel</button>
              <button className="delete-button" onClick={handlerCheckItNeedToBeDeleted}>
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};