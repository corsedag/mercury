'use client'
import { useId, useState } from 'react'

import { Button } from '@/components/Button'

export function SignUpForm() {
  let id = useId()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('/api/register-interest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    if (res.ok) setStatus('success')
    else setStatus('error')
  }

  return (
    <div>
      <form
        className="relative isolate mt-8 flex items-center pr-1"
        onSubmit={handleSubmit}
      >
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <input
          required
          type="email"
          autoComplete="email"
          name="email"
          id={id}
          placeholder="Email address"
          className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-hidden sm:text-[0.8125rem]/6"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" arrow disabled={status === 'loading'}>
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </Button>
        <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
        <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300" />
      </form>
      <div>
        {status === 'success' && (
          <p className="mt-2 text-green-600">
            Thank you for joining the waitlist!
          </p>
        )}
        {status === 'error' && (
          <p className="mt-2 text-red-600">Error. Please try again.</p>
        )}
      </div>
    </div>
  )
}
