const mongoose=require('mongoose');

const users = mongoose.Schema({
  name_users: {
    type: String,
  },
  email_users: {
    type: String,
  },
  password_users: {
    type: String,
  },
});

module.exports=mongoose.model('users',users)