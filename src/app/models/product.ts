import mongoose, { Document, Model, Schema } from 'mongoose'

export interface Product extends Document {
  image: string
  name: string
  description: string
  price: string | number
  createdAt: Date
}

const ProductSchema = new Schema<Product>({
  price: { type: Number, required: true },
  description: String,
  image: String,
  createdAt: { type: Date, default: () => new Date() }
})

// Guard against model recompilation during HMR
const ProductModel: Model<Product> =
  mongoose.models.Product || mongoose.model<Product>('Product', ProductSchema)

export default ProductModel
