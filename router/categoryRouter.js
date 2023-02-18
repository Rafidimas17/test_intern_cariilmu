const express=require('express')
const router=express.Router()
const {
  get_category,
  daftar_category,
  // login_category,
  edit_category,
  get_category_by_id,
  hapus_category,
} = require("../controller/c_category.js");

router.get("/get-category", get_category);
router.get("/get-category-id/:id", get_category_by_id);
router.post("/daftar-category", daftar_category);
// router.post("/login-category", login_category);
router.patch("/edit-category/:id", edit_category);
router.delete("/hapus-category/:id", hapus_category);

module.exports=router;