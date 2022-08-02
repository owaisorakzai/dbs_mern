import React from 'react';
import { useFormContext } from "react-hook-form";
import './forms.css'


export default function Form(props) {
    const { register,formState: { errors } } = useFormContext();

    const renderForm =()=>{
        switch (props.input.type) {
            case 'text':
                    return(
                        <div class="form-group" key={props.input.name}>
                        {props.input.require==true ?(<label className='red' for={props.input.name}>{props.input.title}</label>):
                        <label for={props.input.name}>{props.input.title}</label>
                    }
                        
                        <input type={props.input.type}  {...register(props.input.name, { required: props.input.require ,onChange: props.input.change, pattern: props.input.pattern,maxLength:props.input.maxCharacters })} autocomplete="off"  class="form-control form-control-sm" placeholder={props.input.placholder} value={props.data} />
                        <div id={props.input.name} class="form-text">{props.input.smallText}</div>
                        {errors[props.input.name] &&  errors[props.input.name].type=="pattern" && <smallText className='text-danger'> Invalid character </smallText>}
                        {errors[props.input.name] &&  errors[props.input.name].type=="required" && <smallText className='text-danger'> Cannot be a blank field </smallText>}
                        {errors[props.input.name] &&  errors[props.input.name].type=="maxLength" && <smallText className='text-danger'> Maximum characters exceeded </smallText>}


                      </div>
                    )
            case 'date':
                    return(
                        <div class="form-group">
                        {props.input.require==true ?(<label className='red' for={props.input.name}>{props.input.title}</label>):
                        <label for={props.input.name}>{props.input.title}</label>
                    }
                        <input type={props.input.type} format="yyyy-mm-dd" onChange={props.input.change} name={props.input.name} {...register(props.input.name, { required: props.input.require ,onChange: props.input.change,validate:props.input.address})} class="form-control form-control-sm" id="forename" placeholder={props.input.placeholder} />
                        {errors[props.input.name] &&  errors[props.input.name].type=="required" && <smallText className='text-danger'> Cannot be a blank field </smallText>}
                        {errors[props.input.name] &&  errors[props.input.name].type=="validate" && <smallText className='text-danger'> Invalid Date </smallText>}


                      </div>
                    )
            case 'date':
                        return(
                            <div class="form-group">
                        {props.input.require==true ?(<label className='red' for={props.input.name}>{props.input.title}</label>):
                        <label for={props.input.name}>{props.input.title}</label>
                    }
                            <input type={props.input.type} format="yyyy-mm-dd" onChange={props.input.change} name={props.input.name} {...register(props.input.name, { required: props.input.require ,onChange: props.input.change,validate:props.input.address})} max={props.input.max} class="form-control form-control-sm" id="forename" placeholder={props.input.placeholder} required={props.input.require}/>
                        {errors[props.input.name] &&  errors[props.input.name].type=="required" && <smallText className='text-danger'> Cannot be a blank field </smallText>}
    
                          </div>
                        )
            case 'select':
                    return(
                        <div>
                        <label for={props.input.title}>{props.input.title}</label>
                        <select name={props.input.name} {...register(props.input.name, { required: props.input.require,onChange: props.input.change,validate:props.input.address })} className='form-select form-select-sm'>
                            <option value="">Select</option>validate:props.input.address
                            {
                            props.input.options.map((option)=>(
                                <option value={option}>{option}</option>
                            ))}
                        </select>
                        {errors[props.input.name] &&  errors[props.input.name].type=="required" && <smallText className='text-danger'> Cannot be a blank field </smallText>}
                        {errors[props.input.name] &&  errors[props.input.name].type=="validate" && <smallText className='text-danger'> Invalid Date </smallText>}

                        <div id={props.input.name} class="form-text">{props.input.smallText}</div>

                        </div>
                        )
            case 'email':
                    return(
                        <div class="form-group">
                            
                            <label for={props.input.name}>{props.input.title}</label>
                                <input type={props.input.type} value={props.data} autocomplete="off"  name={props.input.name} {...register(props.input.name, { required: props.input.require,onChange: props.input.change })} class="form-control form-control-sm" placeholder={props.input.placeholder} aria-describedby={props.input.name} />
                                <div id={props.input.name} class="form-text">{props.input.smallText}</div>
                                {errors[props.input.name] &&  errors[props.input.name].type=="pattern" && <smallText className='text-danger'> Please enter valid value </smallText>}
                        {errors[props.input.name] &&  errors[props.input.name].type=="required" && <smallText className='text-danger'> Cannot be a blank field </smallText>}
                        </div>
                        
                            )
                    
        
            default:
                break;
        }

    }
  return (
      renderForm()

  );
}

