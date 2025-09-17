import { NextRequest, NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongodb-connection'
import User from '@/app/models/user'

export async function GET() {
  await connectToDatabase()
  const users = await User.find({})
  return NextResponse.json({ users }, { status: 200 })
}
