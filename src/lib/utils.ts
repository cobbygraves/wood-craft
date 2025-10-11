import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sendContactForm = async (data: {
  name: string
  email: string
  phone: string
  location: string
  product: string
  image: string
}) =>
  fetch('/api/user/quotation', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
  }).then((res) => {
    if (!res.ok) throw new Error('Failed to send message')
    return res.json()
  })
