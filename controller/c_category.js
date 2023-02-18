const categoryModels = require("../models/model_coursesCategories.js");
exports.daftar_category = async (req, res) => {
  const { name } = req.body;
  try {
    const namecategory = await categoryModels.findOne({ name_category: name });
    if (namecategory) {
      return res
        .status(404)
        .json({ status: false, message: "category telah tersedia" });
    }
    const datacategory = new categoryModels({
      name_category: name,
    });
    datacategory.save();
    return res
      .status(200)
      .json({ status: true, message: "Berhasil", payload: datacategory });
  } catch (error) {
    return res.status(400).json({ status: false, message: error });
  }

};
exports.get_category = async (req, res) => {
  const allcategory = await categoryModels.find();
  return res.status(200).json(allcategory);
};
exports.edit_category = async (req, res) => {
  try {
    const editcategory = await categoryModels.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    return res.status(200).json(editcategory);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
exports.get_category_by_id = async (req, res) => {
  try {
    const getcategoryById = await categoryModels.findById(req.params.id);
    return res.status(200).json({
      message: true,
      payload: getcategoryById,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
exports.hapus_category = async (req, res) => {
  try {
    const deletecategory = await categoryModels.deleteOne({ _id: req.params.id });
    return res.status(200).json({
      message: "Data berhasil dihapus",
      payload: deletecategory,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
