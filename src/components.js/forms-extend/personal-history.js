import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Form from './form-reusable';

export default function PersonalHistory({onSubmit,handleChange,prevStep,nationality,surChanged}) {
    const methods=useForm();
    const birth_changed_nationality={
        name: 'birth_changed_nationality',
        title:'Has your Nationality changed since birth?',
        options:['No','Yes'],
        type:'select',
        change: handleChange,
        require:true

    }
    const sur_changed={
        name: 'sur_changed',
        title:'Has your surname changed since birth?',
        options:['No','Yes'],
        change: handleChange,
        type:'select',
        require:true

    }
    const birth_surname={
        title: 'Birth Surname:',
        placholder: 'Enter birth surname',
        name: 'birth_surname',
        type:'text',
        change: handleChange,
        require:true
    }
    const birth_forename={
        title: 'Birth Forename:',
        placholder: 'Enter birth foreman',
        name: 'birth_forename',
        type:'text',
        change: handleChange,
        require:true
    }
    const used_until_month={
        title: 'Used Until Month:',
        name: 'used_until_month',
        type:'select',
        options:["January","February","March","April","May","June","July","August","September","October","November","December"],
        change: handleChange,
        require:true
    }
    const used_until_year={
        title: 'Used Until Year: ',
        name: 'used_until_year',
        type:'select',
        options:[2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984,1983,1982,1981,1980,1979,1978,1977,1976,1975,1974,1973,1972,1971,1970,1969,1968,1967,1966,1965,1964,1963,1962,1961,1960,1959,1958,1957,1956,1955,1954,1953,1952,1951,1950,1949,1948,1947,1946,1945,1944,1943,1942,1941,1940,1939,1938,1937,1936,1935,1934,1933,1932,1931,1930,1929,1928,1927,1926,1925,1924,1923,1922],
        change: handleChange,
        require:true
    }
    const other_names={
        name: 'other_names',
        title:'Have you ever been known by any other names?',
        options:['No','Yes'],
        type:'select',
        change: handleChange,
        smallText:"If 'YES' is selected here then you will need to supply details on the next page",
        require:true

    }
    if(nationality==1){
        alert ('je')
    }
    console.log(surChanged)
    const new_nationality={
        name: 'new_nationality',
        title:'New Nationality:',
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
        require:true

    }

  return (<FormProvider {...methods} >
    <form className='container' id='form-personal' onSubmit={methods.handleSubmit(onSubmit)}>
            <div className='row'>
            <div className='col-xs-12 col-sm-6 col-lg-4'>
            <Form input={birth_changed_nationality}/>
            {nationality.newNationality==1 ? (
                <Form input={new_nationality} />
            ):null}
            </div>
            <div className='col-xs-12 col-sm-6 col-lg-4'>
            <Form input={sur_changed}/>
            {surChanged.surChanged==1 ? (
            <Form input={birth_surname}/>
            ):null}
            {surChanged.surChanged==1 ? (
                <Form input={birth_forename}/>
            ):null}
            <div className='row'>
            <div className='form-group col-sm-6'>
            {surChanged.surChanged==1 ? (
            <Form input={used_until_month}/>
            ):null}
            </div>
            <div className='form-group col-sm-6'>
            {surChanged.surChanged==1 ? (
            <Form input={used_until_year}/>
            ):null}
            </div>
            </div>
            </div>

            <div className='col-xs-12 col-sm-6 col-lg-4'>
            <Form input={other_names}/>
            </div>
            </div>
            <div className='d-flex justify-content-end'>
                <button className='btn btn-primary btn-sm '  type='submit'>Next</button>
            </div>
    </form>
  </FormProvider>
  )
}
