import { Schema, model } from "mongoose"

const HouseSchema = new Schema({
  thumbnail: String,
  description: String,
  price: Number,
  location: String,
  status: Boolean,
  user:{
    // Ref to users' id
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

export default model('House', HouseSchema)