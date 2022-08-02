import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
  
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      if (!stripe) {
        return;
      }
  
      const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
      );
  
      if (!clientSecret) {
        return;
      }
  
      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Payment succeeded!");
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      });
    }, [stripe]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
      }
  
      setIsLoading(true);
  
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: "http://localhost:3000",
        },
      });
  
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Otherwise, your customer will be redirected to
      // your `return_url`. For some payment methods like iDEAL, your customer will
      // be redirected to an intermediate site first to authorize the payment, then
      // redirected to the `return_url`.
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occured.");
      }
  
      setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
    <div class="container">
    <div class="row">
    <div class="col-xs-12 col-md-4">
    
    
    <div class="panel panel-default credit-card-box">
    <div class="panel-heading display-table" >
    <div class="row display-tr" >
    <h3 class="panel-title display-td" >Payment Details</h3>
    </div>                    
    </div>
    <div class="panel-body">
    <form role="form" id="payment-form">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="row">
    <div class="col-xs-12">
    <div class="form-group">
    <label for="cardNumber">CARD NUMBER</label>
    <div class="input-group">
    <input 
    type="tel"
    class="form-control"
    name="cardNumber"
    placeholder="Valid Card Number"
    autocomplete="cc-number"
    required autofocus 
    />
    <span class="input-group-addon"><i class="fa fa-credit-card"></i></span>
    </div>
    </div>                            
    </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="row">
    <div class="col-xs-7 col-md-7">
    <div class="form-group">
    <label for="cardExpiry"><span class="hidden-xs">EXPIRATION</span><span class="visible-xs-inline">EXP</span> DATE</label>
    <input 
    type="tel" 
    class="form-control" 
    name="cardExpiry"
    placeholder="MM / YY"
    autocomplete="cc-exp"
    required 
    />
    </div>
    </div>
    
    <div class="col-xs-5 col-md-5 pull-right">
    <div class="form-group">
    <label for="cardCVC">CV CODE</label>
    <input 
    type="tel" 
    class="form-control"
    name="cardCVC"
    placeholder="CVC"
    autocomplete="cc-csc"
    required
    />
    </div>
    </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <div class="row">
    <div class="col-xs-12">
    <button class="btn btn-primary btn-lg btn-block" type="submit">Pay Now</button>
    </div>
    </div>
    <div class="row" >
    <div class="col-xs-12">
    <p class="payment-errors"></p>
    </div>
    </div>
    </form>
    </div>
    </div>   
    </div>
    </div>
    </div>      
      {/* Show any error or success messages */}
    </form>
  );
}