import React from 'react'

export default function Cards({values}) {
  return (
    <div>
    <div class="card" style={{borderRadius:'7px' , boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
  <div class="card-header">
    Applicant Information<br></br>
    <small>Personal details and application.</small>
  </div>
  <div class="card-body">
    <div className='row'>
    <div className='col-md-6'>
    <small class="card-text"><b>Full name</b></small>
    <p class="card-text">{values.name}</p>
    <small class="card-text"><b>Email address</b></small>
    <p class="card-text">{values.email}</p>

    </div>
    <div className='col'>
    <small class="card-text"><b> Application for</b></small>
    <p class="card-text">DBS Check Standard</p>
    <small class="card-text"><b> Payment Status</b></small>
    <p class="card-text">{values.status}</p>
      </div>

    </div>




  </div>
  </div>
    </div>
  )
}
