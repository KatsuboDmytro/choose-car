import { useState, useContext, createContext } from 'react';

import { Pagination, CarList, AddNewCar, Find, Delete, Edit, NewCar } from '../../components';
import { HomeContext } from '../../pages';
import './table.scss';

export const ActionContext = createContext([]);

export const Table = () => {
  const {cars, setCars} = useContext(HomeContext);
  const [checkedItem, setCheckedItem] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(50);

  const [findValue, setFindValue] = useState('');

  const [isDeleting, setIsDeleting] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  
  const [isNewAdding, setIsNewAdding] = useState(false);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = cars.slice(firstPostIndex, lastPostIndex);

  console.log(cars)

  return (
    <ActionContext.Provider value={{cars, setCars, isDeleting, setIsDeleting, checkedItem, setCheckedItem, isNewAdding, setIsNewAdding, 
    isEditing, setIsEditing}}>
      <Find findValue={findValue} setFindValue={setFindValue}/>

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

      { isDeleting ? <Delete /> : <></> }
      { isEditing ? <Edit /> : <></> }
      { isNewAdding ? <NewCar /> : <AddNewCar /> }
    </ActionContext.Provider>
  );
};
