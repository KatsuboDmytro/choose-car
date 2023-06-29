import { useState, useContext } from 'react';
import { HomeContext } from '../../pages';
import { CarList } from '../carList/CarList';
import './table.scss';
import { Pagination } from '../../components';

export const Table = () => {
  const cars = useContext(HomeContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(50);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = cars.slice(firstPostIndex, lastPostIndex);

  return (
    <>
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
          {currentPosts.map((car) => <CarList key={car.id} car={car} />)}
        </tbody>
      </table>
      <Pagination 
        totalPosts={cars.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}/>
    </>
  );
};
