import { Schema, model } from "mongoose"

// const UserSchema = new Schema({
//   email: z.string().email(),
// })

const UserSchema = new Schema({
  email: String
})

export default model('User', UserSchema)