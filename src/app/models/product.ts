import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IProduct extends Document {
  title: string
  price: number
  productUrl?: string
  description?: string
  createdAt: Date
}

const ProductSchema = new Schema<IProduct>({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  productUrl: String,
  createdAt: { type: Date, default: () => new Date() }
})

// Guard against model recompilation during HMR
const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema)

export default Product
