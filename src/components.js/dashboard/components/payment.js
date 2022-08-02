import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './checkoutform';
import axios from 'axios';
import './form-payment.css'

const stripePromise = loadStripe("pk_test_51HEE1xFzx5jG4jjg7re03HawPlyc6BTpE7ZZJYaUrrcgsSlPskIRjdCY0vAlaXbozfW9DqTHiofTlqnWO8Iy211X00L9q3IkPk")
export default function PaymentDashboard({id}) {
    const [clientSecret, setClientSecret] = useState("");
    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };
      console.log(id)
    useEffect(()=>{
        var items={
            id:"basic_check"
        }
        axios.post("http://localhost:4242/create-payment-intent",items)
        .then((res)=>{
            setClientSecret(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm id={id} />
        </Elements>
              )}
    </div>
  )
}
