const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'First name must be atleat 3 character long'],
        },
        lastname:{
            type:String,
            minlength:[3,'Last name must be at least 3 character long'],
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'Email must be at least 5 character long']
    },
    password:{
        type:String,
        required:true,
    },
    socketId:{
        type:String,
    }
})