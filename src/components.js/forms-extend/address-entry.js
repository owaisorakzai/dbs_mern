import React from 'react';
import Form from './form-reusable';
import { FormProvider,useForm } from 'react-hook-form';

export default function AddressEntry({onSubmit,handleChange,prevStep,years}) {
    const methods=useForm()
    const current_address_line1={
        title: 'Current Address Line 1:',
        placholder: 'Enter current address line 1: ',
        name: 'current_address_line1',
        type:'text',
        pattern:/^[a-zA-Z]+$/,
        maxCharacters:60,
        require:true,
        change: handleChange,
    }
    const current_address_line2={
        title: 'Current Address Line 1:',
        placholder: 'Enter current address line 2: ',
        name: 'current_address_line2',
        type:'text',
        maxCharacters:60,
        require:false,
        change: handleChange,
    }
    const current_address_town={
        title: 'Current Address Town:',
        placholder: 'Enter current address town: ',
        name: 'current_address_town',
        type:'text',
        pattern:/^[a-zA-Z]+$/,
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
        options: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua", "Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guinea","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mayanmar","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Vanuata","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],
        type:'select',
        change: handleChange,
        require:true
    }
    const current_address_postcode={
        title: 'Current Address Post Code:',
        placholder: 'Enter current address post code: ',
        name: 'current_address_postcode',
        type:'text',
        require:false,
        change: handleChange,
    }
    const from_month_current_address={
        title: 'Current Address From Month:',
        name: 'from_month_current_address',
        type:'select',
        options:["January","February","March","April","May","June","July","August","September","October","November","December"],
        change: handleChange,
        require:true
    }
    const from_year_current_address={
        title: 'Current Address From Year: ',
        name: 'from_year_current_address',
        type:'select',
        options:[2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984,1983,1982,1981,1980,1979,1978,1977,1976,1975,1974,1973,1972,1971,1970,1969,1968,1967,1966,1965,1964,1963,1962,1961,1960,1959,1958,1957,1956,1955,1954,1953,1952,1951,1950,1949,1948,1947,1946,1945,1944,1943,1942,1941,1940,1939,1938,1937,1936,1935,1934,1933,1932,1931,1930,1929,1928,1927,1926,1925,1924,1923,1922],
        change: handleChange,
        require:true
    }
    const to_month_current_address={
        title: 'Current Address To Month:',
        name: 'to_month_current_address',
        type:'select',
        options:["January","February","March","April","May","June","July","August","September","October","November","December"],
        change: handleChange,
        require:true
    }
    const to_year_current_address={
        title: 'Current Address (To Year):',
        name: 'to_year_current_address',
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
                <div className='form-group col-sm-6'>
                <Form input={from_month_current_address}/>
                </div>
                <div className='form-group col-sm-6'>
                <Form input={from_year_current_address}/>
                </div>
            </div>
            <div className='row'>
                <div className='form-group col-sm-6'>
                <Form input={to_month_current_address}/>
                </div>
                <div className='form-group col-sm-6'>
                <Form input={to_year_current_address}/>
                </div>
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
