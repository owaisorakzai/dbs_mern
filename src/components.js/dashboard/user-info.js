import React ,{useState,useEffect}from 'react';
import Nav from './nav';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Cards from './components/cards';
import PaymentDetails from './components/payment-details';
import Notes from './components/notes';


export default function UserInfo() {
  const params=useParams()
  const [values,setValues]=useState({
    name:"",
    email:"",
    phone_number:"",
    status:""
  })

  const [notes,setNotes]=useState([])
  useEffect(() => {
    axios.get('http://localhost:4242/usersInfo/'+params.id)
    .then(res => {
      setNotes(res.data.notes)
      setValues({
        name:res.data.forename,
        email:res.data.email,
        phone_number:res.data.phone_number,
        status:res.data.status,
      }
      );
    })
    .catch((error) => {
      console.log(error);
    })
  }, [params])
  const addNotes=(note)=>{
    setNotes([...notes,note])
  }
  return <>
  <Nav/>
  <div class="bg-gray-100" style={{height:'100vh'}}>
  <section className='container'>
    <div className='row' style={{paddingTop:'60px' , paddingBottom:'40px'}}>
      <div className='col-md-8'>
        <section style={{paddingBottom:'40px'}}>
          <PaymentDetails />
        </section>
        <Cards values={values} />
      </div>
      <div className='col'>
        <Notes addNotes={addNotes} notes={notes} />
      </div>
    </div>

  </section>
</div>
</>;
}
