import Nav from './nav';
import axios from 'axios';
import React from 'react';
import Row from './components/row';
import Box from './components/box';
import { Component } from 'react/cjs/react.production.min';

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.paid=0
    this.state={
      users:[],
      users2:[],
      status:"",
      type:"",
      date:""
    }

  }
  deleteStudent=(id)=> {
    try{
      const updatedUsers=this.state.users.filter((user)=>user._id!=id)
      this.setState=({
        users:updatedUsers,
        users2:updatedUsers
      })
      axios.delete('http://localhost:4242/delete-user/' + id)
      .then((res) => {
          console.log('User successfully deleted!')
      }).catch((error) => {
          console.log(error)
      })
    }
    catch{
      console.error("User not deleted");
    }

}
handleChange=(event)=>{
  this.setState({[event.target.name]:event.target.value},()=>{
    let array=[]
    this.state.users2.map((user)=>{
      if(new Date(user.createdAt).toDateString()==new Date(this.state.date).toDateString() || user.status==this.state.status){
        array.push(user)
      }
    })
    this.setState({
      users:array
    })
  })
}
componentDidMount(){
  const token=localStorage.getItem('token')
  axios.post('http://localhost:4242/auth',{token:token}).then((resp)=>{
    if(resp.data.decoded.role=="admin" || resp.data.decoded.role=="partner"){
      axios.get('http://localhost:4242/users/')
      .then(res => {
        this.setState({
          users:res.data,
          users2:res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      })
        this.paid=this.state.users.filter(item=>{
          if(item.status=='paid'){
            return true
          }
          return false
        }).length;
    }
    else{
    }
  }).catch((error)=>{
  } )

}
render(){
  return <>
  <Nav />
  <div style={{height:'100vh'}}>
  <div class="bg-gray-100" >
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    
<div>
  <h3 class="text-lg leading-6 font-medium text-gray-900">
    Last 30 days
  </h3>
  <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3" style={{paddingBottom:'30px'}}>
    <Box data={this.state.users.length} title={"Total Users"} />
    <Box data={this.paid} title={"Paid Users"} />
    <Box data={this.state.users.length-this.paid} title={"Unpaid Users"} />
  </dl>
</div>
<div className='row'>
  <div className='col'>
  <label for="state">State</label>
  <select class="form-select" onChange={this.handleChange} name='status' aria-label="Default select example">
      <option selected>All Statuses</option>
      <option value="Paid">Paid</option>
      <option value="Unpaid">Unpaid</option>
    </select>
  </div>
  <div className='col'>
  <label for="type">Type</label>
    <select class="form-select" onChange={this.handleChange} name='type' aria-label="Default select example">
      <option selected>All Types</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div className='col'>
    <div class="form-group">
        <label for="date">End Date:</label>
        <input type="date" onChange={this.handleChange} name='date' class="form-control"/>
      </div>
  </div>


</div>
<section style={{padding:'20px'}}></section>
<h6 style={{width:'8%', textAlign:'center', padding:'5px', borderRadius:'4px'}} className='text-white bg-indigo-600 bg-[length:100px_100px]'>ALL USERS</h6>
<br/>
<br/>
<br/>
<br/>

<table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Created</th>
                <th scope="col">Forename</th>
                <th scope="col">Surname</th>
                <th scope="col">Surname</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Payment Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {this.state.users.map((user)=>{
              return(
                <Row user={user} deleteStudent={this.deleteStudent} />
              )
              })}
            </tbody>
            </table>
  </div>
</div>
  </div>
  </>
}
}
