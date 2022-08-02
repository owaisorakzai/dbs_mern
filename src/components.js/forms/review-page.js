import React from 'react';
import './forms.css'

export default function ReviewPage({data,onSubmit,step}) {
    const personalData=[[
        "Title", data.forename],
        [
        "Date of Birth", data.dob
        ],
        [
            "Surname", data.sur_name,

        ],
        [
            "Gender", data.gender,

        ],
        [
            "Email Address", data.email,

        ],
        [
            "Middle Name 1", data.Middle_Name_1,

        ],
        [
            "Middle Name 2", data.Middle_Name_2,
        ],
        [
            "Middle Name 3", data.Middle_Name_3,
        ],
        [
            "Birth Town", data.town_of_birth,

        ],
        [
            "Birth Country", data.Country_of_Birth,

        ],
        [
            "Birth Nationality", data.nationality,

        ],
]
const personalHistory=[[
    "Nationality Changed", data.birth_changed_nationality],
    [
    "Sur Changed", data.sur_changed
    ],

]
const addressInfo=data.manual_address

  return (
        <div>
        <div className='row'>
            <div className='col-8'>
        <div class="table-wrap">
          <table class="table">
        <thead class="thead-dark">
            <tr>
                <h6>Personal Information</h6>
            </tr>
        </thead>
        <tbody>
        {personalData.map((item)=>(
                        <tr>

                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                        </tr>                        
                    ))}

        </tbody>
        <thead class="thead-dark">
            <tr>
                <h6>Personal History</h6>
            </tr>
        </thead>
        <tbody>
                    {personalHistory.map((item)=>(
                        <tr>
                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                        </tr>                        
                    ))}

        </tbody>
        <thead class="thead-dark">
            <tr>
                <h6>Address Information</h6>
            </tr>
        </thead>
                    {addressInfo.map((item)=>(
                        <tbody>

                        <tr>
                        <td>Address Country</td>
                        <td>{item.country_address_country}</td>
                        </tr> 
                        <tr>
                        <td>Current Address County</td>
                        <td>{item.current_address_county}</td>
                         </tr>  
                         <tr>
                        <td>Current Address Line 1</td>
                        <td>{item.current_address_line1}</td>
                         </tr> 
                         <tr>
                        <td>Current Address Line 2</td>
                        <td>{item.current_address_line2}</td>
                         </tr> 
                         <tr>
                        <td>Current Address Post Code</td>
                        <td>{item.current_address_postcode}</td>
                         </tr> 
                         <tr>
                        <td>Current Address Town</td>
                        <td>{item.current_address_town}</td>
                         </tr> 
                         <tr>
                        <td>From Month</td>
                        <td>{item.from_month_current_address}</td>
                         </tr> 
                         <tr>
                        <td>From Year</td>
                        <td>{item.from_year_current_address}</td>
                         </tr> 
                         <tr>
                        <td>To Month</td>
                        <td>{item.to_month_current_address}</td>
                         </tr> 
                         <tr>
                        <td>To Year</td>
                        <td>{item.to_year_current_address}</td>
                         </tr>       
                         
                              </tbody>
                                             
                    ))}

    </table>
</div>
</div>
<div className='col'>
<div class="container card align middle review">
            <div class="card-body">
                <p><strong>* Please Read:</strong></p>

                <p><strong> REVIEW ALL INFORMATION</strong></p>

                <p><small>Please ensure that the information you have provided is accurate and error free.</small></p>

                <p><small>PIn the next step you will be required to confirm the accuracy of this information by providing an electronic signature.</small></p>
                <form onSubmit={onSubmit}>
                <div class="form-group form-check">
                <input type="checkbox" className="form-check-input" required />
                <label class="form-check-label" for="exampleCheck1">I have provided complete and true information in support of my application and I understand that knowingly making a false statement for this purpose is a criminal offence.</label>
                <br />
                <br />
                <br />
                <div className='row'>
                    <div className='col'>
                    <button type="submit" class="btn btn-primary">Submit</button>

                    </div>
                    <div className='col'>
                    <button type="submit" onClick={step} class="btn btn-success">Review</button>
                    </div>
                    
                </div>
                </div>
                </form>
            </div>
            </div>
</div>
</div>
</div>
)
}
