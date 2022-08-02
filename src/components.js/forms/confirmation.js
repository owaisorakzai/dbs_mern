import React from 'react';
import {FormProvider, useForm } from 'react-hook-form';
import Form from './form-reusable';
import './forms.css'
export default function ConfirmationPage({onSubmit,handleChange}) {
  const methods=useForm()
  const privacy={
      name: 'privacy',
      title:'Privacy Declaration',
      options:['No','Yes'],
      change: handleChange,
      type:'select',
      require:true

  }
  const privacy2={
    name: 'privacy2',
    title:'Consent to Obtain Basic Check Electronic Result',
    options:['No','Yes'],
    change: handleChange,
    type:'select',
    require:true

}
const privacy3={
    name: 'privacy3',
    title:'Declaration By Applicant',
    options:['No','Yes'],
    change: handleChange,
    type:'select',
    require:true

}
return <div class="container card align middle review">
<div class="card-body">
    <p>
    <b><u>Privacy Policy - basics check declaration</u></b><br/>
I have read the Basic DBS Check Processing Privacy Policy<br/>
<a href="https://www.gov.uk/government/publications/dbs-privacy-policies">https://www.gov.uk/government/publications/dbs-privacy-policies</a><br/> and I
understand how DBS will process my personal data
    </p>
    <p>
    <b><u>Consent to obtain basic check electronic result</u></b><br/>
    I consent to the DBS providing an electronic result directly to the
responsible organisation that has submitted my application. I
understand that an electronic result contains a message that indicates
either the certificate does not contain criminal record information or to
await certificate which will indicate that my certificate contains
criminal record information. 
    </p>
    <p>
    <b><u>Declaration By Applicant</u></b><br/>
    I have provided complete and true information in support of the
application and I understand that knowingly making a false statement
for this purpose is a criminal offence.  
    </p>
    <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)}>
    <div class="form-group form-check">
     <div className='row'>
         <div className='col'>
         <Form input={privacy}/>

         </div>
         <div className='col'>
         <Form input={privacy2}/>
          </div>
          <div className='col'>
          <Form input={privacy3}/>
             
          </div>
     </div>
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
