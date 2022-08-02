import Nav from '../nav'
import axios from 'axios';
import React, {Component } from 'react';
import Filter from './filter';
import NewParter from '../components/newParter';


export default class Stats extends Component {
  constructor(props) {
    super(props)
    this.array1=["createdAt","Name","Surname","Phone Number","Email","Address","Status"]
    this.state={
      users:[],
      users2:[],
      partners:[],
      sDate:"",
      eDate: Date.now(),
      collection:[]
    }
  } 
  onDateChange=(event)=>{

    this.setState({[event.target.name]:event.target.value},()=>{
      let array=[]
      this.state.users2.map((user)=>{
        if(new Date(user.createdAt)>=new Date(this.state.sDate) && new Date(user.createdAt)<=new Date(this.state.eDate)){
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
      if(resp.data.decoded.role!="Admin"){
        window.location='/dashboard'}
      else{
        axios.get('http://localhost:4242/users/')
        .then(res => {
          this.setState({
            users:res.data,
            users2:res.data

          });
        })
        .catch((error) => {
          console.log(error);
        })
        axios.get('http://localhost:4242/partners/')
        .then(res => {
          this.setState({
            partners:res.data
          });
          console.log(this.state.partners)
        })
        .catch((error) => {
          console.log(error);
        })
        this.state.partners.forEach((partner)=>{
          let unpaid=this.state.users.filter(user=>{
            return(
              partner._id==user.lead,
              user.payment=="Unpaid"
            )

          }).length
          let paid=this.state.users.filter(user=>{
            return(
              partner._id==user.lead,
              user.payment=="Paid"
            )

          }).length
          let temp={
            name:partner.name,
            unpaid:unpaid,
            paid:paid,
            total:paid+unpaid
          }
          this.setState({
            collection:temp
          })
        })
      }

    }
    
    )

      
  }
  partnerName(partner){
        return partner.name
  }
  paidCount(partner){
    return(
      this.state.users.filter((user)=>{
        return(
        user.lead==partner._id &&
        user.status=='Paid')
      }).length
    )}
  unpaidCount(partner){
    return Number(
      this.state.users.filter((user)=>{
        return(
        user.lead==partner._id &&
        user.status=='Unpaid')
      }).length
    )}
    total(partner){
        const paid=this.state.users.filter((user)=>{
          return Number(
          user.lead==partner._id &&
          user.status=='Paid'
          )
        }).length
        const unpaid=this.state.users.filter((user)=>{
          return(
          user.lead==partner._id &&
          user.status=='Unpaid'
          )
        }).length
        return Number(paid+unpaid)

    }
 render(){
  
  return (
    <>
      <div className='bg-gray-100' style={{height:'100vh'}}>
      <Nav/>
      <div className='container'>
        <div className='row' style={{paddingTop:'40px', paddingBottom:'30px'}}>
        <h1 style={{paddingBottom:'10px'}}>Stats</h1>
        <NewParter />

        </div>
        <Filter sDate={this.state.sDate} eDate={this.state.eDate}  onDateChange={this.onDateChange} />
        <h6 style={{width:'5%', textAlign:'center', padding:'5px', borderRadius:'4px'}} className='text-white bg-indigo-600 bg-[length:100px_100px]'>SALES</h6>
        <br/>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Partner Name</th>
                <th scope="col">Paid Order</th>
                <th scope="col">Unpaid Order</th>
                <th scope="col">Total Order</th>
              </tr>
            </thead>
            <tbody>
            {this.state.partners.map((partner)=>{
              return(
              <tr>
                <td>
                {this.partnerName(partner)}
                </td>
                <td>
                {this.paidCount(partner)}
                </td>
                <td>
                {this.unpaidCount(partner)}
                </td>
                <td>
                {this.total(partner)}
                </td>
              </tr>
              )
              })}
            </tbody>
            </table>
            <div className='row'>
              <div className='col'>
              <h6 style={{width:'22%', textAlign:'center', padding:'5px', borderRadius:'4px'}} className='text-white bg-indigo-600 bg-[length:100px_100px]'>PAYMENT LINKS</h6>
        <br/>

        <table class="table table-bordered">
            <thead>
              <tr>

                <th scope="col">Partner Name</th>
                <th scope="col">Paid Order</th>
                <th scope="col">Total Order</th>
                <th scope="col">Conversion</th>

              </tr>
            </thead>
            <tbody>
            {this.state.partners.map((partner)=>{
              return(
              <tr>
                <td>
                {this.partnerName(partner)}
                </td>
                <td>
                {this.paidCount(partner)}
                </td>
                <td>
                {this.total(partner)}
                </td>
                <td>
                {((this.paidCount(partner)*100)/this.total(partner)||0)}
                %
                </td>
              </tr>
              )
              })}
            </tbody>
            </table>

              </div>
              <div className='col'>
              <h6 style={{width:'21%', textAlign:'center', padding:'5px', borderRadius:'4px'}} className='text-white bg-indigo-600 bg-[length:100px_100px]'>LEADS CHASED</h6>
        <br/>

          <table class="table table-bordered">
            <thead>
              <tr>

                <th scope="col">Partner Name</th>
                <th scope="col">Paid Order</th>
                <th scope="col">Total Order</th>
                <th scope="col">Conversion</th>

              </tr>
            </thead>
            <tbody>
            {this.state.partners.map((partner)=>{
              return(
              <tr>
                <td>
                {this.partnerName(partner)}
                </td>
                <td>
                {this.paidCount(partner)}
                </td>
                <td>
                {this.total(partner)}
                </td>
                <td>
                {((this.paidCount(partner)*100)/this.total(partner)||0)}
                %
                </td>
              </tr>
              )
              })}
            </tbody>
            </table>

              </div>

            </div>
      </div>
      </div>
</>
  )
}
}
