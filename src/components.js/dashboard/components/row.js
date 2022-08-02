import React from 'react'
import { Link } from 'react-router-dom';
import PaymentPage from '../payment-page';


export default function Row({user,deleteStudent}) {
    console.log("aaa")
  return (
            <tr>
                    <td>
                  {new Date( user.createdAt).toLocaleString()}
                  </td>
                  <td >
                    {user.forename}
                  </td>
                  <td>
                    {user.sur_name}
                  </td>
                  <td >
                  {user.phone_number}
                  </td>
                  <td >
                  {user.email}
                  </td>
                  <td >
                  {user.manual_address[0].current_address_line1},{user.manual_address[0].country_address_country}
                  </td>
                  <td>
                  {user.status}
                  </td>
                  <td>
                    
                  <Link className="text-indigo-600 hover:text-indigo-900" to={"/info/" + user._id}> View  | </Link>
                    <button onClick={()=>deleteStudent(user._id)} className="text-indigo-600 hover:text-indigo-900">
                    Delete | 
                    </button>
                    <PaymentPage id={user._id} />
                  </td>
                </tr>
  )
}
