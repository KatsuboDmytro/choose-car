import React from 'react'
import './input.scss'

export const Input = ({ labelB, labelS, defaultValue, changes, isDisabled }) => {
  return (
    <div className="form-group">
      <label htmlFor={labelS}>{labelB}:</label>
      <input
        type="text"
        id={labelS}
        defaultValue={defaultValue}
        placeholder={`Enter ${labelS}`}
        onChange={changes}
        className={isDisabled ? 'disabled-input' : ''}
        disabled={isDisabled}
      />
    </div>
  );
};
