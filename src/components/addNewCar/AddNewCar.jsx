import { useActionContext } from '../../hooks/useActionContext';
import newP from '../../assets/new.svg';
import './addNewCar.scss'

export const AddNewCar = () => {
  const { isNewAdding, setIsNewAdding } = useActionContext();

  const handleNewCar = () => {
    setIsNewAdding(!isNewAdding)
  }

  return (
    <img src={newP} alt="add new car" className='newCar' onClick={handleNewCar} />
  )
}
