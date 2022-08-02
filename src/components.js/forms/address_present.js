import React from 'react'
import Form from './form-reusable';
import { FormProvider,useForm } from 'react-hook-form';
export default function AddressPresent({onSubmit,handleChange,years,addressValidate}) {
    const methods=useForm()
    const current_address_line1={
        title: 'Current Address Line 1:',
        placholder: 'Enter current address line 1: ',
        name: 'current_address_line1',
        type:'text',
        pattern:/^[a-z0-9 ]+$/i,
        maxCharacters:60,
        require:true,
        change: handleChange,
    }
    const current_address_line2={
        title: 'Current Address Line 2:',
        placholder: 'Enter current address line 2: ',
        name: 'current_address_line2',
        type:'text',
        pattern:/^[a-z0-9 ]+$/i,
        maxCharacters:60,
        require:false,
        change: handleChange,
    }
    const current_address_town={
        title: 'Current Address Town:',
        placholder: 'Enter current address town: ',
        name: 'current_address_town',
        type:'text',
        pattern:/^[a-zA-Z0-9]+$/,
        maxCharacters:30,
        require:true,
        change: handleChange,
    }
    const current_address_county={
        title: 'Current Address County:',
        placholder: 'Enter current address county: ',
        name: 'current_address_county',
        type:'text',
        maxCharacters:30,
        require:false,
        change: handleChange,
    }
    const current_address_country={
        name: 'country_address_country',
        title:'Current Address Country:',
        placholder:'Enter current address country',
        options: ["Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Virgin Islands","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Hong Kong, Special Administrative Region of China","Macao, Special Administrative Region of China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo (Brazzaville)","Congo, Democratic Republic of the","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guinea","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Heard Island and Mcdonald Islands","Holy See (Vatican City State)","Honduras","Hungary","Iceland","India","Indonesia","Iran, Islamic Republic of","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribat","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait","Kyrgyzstan","Lao PDR","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Myanmar","Mayotte","Mexico","Micronesia, Federated States of","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Island","Norway","Oman","Pakistan","Palau","Palestinian Territory, Occupied","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcaim","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint-Barthélemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint-Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syria Arab Republic(Syria)","Taiwan","Tajikistan","Tanzania United Republic of","Thailand","Timor L'Este","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuata","Venezuela (Bolivarian Republic of)","Vietnam","Virgin Islands (US)","Wallis and Futuna Islands","Western Sahara","Yemen","Zambia","Zimbabwe"],
        type:'select',
        change: handleChange,
        require:true
    }
    const current_address_postcode={
        title: 'Current Address Post Code:',
        placholder: 'Enter current address post code: ',
        name: 'current_address_postcode',
        type:'text',
        require:true,
        change: handleChange,
    }
    const from_address_present={
        name: 'from_address_present',
        title: 'Resident From: ',
        address: addressValidate,
        placholder: 'Enter date: ',
        type:'date',
        change: handleChange,
        require:true
    }
    const from_month_current_address={
        title: 'Current Address From Month:',
        name: 'from_month_current_address',
        type:'select',
        address:addressValidate,
        options:["January","February","March","April","May","June","July","August","September","October","November","December"],
        change: handleChange,
        require:true
    }
    const from_year_current_address={
        title: 'Current Address From Year: ',
        address:addressValidate,
        name: 'from_year_current_address',
        type:'select',
        options:[2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984,1983,1982,1981,1980,1979,1978,1977,1976,1975,1974,1973,1972,1971,1970,1969,1968,1967,1966,1965,1964,1963,1962,1961,1960,1959,1958,1957,1956,1955,1954,1953,1952,1951,1950,1949,1948,1947,1946,1945,1944,1943,1942,1941,1940,1939,1938,1937,1936,1935,1934,1933,1932,1931,1930,1929,1928,1927,1926,1925,1924,1923,1922],
        change: handleChange,
        require:true
    }
    return(
    <FormProvider {...methods}>
  <form className='container' id='form-personal' onSubmit={methods.handleSubmit(onSubmit)}>
      {years>0 ?(
          <div class="alert alert-primary" role="alert">
          Address added successfuly <br/>
          You have entered {years} year history
        </div>
      ):null}
        <div className='row'>
          <div className='col-xs-12 col-sm-6 col-lg-4'>
              <Form input={current_address_line1} />
              <br></br>
              <Form input={current_address_line2} />
              <br></br>
              <Form input={current_address_town} />
              <br></br>
              <Form input={current_address_county} />
              <br></br>
              <Form input={current_address_country} />
              <br></br>
              <Form input={current_address_postcode} />
              
          </div>
          <div className='col-xs-12 col-sm-6 col-lg-4 '>
          <div className='row'>
              <Form input={from_address_present}/>
            </div>

          </div>
          <div className='col-xs-12 col-sm-6 col-lg-4 '>
          <small>A full 5 year address history is required. If necessary, additional details will be required on the next page.</small>
          <br/>
          <div className='d-flex justify-content-end'>
          <button className='btn btn-primary btn-sm '  type='submit'>Next</button>
          </div>

          </div>
          </div>
    </form>
  </FormProvider>
    )
}
