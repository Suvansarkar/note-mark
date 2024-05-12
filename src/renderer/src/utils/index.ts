import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'IST'
})

export const formatDateFromMs = (ms: number) => dateFormatter.format(ms)

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
