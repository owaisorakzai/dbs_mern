import React from 'react';
import {FormProvider, useForm } from 'react-hook-form';
import Form from './form-reusable';

export default function ConfirmationPage3({onSubmit,handleChange}) {
    const methods=useForm()
    const dec_applicant={
        name: 'dec_applicant',
        title:'Declaration By Applicant (M)',
        options:['No','Yes'],
        change: handleChange,
        type:'select',
        require:true

    }
  return <div class="container card align middle review">
  <div class="card-body">
      <p><strong>* Please Read:</strong></p>

      <p><strong> REVIEW ALL INFORMATION</strong></p>

      <p><small>Please ensure that the information you have provided is accurate and error free.</small></p>

      <p><small>Pin the next step you will be required to confirm the accuracy of this information by providing an electronic signature.</small></p>
      <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
      <div class="form-group form-check">
      <Form input={dec_applicant}/>
      <br />
      <br />
      <br />

      <button type="submit" class="btn btn-primary">Submit</button>
      </div>
      </form>
      </FormProvider>
  </div>
  </div>;
}
