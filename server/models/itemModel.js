import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
  {
    userId: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    cover: {type: String}
  },
  {
    timestamps: true,
  }
);

var ItemModel = mongoose.model("Items", itemSchema);
export default ItemModel;
