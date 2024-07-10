import { Montserrat } from 'next/font/google'

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500', '700'],
    style: 'normal',
    preload: true,
    variable: '--tecnocampo-font',
    display: 'swap'
})