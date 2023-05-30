import ItemModel from "../models/itemModel.js";




// Get all Items
export const getAllItems = (req, res, next) => {
  ItemModel.find()
  .then((allItems) => {res.status(200).json(allItems); })
  .catch((error) => {res.status(400).json({error: error,});});
};

// Get user Items
export const myItems = (req, res, next) => {
  ItemModel.findOne({userId: req.params.id})
  .then((allItems) => {res.status(200).json(allItems); })
  .catch((error) => {res.status(400).json({error: error,});});
};

// Get one Item
export const getOneItem = (req, res, next) => {
  ItemModel.findOne({_id: req.params.id})
  .then((allItems) => {res.status(200).json(allItems); })
  .catch((error) => {res.status(400).json({error: error,});});
};

// Delete an item
export const deleteItem = async (req, res) => {
  ItemModel.findByIdAndDelete({_id : req.params.id})
  .then(() => {res.status(201).json({message: 'Annonce effacée!'})})
  .catch((error) => {res.status(400).json({error: error})})
}; 

// Update an item
export const updateItem = async (req, res) => {
  console.log(req.params)
  console.log(req.body)

  ItemModel.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      location: req.body.location,
    }
  )
      .then(() => {res.status(201).json({message: 'Annonce modifiée!'})})
      .catch((error) => {res.status(400).json({error: error})})
}; 
