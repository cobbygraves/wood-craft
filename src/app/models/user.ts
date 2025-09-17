import mongoose, { Document, Model, Schema } from 'mongoose'

export interface User extends Document {
  name: string
}

const UserSchema = new Schema<User>({
  name: { type: String, required: true }
})

// Guard against model recompilation during HMR
const User: Model<User> =
  mongoose.models.User || mongoose.model<User>('User', UserSchema)

export default User
