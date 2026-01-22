import { Albert_Sans, Barlow } from 'next/font/google'

export const albertSans = Albert_Sans({
    subsets: ['latin'],
    variable: '--font-albert',
    display: 'swap',
})

export const barlow = Barlow({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-barlow',
    display: 'swap',
})