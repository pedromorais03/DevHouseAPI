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
}, {
  // Telling the model to 'enable' virtual variables, put it together to request
  toJSON: {
    virtuals: true
  }
})

// Virtual variable, it is not created in the database, but it is returned in request
HouseSchema.virtual('thumbnail_url').get(function(){
  return `http://localhost:3333/files/${this.thumbnail}`
})

export default model('House', HouseSchema)