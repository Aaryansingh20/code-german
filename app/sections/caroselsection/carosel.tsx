"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CheckCircle2 } from 'lucide-react'

const images = [
  {
    src: "https://i.pinimg.com/736x/2e/3d/68/2e3d6845011de0d24c13dd1e1028a2ff.jpg",
    alt: "Online German class session with interactive exercises"
  },
  {
    src: "https://i.pinimg.com/736x/5f/74/46/5f744613e08825479a302215f8ea8d3b.jpg",
    alt: "Students participating in virtual German language practice"
  },
  {
    src: "https://i.pinimg.com/736x/af/67/5a/af675a4830590c2cc5dfa6cba4f73c5a.jpg",
    alt: "German grammar exercises and learning materials"
  },
  {
    src: "https://i.pinimg.com/736x/bb/ea/7a/bbea7a3f15a54b3df13ac5d392ffc462.jpg",
    alt: "Live interaction during German language course"
  },
  {
    src: "https://i.pinimg.com/736x/ff/92/35/ff9235cd827885e439aef1bb9e153754.jpg",
    alt: "Virtual classroom environment for German learning"
  }
]

export default function CarouselHero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Get a 30-Minute German Demo Session for Free</h1>
          <p className="text-xl text-white mb-8">
            Dive into the German language with live interactive classes, personalized lessons,
            and practical exercises. Whether you&apos;re a beginner or advancing your skills, we
            have the perfect course for you.
          </p>
          <ul className="space-y-4 mb-8 text-white">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-600 h-6 w-6 flex-shrink-0" />
              <span>Live interactive classes</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-600 h-6 w-6 flex-shrink-0" />
              <span>Comprehensive grammar & vocabulary training</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-600 h-6 w-6 flex-shrink-0" />
              <span>Pronunciation practice with real-time feedback</span>
            </li>
          </ul>
          <Button size="default" className="sm:w-auto h-[50px] lg:w-[30%] bg-[#f2b31e] hover:bg-[#f9d98c] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300">
            Start a free lesson
          </Button>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="aspect-w-4 aspect-h-3 lg:aspect-h-full">
            {images.map((image, index) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition-opacity duration-500 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
                priority={index === 0}
              />
            ))}
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImage 
                    ? "bg-white w-4" 
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

