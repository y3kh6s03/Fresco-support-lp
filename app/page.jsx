"use client"

import { Contact } from '@/app/components/contact/Contact';
import { Hero } from '@/app/components/hero/Hero'
import { Merit } from '@/app/components/merit/Merit';
import { Message } from '@/app/components/message/Message';
import { Service } from '@/app/components/service/Service';
import { Noto_Nastaliq_Urdu, Noto_Sans } from 'next/font/google';
import { createContext } from 'react';

const Noto = Noto_Sans({
  weight: ["300", "800"],
  subsets: ["latin"],
  display: "swap"
})
const Num = Noto_Nastaliq_Urdu({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap"
})

export const FontsContext = createContext();

const Fonts = [Noto, Num];

export default function Home() {
  return (
    <FontsContext.Provider value={Fonts}>
      <Hero />
      <Message />
      <Service />
      <Merit />
      <Contact />
    </FontsContext.Provider>
  )
}
