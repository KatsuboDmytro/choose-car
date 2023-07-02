import { useState, useContext, createContext, useEffect } from 'react';

import { Pagination, CarList, AddNewCar } from '../../components';
import { Edit, HomeContext, NewCar } from '../../pages';
import './table.scss';

export const ActionContext = createContext([]);

export const Table = () => {
  const { cars, setCars } = useContext(HomeContext);
  const [checkedItem, setCheckedItem] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(50);

  const [findValue, setFindValue] = useState('');

  const [isDeleted, setIsDeleted] = useState(false);
  const [toDelete, setToDelete] = useState(false);

  const [toEdit, setToEdit] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  const [isNewAdding, setIsNewAdding] = useState(false);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = cars.slice(firstPostIndex, lastPostIndex);

  const handlerInput = (event) => {
    event.preventDefault();
    setFindValue(event.target.value)
  }
  const handlerCheckItWasDeleted = () => {
    setToDelete(false);
    setIsDeleted(false);
  }
  const handlerCheckItNeedToBeDeleted = () => {
    setIsDeleted(true);
    const updatedData = cars.filter((item) => item.id !== checkedItem);
    setCars(updatedData);
    localStorage.setItem('cars', JSON.stringify(updatedData));
  }
  console.log(cars)

  useEffect(() => {
    const storedData = localStorage.getItem('cars');
    if (storedData) {
      setCars(JSON.parse(storedData));
    }
  }, []);

  return (
    <ActionContext.Provider value={{cars, setCars, setToDelete, checkedItem, setCheckedItem, isNewAdding, setIsNewAdding, 
    isEditing, setIsEditing, setToEdit}}>
      <div className={toDelete ? "modal" : "modal-visible"}>
        <div className="modal-content">
          {isDeleted ? (
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

      { isEditing ? <Edit /> : <></> }

      <div className="search">
        <input type="text" value={findValue} onChange={handlerInput} placeholder="Find the car" />
        <button type="button">
          <svg width="20" height="20" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M334.5 602.3C380.502 602.343 425.73 590.456 465.767 567.8L576.833 678.867C590.364 692.397 608.715 699.998 627.85 699.998C646.985 699.998 665.336 692.397 678.867 678.867C692.397 665.336 699.998 646.985 699.998 627.85C699.998 608.715 692.397 590.364 678.867 576.833L567.8 465.767C599.561 409.378 609.823 343.393 596.684 280.022C583.546 216.651 547.898 160.184 496.337 121.07C444.776 81.9553 380.791 62.8417 316.224 67.2658C251.657 71.6898 190.878 99.3519 145.133 145.133C107.679 182.586 82.1728 230.304 71.8391 282.253C61.5054 334.202 66.8087 388.049 87.0784 436.984C107.348 485.918 141.674 527.744 185.715 557.17C229.755 586.596 281.533 602.301 334.5 602.3ZM192.267 192.267C225.171 159.377 268.461 138.914 314.762 134.363C361.062 129.812 407.508 141.455 446.187 167.309C484.865 193.162 513.383 231.627 526.882 276.149C540.381 320.671 538.025 368.496 520.217 411.476C502.408 454.457 470.249 489.933 429.217 511.86C388.185 533.788 340.82 540.811 295.191 531.732C249.561 522.654 208.492 498.035 178.978 462.072C149.465 426.108 133.334 381.024 133.333 334.5C133.253 308.071 138.42 281.89 148.537 257.474C158.654 233.058 173.517 210.893 192.267 192.267Z" fill="white"/>
          </svg>
        </button>
      </div>

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
          {findValue !== ''
            ? cars
              .filter((car) =>
                Object.values(car).some((value) =>
                  value.toString().toLowerCase().includes(findValue.toLowerCase())
                )
              )
            .map((car) => <CarList key={car.id} car={car} />)
            : currentPosts.map((car) => <CarList key={car.id} car={car} />)}
        </tbody>
      </table>

      <Pagination 
        totalPosts={cars.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}/>

      { isNewAdding ? <NewCar /> : <AddNewCar /> }
    </ActionContext.Provider>
  );
};
