import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 mb-12 overflow-hidden">
            <Image
                src="https://res.cloudinary.com/dquqygs9h/image/upload/v1725591869/jianpiehrvol6vixkueh.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
                className="absolute inset-0 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10"></div>
            <div className="my-container relative z-20">
                <div className="flex flex-col items-center space-y-6 text-center">
                    <div className="space-y-4 max-w-4xl">
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                            Welcome to My Journey Through Code & Insights
                        </h1>
                        <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-gray-200">
                            Exploring ideas, sharing experiences, and learning together. Join me on this journey of discovery and growth.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <Button size="lg" className="w-full sm:w-auto">Latest Posts</Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">About Me</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}