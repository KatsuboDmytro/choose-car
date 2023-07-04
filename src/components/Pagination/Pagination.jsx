import { useEffect } from 'react';
import { useActionContext } from '../../hooks/useActionContext';
import './pagination.scss'

export const Pagination = ({ totalPosts, postsPerPage }) => {

  const { setCurrentPage, currentPage } = useActionContext();
  
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  useEffect(() => {
    const storedPaginationPage = JSON.parse(localStorage.getItem('pagination') || 1);
    console.log(storedPaginationPage);
    if (storedPaginationPage) {
      setCurrentPage(storedPaginationPage);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('pagination', JSON.stringify(currentPage));
  }, [currentPage]);
  
  

  return (
    <div className='pagination'>
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          id={page === currentPage ? "active" : ""}>
          {page}
        </button>
      ))}
    </div>
  );
};
