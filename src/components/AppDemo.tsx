'use client'

import { useId, useRef, useState } from 'react'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'
import Image from 'next/image'

import { AppScreen } from '@/components/AppScreen'
import { Pin } from '@/components/Pin'

export function AppDemo() {
  return (
    <AppScreen>
      <AppScreen.Body>
        <div className="m-2">
          <h2 className="text-xl font-bold">Explore Equipment</h2>
        </div>
        <div className="m-2 overflow-hidden rounded-2xl border">
          <div>
            <Image
              width={400}
              height={300}
              src="https://res.cloudinary.com/dfnzdrvxn/image/upload/w_800,h_600,c_fill/v1710827018/web/lnyqwn0ml42dzjvfxytl.jpg"
              alt="2600 PSI Water Blaster"
            />
          </div>
          <div className="p-2">
            <div className="flex">
              <Pin width="20px" height="20px" className="b" />
              <p className="ml-1 text-slate-500">Kerikeri</p>
            </div>
            <p className="mt-2 text-xl font-bold">2600 PSI Water Blaster</p>
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}
