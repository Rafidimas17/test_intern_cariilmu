const express=require('express')
const router=express.Router()
const {
  get_admin,
  daftar_admin,
  login_admin,
  edit_admin,
  get_admin_by_id,
  hapus_admin,
} = require("../controller/c_admin.js");

router.get("/get-admin", get_admin);
router.get("/get-admin-id/:id", get_admin_by_id);
router.post("/daftar-admin", daftar_admin);
router.post("/login-admin", login_admin);
router.patch("/edit-admin/:id", edit_admin);
router.delete("/hapus-admin/:id", hapus_admin);

module.exports=router;