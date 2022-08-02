import React from 'react'
import Form from './form-reusable'
import { FormProvider, useForm } from 'react-hook-form';

export default function AdditionalInfo({license_num,passport_num,insurance_num,handleChange,onSubmit}) {
    const methods=useForm();
    const insurance_number={
        name: 'insurance_num',
        title:'Do you have National Insurance Number?',
        options:['No','Yes'],
        type:'select',
        change: handleChange,
        require:true

    }
    const license_number={
        name: 'license_number',
        title:'Do you have License number?',
        options:['No','Yes'],
        change: handleChange,
        type:'select',
        require:true

    }
    const passport_number={
        name: 'passport_number',
        title:'Do you have Passport number?',
        options:['No','Yes'],
        change: handleChange,
        type:'select',
        require:true

    }
    const identity_verified={
        name: 'identity_verified',
        title:'Identity Verified?',
        options:['No','Yes'],
        change: handleChange,
        type:'select',
        require:true

    }
    const paper_certificate={
        name: 'paper_certificate',
        title:'Recieve Paper Certificate',
        options:['No','Yes'],
        change: handleChange,
        type:'select',
        require:true

    }
    const dbs_profile_available={
        name: 'dbs_profile_available',
        title:'DBS Profile Available',
        options:['No','Yes'],
        change: handleChange,
        type:'select',
        require:true

    }
    const paper_certificate_address={
        name: 'paper_certificate_address',
        title:'Recieve Paper Certificate at Current Address',
        options:['No','Yes'],
        change: handleChange,
        type:'select',
        require:true

    }
    const consent_ro={
        name: 'consent_ro',
        title:'Is Consent Provided to RO?',
        options:['No','Yes'],
        change: handleChange,
        type:'select',
        require:true

    }
    const check_purpose={
        name: 'check_purpose',
        title:'Purpose of Check: ',
        options:['Personal Interest','Employment','Other'],
        change: handleChange,
        type:'select',
        require:true

    }
    const emp_sector={
        name: 'emp_sector',
        title:'Employement Sector: ',
        options:['LOCAL GOVERNMENT','CENTRAL GOVERNMENT','PUBLIC SECTOR- OTHER','NHS','PRESCHOOL EDUCATION','PRIMARY EDUCATION','SECONDARY EDUCATION','ACADEMY EDUCATION','FURTHER EDUCATION','HIGHER EDUCATION','INDEPENDENT EDUCATION','VOLUNTARY/CHARITY','PRIVATE HEALTHCARE','AGRICULTURE, FORESTRY AND FISHING','MINING AND QUARRYING','MANUFACTURING','RETAIL','ENERGY AND AIR CONDITIONING','WATER AND WASTE MANAGEMENT','CONSTRUCTION','TRADE OR REPAIR OF VEHICLES','TRANSPORTATION AND STORAGE','ACCOMMODATION AND FOOD SERVICE','INFORMATION AND COMMUNICATION','FINANCIAL AND INSURANCE','REAL ESTATE ACTIVITIES','PROFESSIONAL, TECHNICAL','ADMINISTRATIVE AND SUPPORT','SOCIAL CARE','ARTS AND ENTERTAINMENT','LEISURE, SPORT AND TOURISM','FOSTER/ADOPTION','CHILD CARE','DRIVERS','LAW ENFORCEMENT AND SECURITY','RECRUITMENT AND HR'],
        change: handleChange,
        type:'select',
        require:true

    }
    const position_applied={
        title: 'Position Applied For:',
        placholder: 'Enter position',
        name: 'position_applied',
        maxCharacters:60,
        pattern:/^[a-zA-Z]+$/,
        type:'text',
        change: handleChange,
        require:true
    }
    const emp_name={
        title: 'Employer Name:',
        placholder: 'Enter name',
        name: 'emp_name',
        maxCharacters:60,
        pattern:/^[a-zA-Z]+$/,
        type:'text',
        change: handleChange,
        require:true
    }
    const input_insurance={
        title: 'Insurance Number:',
        placholder: 'Enter insurance number',
        name: 'insurance_number_input',
        type:'text',
        pattern:/^(?!BG)(?!GB)(?!NK)(?!KN)(?!TN)(?!NT)(?!ZZ)(?:[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z])(?:\s*\d\s*){6}([A-D]|\s)$/,
        change: handleChange,
        require:true
    }
    const input_license={
        title: 'License Number:',
        placholder: 'Enter license number',
        name: 'license_number_input',
        maxCharacters:18,
        type:'text',
        change: handleChange,
        pattern: /^[A-Z9]{5}\d{6}[A-Z9]{2}\d{2}[A-Z]{2}$/,
        require:true
    }
    const input_passport={
        title: 'Passport Number:',
        placholder: 'Enter passport number',
        name: 'passport_number_input',
        maxCharacters:11,
        pattern:/^[0-9]/,
        type:'text',
        change: handleChange,
        require:true
    }
    const passport_country={
        name: 'passport_country',
        title:'Country of Birth:',
        options: ["Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Virgin Islands","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Hong Kong, Special Administrative Region of China","Macao, Special Administrative Region of China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo (Brazzaville)","Congo, Democratic Republic of the","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guinea","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Heard Island and Mcdonald Islands","Holy See (Vatican City State)","Honduras","Hungary","Iceland","India","Indonesia","Iran, Islamic Republic of","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribat","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait","Kyrgyzstan","Lao PDR","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Myanmar","Mayotte","Mexico","Micronesia, Federated States of","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Island","Norway","Oman","Pakistan","Palau","Palestinian Territory, Occupied","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcaim","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint-Barthélemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint-Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syria Arab Republic(Syria)","Taiwan","Tajikistan","Tanzania United Republic of","Thailand","Timor L'Este","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuata","Venezuela (Bolivarian Republic of)","Vietnam","Virgin Islands (US)","Wallis and Futuna Islands","Western Sahara","Yemen","Zambia","Zimbabwe"],
        type:'select',
        change: handleChange,
        require:true

    }
    const evidence_checked={
        title: 'Evidence Checked By:',
        placholder: 'Enter name',
        name: 'evidence_checked',
        maxCharacters:60,
        pattern:/^[a-z A-Z]+$/,
        type:'text',
        change: handleChange,
        require:true
    }
  return (<FormProvider {...methods} >
    <form className='container' id='form-personal' onSubmit={methods.handleSubmit(onSubmit)}>
            <div className='row'>
            <div className='col-xs-12 col-sm-6 col-lg-4'>
            <Form input={insurance_number}/>
            {insurance_num.insurance==1 ? (
                <Form input={input_insurance} />
            ):null}
            <br></br>
            <Form input={identity_verified}/>
            <br></br>
            <Form input={consent_ro}/>
            <br></br>
            <Form input={position_applied}/>
            <br></br>
            <Form input={dbs_profile_available}/>


            </div>
            <div className='col-xs-12 col-sm-6 col-lg-4'>
            <Form input={license_number}/>
            {license_num.license==1 ? (
            <Form input={input_license}/>
            ):null}
            <br></br>
            <Form input={paper_certificate}/>
            <br></br>
            <Form input={check_purpose}/>
            <br></br>
            <Form input={emp_name}/>
            </div>


            <div className='col-xs-12 col-sm-6 col-lg-4'>
            <Form input={passport_number}/>
            {passport_num.passport==1 ? (
                <Form input={input_passport}/>
            ):null}
            {passport_num.passport==1 ? (
                <Form input={passport_country}/>
            ):null}
            <br></br>
            <Form input={paper_certificate_address}/>
            <br></br>
            <Form input={emp_sector}/>
            <br></br>
            <Form input={evidence_checked}/>

            </div>
            </div>
            <div className='d-flex justify-content-end'>
                <button className='btn btn-primary btn-sm '  type='submit'>Next</button>
            </div>
    </form>
  </FormProvider>
  )
}
