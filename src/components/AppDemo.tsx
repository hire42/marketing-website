'use client'

import Image from 'next/image'

import screenshot from '@/images/IMG_1718.png'

export function AppDemo() {
  return (
    <div className="absolute inset-0">
      <Image
        src={screenshot}
        alt="Hire42 app home screen showing featured equipment listings"
        fill
        className="object-cover object-top"
        sizes="366px"
        priority
      />
    </div>
  )
}
