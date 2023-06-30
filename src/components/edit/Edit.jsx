import { useContext } from 'react'

import { ActiveContext } from '../table/Table';
import back from '../../photos/back.svg'
import './edit.scss'

export const Edit = ({ id }) => {
  const [active, setActive] = useContext(ActiveContext);

  const changeCondition = () => {
    setActive(!active);
  };

  return (
      <div className={`edit ${active ? 'active' : ''}`}>
        <div className='edit_modal'>
        <img src={back} alt="previous page" 
          className='edit__image' 
          onClick={changeCondition} />

        <div className='edit__form'>
          <form>
            <div class="form-group">
              <label for="company">Company:</label>
              <input type="text" id="company"
              value={'sd'}
              placeholder="Enter company" 
              disabled/>
            </div>
            
            <div class="form-group">
              <label for="model">Model:</label>
              <input type="text" id="model"
              value={'sd'}
              placeholder="Enter model" 
              disabled/>
            </div>

            <div class="form-group">
              <label for="vin">VIN:</label>
              <input type="text" id="vin"
              value={'sd'}
              placeholder="Enter vin" 
              disabled/>
            </div>

            <div class="form-group">
              <label for="year">Year:</label>
              <input type="text" id="year"
              value={'sd'}
              placeholder="Enter year" 
              disabled/>
            </div>

            <div class="form-group">
              <label for="color">Color:</label>
              <input type="text" id="color"
              value={'sd'}
              placeholder="Enter color" />
            </div>

            <div class="form-group">
              <label for="price">Price:</label>
              <input type="text" id="price"
              value={'sd'}
              placeholder="Enter price" />
            </div>

            <div class="form-group">
              <label for="available">Available:</label>
              <input type="text" id="available"
              value={'sd'}
              placeholder="Enter available" />
            </div>

            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}
