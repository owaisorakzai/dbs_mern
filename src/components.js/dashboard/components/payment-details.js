import React from 'react'

export default function PaymentDetails() {
  return (
    <div className='card' style={{borderRadius:'7px' , boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
        <div className='card-body' style={{padding:'40px'}}>
            <div className='row'>
                <h1 className='text-indigo-600'>$50</h1>
            </div>
        </div>
    </div>
  )
}
