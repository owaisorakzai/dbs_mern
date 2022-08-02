import React from 'react';
import {FormProvider, useForm } from 'react-hook-form';
import Form from './form-reusable';

export default function AdditionalName({onSubmit,handleChange,prevStep,years}) {
const methods=useForm()

const new_sur_and_fore={
        name: 'new_sur_and_fore',
        title:'Other name Type: ',
        options:['Select','Forename','Surname'],
        change: handleChange,
        type:'select',
        require:true

    }
    const other_name={
        title: 'Other name: ',
        placholder: 'Enter other name',
        name: 'other_name:',
        change: handleChange,
        type:'text',
        require:true
    }
    const from_month={
        title: 'From Month:',
        name: 'from_month',
        type:'select',
        options:["January","February","March","April","May","June","July","August","September","October","November","December"],
        change: handleChange,
        require:true
    }
    const from_year={
        title: 'From Year: ',
        name: 'from_year',
        type:'select',
        options:[2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984,1983,1982,1981,1980,1979,1978,1977,1976,1975,1974,1973,1972,1971,1970,1969,1968,1967,1966,1965,1964,1963,1962,1961,1960,1959,1958,1957,1956,1955,1954,1953,1952,1951,1950,1949,1948,1947,1946,1945,1944,1943,1942,1941,1940,1939,1938,1937,1936,1935,1934,1933,1932,1931,1930,1929,1928,1927,1926,1925,1924,1923,1922],
        change: handleChange,
        require:true
    }
    const to_month={
        title: 'To Month:',
        name: 'to_month',
        type:'select',
        options:["January","February","March","April","May","June","July","August","September","October","November","December"],
        change: handleChange,
        require:true
    }
    const to_year={
        title: 'To Year: ',
        name: 'to_year',
        type:'select',
        options:[2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984,1983,1982,1981,1980,1979,1978,1977,1976,1975,1974,1973,1972,1971,1970,1969,1968,1967,1966,1965,1964,1963,1962,1961,1960,1959,1958,1957,1956,1955,1954,1953,1952,1951,1950,1949,1948,1947,1946,1945,1944,1943,1942,1941,1940,1939,1938,1937,1936,1935,1934,1933,1932,1931,1930,1929,1928,1927,1926,1925,1924,1923,1922],
        change: handleChange,
        require:true
    }
    const other_names={
        name: 'other_names',
        title:'Have you ever been known by any other names?',
        options:['Select','No','Yes'],
        type:'select',
        change: handleChange,
        smallText:"If 'YES' is selected here then you will need to supply details on the next page",
        require:true

    }
  return <FormProvider {...methods}>
  <form className='container' id='form-personal' onSubmit={methods.handleSubmit(onSubmit)}>
      {years>0 ?(
          <div class="alert alert-primary" role="alert">
          Entry added successfuly <br/>
          You have entered {years} year history of your names
        </div>
      ):null}
        <div className='row'>
          <div className='col-xs-12 col-sm-6 col-lg-4'>
              <Form input={new_sur_and_fore} />
              <br></br>
              <Form input={other_name} />
              <br></br>
              <div className='row'>
                <div className='form-group col-sm-6'>
                <Form input={from_month}/>
                </div>
                <div className='form-group col-sm-6'>
                <Form input={from_year}/>
                </div>
            </div>
            <div className='row'>
                <div className='form-group col-sm-6'>
                <Form input={to_month}/>
                </div>
                <div className='form-group col-sm-6'>
                <Form input={to_year}/>
                </div>
            </div>
              
          </div>
          <div className='col-xs-12 col-sm-6 col-lg-4 '>
          <Form input={other_names}/>
          <div className='d-flex justify-content-end'>
          <button className='btn btn-primary btn-sm '  type='submit'>Next</button>
          </div>
          </div>
          </div>
    </form>
  </FormProvider>
}
