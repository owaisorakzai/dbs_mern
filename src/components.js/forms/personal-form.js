import React from 'react';
import Form from './form-reusable';
import { useForm, FormProvider } from "react-hook-form";
import './forms.css'


export default function PersonalForm({onSubmit,handleChange,data,dobValidate}) {
    const methods = useForm();
    const forename={
        title: 'Forename:',
        placholder: 'Enter forename',
        name: 'forename',
        type:'text',
        require:true,
        pattern:/^[a-zA-Z]+$/,
        maxCharacters:60,
        change: handleChange,


    }
    const dob={
        name: 'dob',
        title: 'Date of Birth: ',
        placholder: 'Date of Birth: ',
        type:'date',
        address:dobValidate,
        change: handleChange,
        require:true

    }
    const gender={
        name: 'gender',
        title:'Gender',
        options:['Male','Female'],
        type:'select',
        require:true,
        change: handleChange,


    }
    const title={
        name: 'title',
        title:'Title',
        options:['Mr','Mrs','Miss','Ms','Mx','Baron','Baroness','Brigadier','Canon','Captain','Doctor','Duchess','Duke','Esquire','Father','Honorable','Inspector','Lady','Lord','Lt Colonel','Major','Most Reverend','Pastor','Professor','Rabbi','Rev Doctor','Reverend','Rt Reverend','Sir','Sister','Squadron Leader','Wing Commander'],
        type:'select',
        require:true,
        change: handleChange,

    }
    const nationality={
        name: 'birth_nationality',
        title:'Birth Nationality',
        options:["British","Afghan","Albanian","Algerian","American","Andorran","Angolan","Armenian","Austrian","Azerbaijani","Argentinian","Australian","Bahraini","Bangladeshi","Barbadian","Belarusian","Belizean",
        "Beninese","Bermudian","Bhutanese","Bolivian","Bosnian","Botswanan","Bulgarian","Burkinese","Burundian","Canadian","Chinese","Colombian","Cuban","Cambodian","Cameroonian","Cape Verdean","Chadian","Chilean","Congolese","Costa Rican","Croat","Cypriot","Czech","Danish","Dominican","Djiboutian","Dominican",
        "Dutch","Ecuadorean", "Egyptian","Eritrean","Estonian","Ethiopian","Fijian","Finnish","French Polynesian","French","Gabonese","Gambian","Georgian","German","Guatemalan",
        "Ghanaian","Greek","Grenadian","Guinean","Guyanese","Haitian","Honduran","Hungarian","Indian","Ireland","Israeli","Italian","Icelandic","Indonesian","Iranian","Iraqi","Japanese",
        "Jamaican","Jordanian","Kazakh","Kenyan","North Korean","Kuwaiti","Latvian","Lebanese","Liberian","Libyan","Lithuanian","LUXEMBOURG","Madagascan","Malawian","Malaysian",
        "Maldivian","Malian","Maltese","Mauritanian","Mauritian","Monacan","Mongolian","Montenegrin","Moroccan","Mozambican","Mexican","Namibian","Nepalese","New Zealand","Nicaraguan",
        "Nigerien","Nigerian","Norwegian","Omani","Pakistani","Panamanian","Guinean","Paraguayan","Peruvian","Philippine","Polish","Portuguese","Qatari","Romanian","Rwandan",
        "Salvadorean","Samoan","Saudi Arabian","Senegalese","Serbian","Sierra Leonian","Singaporean","Slovak","Slovenian","Slomoni",
        "Somali","South African","South Korean","Spanish","Swedish","Swiss","Sri Lankan","Sudanese","Surinamese","Swazi","Taiwanese","Tajik","Thai","Togolese","Trinidadian","Tunisian","Turkish","Turkoman","Tuvaluan","Ugandan","Ukrainian","Emirati","Venezuelan","Vietnamese","Uruguayan","Uzbek","Vanuatuan","Yemeni","Zambian"
    ],
        type:'select',
        change: handleChange,

    }
    const country_of_birth={
        title: 'Country of Birth:',
        placholder: 'Enter country of birth',
        name: 'country_birth',
        type:'text',
        require:true,
        change: handleChange,

    }
    const email={
        title: 'Email:',
        placholder: "Enter email",
        name: 'email',
        type:'email',
        smallText:'We will use this email address to update you on the progress of your application',
        require:true,
        change: handleChange,

    }
    const middle_name={
        title: 'Middle Name 1:',
        placholder: 'Enter middle name 1',
        name: 'Middle_Name_1',
        change: handleChange,
        pattern:/^[a-zA-Z]+$/,
        type:'text',
        require:false
        }    
    const middle_name2={
        title: 'Middle Name 2:',
        placholder: 'Enter middle name 2',
        name: 'Middle_Name_2',
        pattern:/^[a-zA-Z]+$/,
        type:'text',
        change: handleChange,
        require:false
    }    
    const middle_name3={
        title: 'Middle Name 3:',
        placholder: 'Enter middle name 3',
        name: 'Middle_Name_3',
        pattern:/^[a-zA-Z]+$/,
        change: handleChange,
        type:'text',
        require:false
    }
    const sur_name={
        title: 'Sur Name:',
        placholder: 'Enter sur name',
        name: 'sur_name',
        change: handleChange,
        pattern:/^[a-zA-Z]+$/,
        maxCharacters:50,
        type:'text',
        require:true
    }
    const country_of_birth_select={
        name: 'Country_of_Birth',
        title:'Country of Birth:',
        options: ["Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Virgin Islands","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Hong Kong, Special Administrative Region of China","Macao, Special Administrative Region of China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo (Brazzaville)","Congo, Democratic Republic of the","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guinea","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Heard Island and Mcdonald Islands","Holy See (Vatican City State)","Honduras","Hungary","Iceland","India","Indonesia","Iran, Islamic Republic of","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribat","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait","Kyrgyzstan","Lao PDR","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Myanmar","Mayotte","Mexico","Micronesia, Federated States of","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Island","Norway","Oman","Pakistan","Palau","Palestinian Territory, Occupied","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcaim","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint-Barthélemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint-Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syria Arab Republic(Syria)","Taiwan","Tajikistan","Tanzania United Republic of","Thailand","Timor L'Este","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuata","Venezuela (Bolivarian Republic of)","Vietnam","Virgin Islands (US)","Wallis and Futuna Islands","Western Sahara","Yemen","Zambia","Zimbabwe"],
        type:'select',
        change: handleChange,
        require:true

    }
    const town_of_Birth={
        title: 'Town of Birth:',
        placholder: 'Enter town of birth',
        name: 'town_of_birth',
        type:'text',
        maxCharacters:30,
        change: handleChange,
        require:true
    }
    const phone_number={
        title: 'Mobile Phone Number:',
        placholder: 'Enter phone number',
        name: 'phone_number',
        change: handleChange,
        smallText:'Please provide a UK Mobile Phone number if you wish to be kept up to date on your application progress via SMS',
        type:'text',
        require:false
    }

  return (
    <FormProvider {...methods}>
    <form className='container' id='form-personal' onSubmit={methods.handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-xs-12 col-sm-6 col-lg-4'>
                <Form input={title} />
                <br></br>
                <Form input={forename} data={data.forename} />
                <br></br>
                <Form input={middle_name} data={data.Middle_Name_1} />
                <br></br>
                <Form input={middle_name2} data={data.Middle_Name_2}  />
                <br></br>
                <Form input={middle_name3} data={data.Middle_Name_3}  />
                <br></br>
                <Form input={sur_name} data={data.sur_name} />
                
            </div>
            <div className='col-xs-12 col-sm-6 col-lg-4'>
                <Form input={dob} data={data.dob} />
                <br></br>
                <Form input={nationality} data={data.nationality} />
                <br></br>
                <Form input={country_of_birth} data={data.country_birth}  />
                <br></br>
                <Form input={country_of_birth_select} data={data.Country_of_Birth} />
                <br></br>
                <Form input={town_of_Birth} data={data.town_of_birth} />

            </div>
            <div className='col-xs-12 col-sm-6 col-lg-4 '>
            <Form input={gender} data={data.gender} />
            <br></br>
            <Form input={email} data={data.email} />
            <br></br>
            <Form input={phone_number} data={data.phone_number} />
            <br/>
            <div className='d-flex justify-content-end'>
            <button className='btn btn-primary btn-sm '  type='submit'>Next</button>
            </div>
            </div>
            </div>
      </form>
    </FormProvider>
  
      
  );


}