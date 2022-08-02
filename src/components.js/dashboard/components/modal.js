import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';
export default function Modal ({addNote}){
    const {id}=useParams()
    const handleForm=(event)=>{
        event.preventDefault();
        const note={
            id:id,
            title:event.target.title.value,
            desc:event.target.description.value,
            time:Date.now(),
            user:"Owais"
        }
         axios.post('http://localhost:4242/notes',note)
        .then(()=>{
            addNote(note)
        })
        .catch((error)=>{
            console.log(error)
        })

    }
  return (
    <div>
        <button type="button" class="btn btn-primary float-right" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Create Note
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <form onSubmit={handleForm}>
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Create Note</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Title</label>
                <input type="text" name='title' class="form-control" id="exampleFormControlInput1" placeholder="Enter title" />
                </div>
                <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea class="form-control" name='description' id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
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
