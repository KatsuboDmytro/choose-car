import React from 'react'

export const CarList = () => {
  return (
    <tr>
      <td>Lexus</td>
      <td>RX</td>
      <td>KNDMG4C79C6816543</td>
      <td>Aquamarine</td>
      <td>2007</td>
      <td>$1766.14</td>
      <td>false</td>
      <td>
        <div className="dropdown">
          <select>
            <option value="choice">Choice...</option>
            <option value="edit">Edit</option>
            <option value="delete">Delete</option>
          </select>
        </div>
      </td>
    </tr>
  )
}
