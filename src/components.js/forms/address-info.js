import React from 'react';
import Form from './form-reusable';
import { FormProvider,useForm } from 'react-hook-form';

export default function AddressInfo({onSubmit,handleChange,prevStep}) {
    const methods = useForm();
    const postcode={
        title: 'Current Address Postcode:',
        placholder: 'Enter postcode: ',
        name: 'post',
        type:'text',
        require:false,
        change: handleChange,

    }
  return <FormProvider {...methods}>
  <form className='container' id='form-personal' onSubmit={methods.handleSubmit(onSubmit)}>
        <div className='row'>
          <div className='col-xs-12 col-sm-6 col-lg-4'>
              <Form input={postcode} />
          </div>
          <div className='col-xs-12 col-sm-6 col-lg-4'>
              <small>*Please enter a UK postcode and click 'Lookup Postcode', if no UK postcode is available or the address does not appear in the list please click 'Manual Entry' and enter all details .</small>
              <small><strong>Please use 'Manual Address Entry' for non-UK addresses</strong></small>
              <br/>
              <div className='d-flex justify-content-start'>
                <button className='btn btn-primary btn-sm '  type='submit'>Manual Address Entry</button>
              </div>
          </div>
          <div className='col-xs-12 col-sm-6 col-lg-4 '>

          <br/>

          </div>
          </div>
    </form>
  </FormProvider>
}
