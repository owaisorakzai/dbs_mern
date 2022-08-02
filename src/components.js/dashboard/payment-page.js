import React from 'react'
import PaymentDashboard from './components/payment'

export default function PaymentPage({id}) {
  return (
    <>
        <a href="#" class="text-indigo-600 hover:text-indigo-900" data-bs-toggle="modal" data-bs-target="#exampleModal">
         Payment
        </a>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <PaymentDashboard id={id}/>
      </div>

    </div>
  </div>
</div>
    </> 
    )
}
