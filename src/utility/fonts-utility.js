import { Lato, Playfair } from 'next/font/google'
export const lato = Lato({
    subsets: ['sans-serif'],
    weight: ['300','400','700'],
    preload: true
})

export const playFair = Playfair({
    subsets: ['sans-serif'],
    weight: ['300','400','700'],
    preload: true
})