const mongoose=require('mongoose')

const adminModel=mongoose.Schema({
    name_admin:{
        type:String,
        required:true,
    },
    email_admin:{
        type:String,
        required:true,
    },
    password_admin:{
        type:String,
        required:true,
    },
})

module.exports=mongoose.model('admin',adminModel)