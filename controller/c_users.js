const usersModels=require('../models/model_users.js')
const bcrypt=require('bcrypt')
const jsonwebtoken=require('jsonwebtoken')
const crypto=require('crypto')
exports.daftar_users=async(req,res)=>{
    const{name,email,password}=req.body;
    try {
        const nameUsers=await usersModels.findOne({name_users:name})
        const emailUsers=await usersModels.findOne({email_users:email})
        if(nameUsers){
            return res.status(404).json({status:false,message:"Username telah tersedia"})
        }
        if(emailUsers){
            return res.status(404).json({status:false,message:"Email telah tersedia"})
        }
        const saltKey = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, saltKey);
        const dataUsers = new usersModels({
               name_users: name,
               email_users: email,
               password_users: passwordHash,
             });
        dataUsers.save();
        return res.status(200).json({ status:true, message: "Berhasil", payload: dataUsers });}
    catch (error) {
        return res.status(400).json({status:false, message:error})
    }
}
exports.login_users=async(req,res)=>{
    const{name,password}=req.body
    const nameUsers=await usersModels.findOne({name_users:name})
    if(nameUsers){
         const passwordUser = await bcrypt.compare(
           password,
           nameUsers.password_users
         );
         if(passwordUser==true){
            const data_users={
                id:nameUsers._id
            }
            const token=await jsonwebtoken.sign(
                data_users,
                process.env.JSWT_SECRET
            )
            return res.status(200).json({
                payload:token,
                data:nameUsers
            })
         }else{
            return res.status(404).json({
                status:false,
                message:"Periksa kembali password anda"
            })
         }
    }else{
        return res.status(404).json({
            status:false,
            message:"Username dan password tidak tersedia"
        })
    }


}
exports.get_users=async(req,res)=>{
    const allUsers=await usersModels.find();
    return res.status(200).json(allUsers)
}
exports.edit_users=async(req,res)=>{
    try {
        const editUser=await usersModels.updateOne(
            {_id:req.params.id},
            {$set:req.body})
            return res.status(200).json(editUser)
    } catch (error) {
        return res.status(404).json({message:error.message})
    }
}
exports.get_users_by_id=async(req,res)=>{
    try {
        const getUsersById=await usersModels.findById(req.params.id)
        return res.status(200).json({
            message:true,
            payload:getUsersById
        })
    } catch (error) {
        return res.status(404).json({
            message:error.message
        })
    }
}
exports.hapus_users=async(req,res)=>{
    try {
        const deleteUsers=await usersModels.deleteOne({_id:req.params.id})
        return res.status(200).json({
            message:"Data berhasil dihapus",
            payload:deleteUsers
        })
    } catch (error) {
        return res.status(404).json({
            message:error.message
        })
    }
}