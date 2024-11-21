"use client"

import { useEffect, useState } from "react"
import { ArrowRight, X } from 'lucide-react'

const ScrollBar = () => {
  const [showBar, setShowBar] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setShowBar(true)
      } else {
        setShowBar(false)
      }
      setLastScrollY(currentScrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [lastScrollY])

  return (
    <div
      className={`fixed inset-x-0 bottom-4 mx-auto z-50 w-11/12 max-w-2xl bg-[#19324e] rounded-2xl shadow-lg transition-all duration-500 ease-in-out ${
        showBar ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center px-6 py-4 space-y-4 text-center">
        <button
          onClick={() => setShowBar(false)}
          className="absolute top-2 right-2 text-white/80 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <span className="text-white font-semibold text-lg text-center">
          Use our world-class video talent to grow faster
        </span>
        <div className="flex space-x-4">
          <button className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 flex items-center space-x-2">
            <span>View Pricing</span>
            <ArrowRight size={16} />
          </button>
          <button className="bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-blue-400 transition-colors duration-300">
            Book a Call
          </button>
        </div>
      </div>
    </div>
  )
}

export default ScrollBar

