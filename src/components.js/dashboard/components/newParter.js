import axios from 'axios';
import React from 'react'

export default function NewParter() {
    const handleForm=(event)=>{
        event.preventDefault();
        const partner={
            role:event.target.role.value,
            name:event.target.name.value,
            email:event.target.email.value,
            isConfirmed:false
        }
        axios.post('http://localhost:4242/addUser',partner).then((res)=>{
            console.log(res)
        })
    }
  return (
    <div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add Partner
    </button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <form onSubmit={handleForm}>
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Partner</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter name</label>
            <input type="text" name='name' class="form-control" id="exampleFormControlInput1" placeholder="Enter name" />
            <label for="exampleFormControlInput1" class="form-label">Enter email</label>
            <input type="text" name='email' class="form-control" id="exampleFormControlInput1" placeholder="Enter email" />
            </div>
            <select class="form-select" name='role' aria-label="Default select example">
            <option selected>Role</option>
            <option value="admin">Admin</option>
            <option value="partner">Partner</option>
            </select>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <input type="submit" class="btn btn-primary"  data-bs-dismiss="modal" value={'Submit'} />
        </div>
        </div>
    </form>
    </div>
    </div>
</div>

  )
}
