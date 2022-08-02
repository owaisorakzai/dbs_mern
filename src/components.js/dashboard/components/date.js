import React from 'react'

export default function Date({title}) {
  return (
<div className="form-group" style={{paddingTop:'30px',paddingBottom:'30px'}}>
    <label for="">{title}</label>
  <input type={'date'} className="form-control" />
  </div>  )
}
