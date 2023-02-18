const mongoose=require('mongoose')

const courses = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  courseCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "courseCategories",
    required: true,
  },
});

module.exports=mongoose.model('courses',courses)