// src/app/api/register-interest/route.js
import { NextResponse } from 'next/server'
import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export async function POST(req) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    await pool.query(
      'INSERT INTO emails (email_address) VALUES ($1) ON CONFLICT DO NOTHING',
      [email]
    )

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('REGISTER INTEREST ERROR:', err); 
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
