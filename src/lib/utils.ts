import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function setImageSize() {
  let size = {
    w: 275,
    h: 412
  }
  const randomSize = Math.floor(Math.random() * 20) + 1

  if (randomSize > 7) {
    size = {
      w: 418,
      h: 626
    }
  }

  if (randomSize > 14) {
    size = {
      w: 560,
      h: 840
    }
  }
  return size
}
