import React, { useEffect, useState } from 'react';
import AdditionalName from './additional-name';
import PersonalForm from './personal-form';
import PersonalHistory from './personal-history';
import './forms.css'
import AddressInfo from './address-info';
import AddressEntry from './address-entry';
import ReviewPage from './review-page';
import Step1 from './step-1';
import Step2 from './step-2';
import Step3 from './step-3';
import Step4 from './step-4';
import Confirmation from './confirm';
import ConfirmationPage from './confirmation';
import Step5 from './step-5';
import Payment from './payment';
import Step6 from './step-6';
import AddressPresent from './address_present';
import axios from 'axios';

export default function MultiForm() {
    localStorage.setItem("middle",false)
    const [newNationality,setNewNationality]=useState(0)
    const [surChanged,setSurChanged]=useState(0)
    const [step, setStep] = useState(1);
    const [years,setYears]=useState(0)
    const [addressyears,setAddressYears]=useState(0)
    const[values,setValues]=useState({
        forename:"",
        dob:"",
        gender:"",
        title:"",
        nationality:"",
        country_birth:"",
        email:"",
        Middle_Name_1:"",
        Middle_Name_2:"",
        Middle_Name_3:"",
        sur_name:"",
        Country_of_Birth:"",
        town_of_birth:"",
        phone_number:"",
        birth_changed_nationality:"",
        sur_changed:"",
        other_names:"",
        new_nationality:"",
        current_address_country:"",
        status:"Unpaid",
        application_for:"DBS Check Standard",
        other_names_entry:[],
        manual_address:[],
        payment:"Online",
        lead:"6260c34733df38b76a02cab9"

    })
    const addressValidate=(val)=>{
        let date=new Date(val)
        if(date.getFullYear()<1900 || date.getTime()>new Date().getTime() || date.getTime()<new Date(values.dob).getTime()){
            return false
        }
        let d2=new Date()
        if(d2.getFullYear()-date.getFullYear()<5){
            return false
        }
        return true

    }
    const stepReview =()=>{
        setStep(1);
    }
    const handleChange=(e)=>{
        setValues({...values, [e.target.name]: e.target.value})
        if(e.target.name=='birth_nationality' && e.target.value!='British'){
            alert('Please note that your birth country and nationality is not same')
        }

        if(values.Middle_Name_1==="" && values.Middle_Name_2==="" && values.Middle_Name_3=="" && localStorage.getItem('middle')=='false' && e.target.name=='sur_name'){
            alert("Please ensure you provide any middle name(s), in the fields provided, if you have them. Failure to provide these extra details WILL delay your certificate.")
            localStorage.setItem('middle',true)
        }

    }
    const handleAddress=(event)=>{
        if(event.target.name=='country_address_country' && event.target.value!='United Kingdom' && document.getElementsByName('current_address_county')[0].value==''){
            alert('County is required for non UK address')
        }
    }
    const handlePersonalHistory=(event)=>{
        setValues({...values, [event.target.name]: event.target.value})
        if(event.target.value=='Yes' && event.target.name=='birth_changed_nationality'){
            setNewNationality({...newNationality,newNationality:1 })
        }

        else if(event.target.value=='No' && event.target.name=='birth_changed_nationality'){
            setNewNationality({...newNationality,newNationality:0 })
        }
        else if(event.target.value=='Yes' && event.target.name=='sur_changed'){
            setSurChanged({...surChanged,surChanged:1 })
        }
        else if(event.target.value=='No' && event.target.name=='sur_changed'){
            setSurChanged({...surChanged,surChanged:0 })
        }

    }
    const personalHistorySubmit=(data)=>{
        console.log(values)
        if(data.other_names=='No'){
            setStep(step+2)
        }
        else if(data.other_names=='Yes'){
            setStep(step+1)
        }

    }
    const manualAddres=()=>{
        setStep(step+1)
    }
    const handleNames=(event)=>{

    }
    const onSubmitNames = (vals) =>{
        let temp_years=0

        values.other_names_entry.map((items)=>{
            temp_years= temp_years+(items.to_year-items.from_year)
        })
        temp_years= years+(vals.to_year-vals.from_year)
        setYears(temp_years)
        setValues({...values,other_names_entry:[...values.other_names_entry,vals]})
        if(vals.other_names=='No' && years>4){
            setStep(step+1)
        }

    }
    const onSubmitAddress = (vals) =>{
        let temp_years=0
        values.manual_address.map((items)=>{
            temp_years= temp_years+(items.to_year_current_address-items.from_year_current_address)
        })
        temp_years= addressyears+(vals.to_year_current_address-vals.from_year_current_address)
        setAddressYears(temp_years)
        setValues({...values,manual_address:[...values.manual_address,vals]})
        if(temp_years>4){
            setStep(step+1)
        }
        console.log(step)

    }
    const dob_validate=(val)=>{
        let today=new Date().getFullYear()
        let dob=new Date(val).getFullYear()
        if((today-dob)<16 || (today-dob)>109 || dob>today){
            return false
        }
        return true
    }
    const onSubmitPresentAddress = (vals) =>{
        let temp_years=0
        let date=new Date(vals.from_address_present)
        vals.from_address_present=date
        temp_years= (2022-date.getFullYear())
        setAddressYears(temp_years)
        setValues({...values,manual_address:[...values.manual_address,vals]})
        if(temp_years>4){
            setStep(step+2)
        }
        else if(temp_years<5){
            setStep(step+1)
        }

    }
    const onSubmitReview=()=>{
        const note=[{
            title:"Registration Time",
            time: Date.now()
        }]
        const temp_details={
            ...values,
            notes:note
        }
        axios.post('http://localhost:4242/store',temp_details);
        setStep(step + 1);

    }
    const confirmSubmit=(val)=>{
        if(val.privacy=='No'){
            alert('You have to select yes to go forward')
        }
        else if(val.privacy2=='No'){
            alert('You have to select yes to go forward')

        }
        else if(val.privacy3=='No'){
            alert('You have to select yes to go forward')

        }
        else{
            setStep(step + 1);


        }

    }

    const onSubmitPersonal = (data) =>{
        setValues({...values,
            forename:data.forename,
            dob:data.dob,
            gender:data.gender,
            nationality:data.birth_nationality,
            Middle_Name_1:data.Middle_Name_1,
            Middle_Name_2:data.Middle_Name_2,
            Middle_Name_3:data.Middle_Name_3,
            country_birth:data.country_birth,
            title:data.title,
            Country_of_Birth:data.Country_of_Birth,
            email:data.email,
            town_of_birth:data.town_of_birth,
            phone_number:data.phone_number
        })        
        if (step < 10) {
            setStep(step + 1);
          } 
    }
    const prevStep = () => {

      if (step > 1) {
        setStep(step - 1);
      }
    };
    if(step==8){


    }
    const render=()=>{
        switch (step) {
            case 1:
            return (
                <div>
                <Step1 />
                <PersonalForm onSubmit={onSubmitPersonal} dobValidate={dob_validate} data={values} handleChange={handleChange}/>
                </div>)
                break;
            case 2:
            return(
                <div>
                <Step2 />
                <PersonalHistory  onSubmit={personalHistorySubmit} handleChange={handlePersonalHistory} surChanged={surChanged} nationality={newNationality} prevStep={prevStep}/>
                </div>)
                break;
            case 3:
                return(
                <div>
                <Step2 />
                <AdditionalName years={years}  onSubmit={onSubmitNames} handleChange={handleAddress} prevStep={prevStep}/>
                </div>
                )
            case 4:
                return(
                    <div>
                        <Step3 />
                    <AddressInfo years={years}  onSubmit={manualAddres} handleChange={handleNames} prevStep={prevStep}/>
                    </div>
                )
            case 5:
                return(
                    <div>
                    <Step3 />
                    <AddressPresent years={addressyears} addressValidate={addressValidate} onSubmit={onSubmitPresentAddress} handleChange={handleAddress} prevStep={prevStep}/>
                </div>
                )
            case 6:
                return(
                    <div>
                    <Step3 />
                <AddressEntry years={addressyears} addressValidate={addressValidate}  onSubmit={onSubmitAddress} handleChange={handleAddress} prevStep={prevStep}/>
                </div>
                )
            case 7:
                return(
                <div>
                <Step4/>
                <ReviewPage data={values} step={stepReview} onSubmit={onSubmitReview} prevStep={prevStep}/>
                </div>
                )
            case 8:
                return(
                <div>
                <Step5/>
                <ConfirmationPage data={values}  onSubmit={confirmSubmit} prevStep={prevStep}/>
                </div>
                    )
            case 9:
                return(
                <div>
                <Step6/>
                <Payment data={values}  onSubmit={onSubmitReview} prevStep={prevStep}/>
                </div>
                    )
            default:
                break;
        }
    }


  return (
      <div id='background'>
        <h1 className='space'></h1>
        <div class="container card align middle">
            <div class="card-body">
                {render()}
            </div>
        </div>
    </div>
  )
}
