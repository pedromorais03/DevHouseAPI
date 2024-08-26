import { Schema, model } from "mongoose"
import { z } from 'zod'

// const UserSchema = new Schema({
//   email: z.string().email(),
// })

const UserSchema = new Schema({
  email: String
})

export default model('User', UserSchema)