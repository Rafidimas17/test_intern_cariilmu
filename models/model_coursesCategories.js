const mongoose=require('mongoose')

const courseCategoriesModel=mongoose.Schema({
    name_category:{
        type:String,
    }
})
module.exports = mongoose.model("courseCategories", courseCategoriesModel);