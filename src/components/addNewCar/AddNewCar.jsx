import { useContext } from 'react'

import { ActionContext } from '../table/Table';
import newP from '../../photos/new.svg';
import './addNewCar.scss'

export const AddNewCar = () => {
  const { isNewAdding, setIsNewAdding } = useContext(ActionContext);

  const handleNewCar = () => {
    setIsNewAdding(!isNewAdding)
  }

  return (
    <img src={newP} alt="add new car" className='newCar' onClick={handleNewCar} />
  )
}
