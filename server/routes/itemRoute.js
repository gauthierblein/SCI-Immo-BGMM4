import express from "express";
import { myItems, getAllItems, getOneItem, deleteItem, updateItem } from "../controllers/itemController.js";
import ItemModel from "../models/itemModel.js";

const router = express.Router()



//CREATE POST
router.post("/posts", async (req, res) => {
  const newPost = new ItemModel(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', getAllItems)
router.get('/:id', myItems)
router.get('/products/:id', getOneItem);
router.delete("/delete/:id", deleteItem)
router.put("/update/:id", updateItem)



export default router;