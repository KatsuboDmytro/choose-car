import back from '../../photos/back.svg'
import './navigateTo.scss'

export const NavigateTo = ({ onClick, title }) => {
  return (
    <div className='navigate'>
      <img src={back} alt="previous page" className='navigate__image' onClick={onClick} />
      <h2>{title}</h2>
    </div>
  )
}
