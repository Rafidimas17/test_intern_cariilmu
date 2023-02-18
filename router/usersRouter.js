const express=require('express')
const router=express.Router()
const {
  get_users,
  daftar_users,
  login_users,
  edit_users,
  get_users_by_id,
  hapus_users,
} = require("../controller/c_users.js");

router.get("/get-user", get_users);
router.get("/get-user-id/:id", get_users_by_id);
router.post("/daftar-user", daftar_users);
router.post("/login-user", login_users);
router.patch("/edit-user/:id", edit_users);
router.delete("/hapus-user/:id", hapus_users);

module.exports=router;