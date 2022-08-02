import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Register() {
    const params=useParams()
    const handleSubmit=(event)=>{
        event.preventDefault();

        const data={
            token:params.id,
            password:event.target.password.value,
            isConfirmed:true,
        }
        axios.post('http://localhost:4242/register',data).then((res)=>{
            window.location='/login'
        }
        ).catch((error)=>{
            console.log(error)
        }   
        )
    }
    const handleChange=(event)=>{
    }
  return (
      <>
      <div>
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Enter password for your account
        </h2>
      </div>
  
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
  
            <div>
              <label htmlFor="password" type="password" name="password" onChange={handleChange} className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input id="password" name="password" type="password" onChange={handleChange} autocomplete="current-password" required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  
    </div>
  </>
  )
}
