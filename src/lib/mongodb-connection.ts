import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI!

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable in .env.local'
  )
}

type MongooseCache = {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

declare global {
  // allow global cache across module reloads in dev
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var _mongooseCache: MongooseCache | undefined
}

const globalRef = globalThis as unknown as {
  _mongooseCache?: MongooseCache
}

if (!globalRef._mongooseCache) {
  globalRef._mongooseCache = { conn: null, promise: null }
}

async function connectToDatabase() {
  if (globalRef._mongooseCache!.conn) {
    return globalRef._mongooseCache!.conn!
  }

  if (!globalRef._mongooseCache!.promise && MONGODB_URI) {
    // Only create one connecting promise for concurrent callers
    globalRef._mongooseCache!.promise = mongoose
      .connect(MONGODB_URI)
      .then((m) => {
        return m
      })
  }

  globalRef._mongooseCache!.conn = await globalRef._mongooseCache!.promise
  return globalRef._mongooseCache!.conn!
}

export default connectToDatabase
