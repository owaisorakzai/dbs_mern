import React from 'react'

export default function Filter({onDateChange,eDate,sDate}) {
  return (
    <div className='row' style={{paddingBottom:'20px'}}>
    <div className='col-md-3'>
    <div class="form-group">
      <label for="date">Start Date:</label>
      <input type="date" value={sDate} name='sDate' onChange={onDateChange} class="form-control"/>
    </div>
    </div>
    <div className='col-md-3'>
    <div class="form-group">
      <label for="date">End Date:</label>
      <input type="date" value={eDate}  name='eDate' onChange={onDateChange} class="form-control"/>
    </div>
    </div>
  </div>
  )
}
