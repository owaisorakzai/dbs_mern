import React,{useState} from 'react'
import Modal from './modal'

export default function Notes({notes,addNotes}) {
  return (
    <div>
        <div class="card" style={{borderRadius:'7px' , boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
        <div class="card-header" style={{paddingTop:'20px',paddingBottom:'20px'}}>
            <div className='row'>
                <div className='col' style={{paddingTop:'6px'}}>
                    <h5>Notes</h5>
                </div>
                <div className='col float-right'>
                    <Modal addNote={addNotes}/>
                </div>
            </div>
        </div>
        <ul class="list-group list-group-flush container">
            {notes.map((note)=>{
                return(
                    <li class="list-group-item ">
                    <small className='text-uppercase text-indigo-600'>{note.title}</small>
                    <p>{note.desc}</p>
                    <div className='row'>
                        <div className='col'><p class="text-muted">{new Date(note.time).toLocaleString('en-GB')}</p></div>
                        <div className='col'><p class="text-muted float-right">{note.user}</p></div>
                    </div>
                    </li>
                )

            })}   

        </ul>
        </div>
    </div>
  )
}
