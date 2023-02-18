const mongoose=require('mongoose')

const usersCourses = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    require: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "courses",
    require: true,
  },
});

module.exports=mongoose.model('users_course',usersCourses)