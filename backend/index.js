'use strict';
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

var https=require('https')
const app = express();
app.use(express.json());


const cors = require('cors');
let users=require('./models/user');
const partner = require("./models/partner");

const stripe = require("stripe")('sk_test_51HEE1xFzx5jG4jjgiNkiG5mCAmVJzGcSMdV6AM0M7Lk26fBUFCzYh80jThtwmdZKSdQACQ3lSWhpaDGPJiXXby7T00LPEpQli8');



mongoose
  .connect('mongodb://127.0.0.1:27017/dbs_app')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })



app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;


  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 100,
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  console.log(paymentIntent.client_secret)
  const data=paymentIntent.client_secret
  res.json(data);
  const paymentIntent1 = await stripe.paymentIntents.retrieve(
    paymentIntent.id
  );
  
});

const request = require('request');
const fs = require('fs');

const body1=`<?xml version="1.0" encoding="utf-8"?>
<ns:eResultRequest xmlns:ns="http://disclosure.service.gov.uk/edisclosure" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://disclosure.service.gov.uk/edisclosure file:///C:/Users/Owais%20Orakzai/Desktop/daws_XSD_v1_3/INT023_GetApplicationeResult_request.xsd">
    <ns:MessageHeader>
        <ns:MessageID>1</ns:MessageID>
        <ns:RegisteredOrganizationNumber>47054922000</ns:RegisteredOrganizationNumber>
        <ns:Timestamp>${new Date()}</ns:Timestamp>
    </ns:MessageHeader>
    <ns:eResultRequestBasedOnRefNumber>
        <ns:eResultRequestBatch>
            <ns:DBSApplicationFormReference>E0470604524</ns:DBSApplicationFormReference>
        </ns:eResultRequestBatch>
    </ns:eResultRequestBasedOnRefNumber>
</ns:eResultRequest>`

var options = {
    url: 'https://uat.disclosure.dandbservice.org.uk:444/v1/retrieve_e-result',
    method:"POST",
    headers: {
        "content-type": "application/xml",
        },
    agentOptions: {
        
        pfx: fs.readFileSync('../cert.p12'),
        passphrase: 'Ibrar@2022_DBS'
    },
    body:body1
};

request.post(options, (error, response, body) => {
    console.log(response);
});



app.post("/",async (req,res,next)=>{

})

app.post("/store", async (req, res,next) => {
  users.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});
app.post("/signup", async (req, res,next) => {
  partner.create(req.body, (error, data) => {
    console.log(req.body.email)

    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
app.get('/users',(req, res) => {
  users.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

app.get('/partners',(req, res) => {
  partner.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
app.get('/notes/:id',(req, res) => {
  const token = req.headers['x-access-token']
  jw
  try{
    users.findOne({_id:req.params.id},(error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data.notes)
      }
    })
  }
  catch (error){
    res.json(error)

  }

})
app.post('/notes', async(req, res) => {
  console.log(req.body)
  users.findOne({_id:req.body.id}).then((doc)=>{
    doc.notes.push(req.body)
    doc.save()
    res.send(200)
  }).catch((error)=>{
    res.send(error)
  })
  })
  app.post('/payment', async(req, res) => {
    users.findOne({_id:req.body.customer_id}).then((doc)=>{
      doc.payment.push(req.body)
      doc.save()
      res.send(200)
    }).catch((error)=>{
      res.send(error)
    })
    })

app.delete('/delete-user/:id',(req, res, next) => {
  users.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
app.get('/usersInfo/:id',(req, res) => {
  users.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
app.post('/login', async (req, res, next) => {
  console.log(req.body.email)
  partner.findOne({ email: req.body.email }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      if (!data) {
        res.status(401).json({
          msg: "Auth failed"
        })
      } else {
        if (data.password !== req.body.password) {
          res.status(401).json({
            msg: "Auth failed"
          })
        } else {
          const token = jwt.sign({
            email: data.email,
            userId: data._id,
            role: data.role
          }, 'asxzczxfqweqwzxcasdafv1234qq4492avferwrgh', {
            expiresIn: '5h'
          })
          res.status(200).json({
            token: token,
            userId: data._id,
            role: data.role
          })
        }
      }
    }
  })
})

app.post('/auth',(req, res) => {
  const token=req.body.token
  console.log(token)
  jwt.verify(token, 'asxzczxfqweqwzxcasdafv1234qq4492avferwrgh', function(err, decoded) {
    if (err) {
      return res.status(401).json({
        title: 'Not Authenticated',
        error: err
      });
    }
    return res.status(200).json({
      title: 'Success',
      decoded: decoded
    });
  });
})
app.post('/register',(req, res) => {
  const token=req.body.token
  console.log(token)
  jwt.verify(token, 'verify1234', function(err, decoded) {
    if (err) {
      console.log(err)
      return res.status(401).json({
        title: 'Not Authenticated',
        error: err
      });
    }
    partner.findOneAndUpdate({email:decoded.email},{$set:{role:decoded.role,password:req.body.password,isConfirmed:true}},(error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  });
})
app.post('/addUser',(req, res) => {
  partner.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      jwt.sign({
        email: data.email,
        userId: data._id,
        role: data.role
      }, 'verify1234', {
        expiresIn: '5h'
      }, (err, token) => {
        if (err) {
          return next(err)
        } else {
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'i170121@nu.edu.pk',
              pass: 'Oxygenfamily77',
            },
          });
          const mailOptions = {
            from: 'owaisorakzai77@gmail.com',
            to: data.email,
            subject: 'Register Confirmation',
            text: 'Hello,\n\n' +
              'Please register yourself by clicking the link: \nhttp:\/\/' + 'localhost:3000' + '\/register\/' + token + '.\n'
          };
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              return next(err)
            } else {
              res.status(200).json({
                msg: "success"
              })
            }
          });
        }
      })
    }
  })
})

app.listen(4242, () => console.log("Node server listening on port 4242!"));