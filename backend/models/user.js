const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let User = new Schema({
    
    forename: {
        type: String
    },
    dob: {
        type: String
    },
    gender: {
        type: String
    },
    title: {
        type: String
    },
    nationality: {
        type: String
    },
    country_birth: {
        type: String
    },
    email: {
        type: String
    },
    Middle_Name_1: {
        type: String
    },
    Middle_Name_2: {
        type: String
    },    
    Middle_Name_3: {
        type: String
    },
    sur_name: {
        type: String
    },
    Country_of_Birth: {
        type: String
    },
    town_of_birth: {
        type: String
    },
    phone_number: {
        type: String
    },
    birth_changed_nationality: {
        type: String
    },
    sur_changed: {
        type: String
    },
    other_names: {
        type: String
    },
    new_nationality: {
        type: String
    },
    current_address_country: {
        type: String
    },
    birth_naionality: {
        type: String
    },
    status: {
        type: String
    },
    application_for: {
        type: String
    },
    payment: {
        type: String
    },
    lead: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Partner'
    },
    manual_address: {
        type: Array,
        "default":[]
    },
    other_names_entry: {
        type: Array,
        "default":[]
    },
    notes: {
        type: Array,
        "default":[],
    },
    payment: {
        amount:String,
        payment_id:String,
        created:String,
        currency:String
    }



}
);
User.set('timestamps',true)
module.exports = mongoose.model('User', User);