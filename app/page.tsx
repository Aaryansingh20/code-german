"use client"

import Link from 'next/link'
import { useState,useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Menu, X, CalendarIcon,Facebook, Twitter, Instagram } from 'lucide-react'
import Image from 'next/image'
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import Testimonial from './sections/testimonial/page'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import ScrollBar from '@/components/ui/scrollbar'
import ScrollToTopButton from '@/components/ui/scrollupbtn'
import { motion } from 'framer-motion'

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [date, setDate] = useState<Date>()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <main className="flex-grow">
      <div className="bg-[#19324e] shadow-md">
  <header className="mx-auto max-w-[1400px] p-2">
    <div className="flex items-center justify-between px-6 py-2">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://i.pinimg.com/736x/52/04/fb/5204fbf7095006e5a9b025db4ae64e6b.jpg"
            alt="Logo"
            width={32}
            height={32}
            className="bg-white"
          />
          <span className="text-lg font-semibold text-white">Code German</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-10">
        {["About Us", "Courses", "Why Us", "Contact Us"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-lg font-semibold text-white transition-colors duration-200 hover:text-blue-200 relative"
          >
            <span className="after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              {item}
            </span>
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation Toggle */}
      <button
        className="md:hidden text-white hover:text-blue-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Mobile Navigation */}
    {isOpen && (
      <div className="mt-2 bg-blue-600 shadow-md p-3 md:hidden">
        <nav className="flex flex-col space-y-2">
          {["About Us", "Courses", "Why Us", "Contact Us"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm text-white transition-colors duration-200 hover:text-blue-200"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    )}
  </header>
</div>
        {/* Hero Section */}
        <section className="relative bg-cover bg-center text-white py-20 overflow-hidden min-h-screen flex items-center" >
      {/* Dynamic background */}
      <div className="absolute inset-0" style={{ backgroundImage: 'url(https://i.pinimg.com/736x/cd/21/bb/cd21bb53aba2cfa626144cbd740db68c.jpg)',backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%', }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNncmlkKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              Master German
              <span className="block text-white">From Anywhere, Anytime!</span>
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-white"
              variants={itemVariants}
            >
              Join personalized online classes designed for learners of all levels.
            </motion.p>
            <motion.div 
              className="space-x-4 mb-12"
              variants={itemVariants}
            >
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-100">
                Contact Us
              </Button>
              <Button variant="outline" size="lg" className="border-blue border-2 text-white bg-transparent hover:bg-white/20">
                View Course
              </Button>
            </motion.div>
            <motion.div 
              className="flex space-x-8 font-bold text-4xl md:text-5xl text-white"
              variants={itemVariants}
            >
              {[
                { number: "1L+", text: "social media followers" },
                { number: "10k+", text: "students trained" },
                { number: "27+", text: "student enrollment countries" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <h3 className="mb-2">{stat.number}</h3>
                  <p className="text-sm font-normal text-white">{stat.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div 
            className="md:w-1/2 grid grid-cols-3 gap-4"
            variants={itemVariants}
          >
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://i.pinimg.com/736x/31/01/e8/3101e8e4bbe34881eca59d03cac91a2c.jpg"
                alt="Brandenburg Gate"
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-5000 ease-in-out hover:scale-110"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://i.pinimg.com/736x/50/b7/5d/50b75deb5b8ab3c63c096bd655475adb.jpg"
                alt="German Food"
                width={200}
                height={200}
                className="w-full h-full object-cover transition-transform duration-5000 ease-in-out hover:scale-110"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://i.pinimg.com/736x/71/06/f3/7106f38e8a74ddf6236b49f81b326cee.jpg"
                alt="Neuschwanstein Castle"
                width={200}
                height={200}
                className="w-full h-full object-cover transition-transform duration-5000 ease-in-out hover:scale-110"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>



        {/* About Services Section */}
        <section id="about" className="py-20 bg-[#19324e] relative overflow-hidden">
  {/* Background SVG */}
  <div className="absolute inset-0 opacity-30">
    <svg
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="about-gradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          x2="1000"
          y1="0"
          y2="1000"
        >
          <stop offset="0" stopColor="#4299e1" />
          <stop offset="1" stopColor="#3182ce" />
        </linearGradient>
      </defs>
      <path fill="url(#about-gradient)" d="M0 0l1000 1000H0V0z" />
      <path fill="#fff" d="M0 200l1000 800H0V200z" opacity=".1" />
      <path fill="#fff" d="M0 400l1000 600H0V400z" opacity=".1" />
      <path fill="#fff" d="M0 600l1000 400H0V600z" opacity=".1" />
      <path fill="#fff" d="M0 800l1000 200H0V800z" opacity=".1" />
    </svg>
  </div>

  <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
    <h2 className="text-4xl font-extrabold mb-14 text-center text-white animate-on-scroll">
      Our Services
    </h2>
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "1-on-1 Classes",
          description:
            "Personalized attention tailored to your learning pace and goals. Our expert tutors work closely with you to address your specific needs and help you progress rapidly.",
          image:
            "https://i.pinimg.com/736x/9e/45/d4/9e45d44b73343c9667f1ed62129c1a66.jpg",
        },
        {
          title: "Group Workshops",
          description:
            "Interactive sessions to practice German with peers and improve communication skills. Engage in lively discussions, role-plays, and cultural activities to enhance your language proficiency.",
          image:
            "https://i.pinimg.com/236x/ad/87/53/ad8753e71d09aba1fd02eeaa283eaede.jpg",
        },
        {
          title: "Comprehensive Skills Training",
          description:
            "Focus on speaking, listening, reading, and writing for well-rounded proficiency. Our balanced approach ensures you develop all aspects of language use, preparing you for real-world communication.",
          image:
            "https://i.pinimg.com/736x/48/29/20/4829206d5aec21ec54eeb4e7e6807ed3.jpg",
        },
      ].map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-8 transition-transform duration-300 hover:scale-105 animate-on-scroll"
        >
          <Image
            src={service.image}
            height={200}
            width={200}
            alt={service.title}
            className="rounded-full mb-6 shadow-md"
          />
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 opacity-20 rounded-full -mb-32 -ml-32 animate-pulse" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500 opacity-20 rounded-full -mt-48 -mr-48 animate-pulse" />
</section>


       {/* Video Section */}
       <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-6 md:px-12 lg:px-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left Content Section */}
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Learn German with Ease
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Dive into the German language with live interactive classes,
          personalized lessons, and practical exercises. Whether you&apos;re a
          beginner or advancing your skills, we have the perfect course for
          you. Explore grammar, vocabulary, and pronunciation in engaging
          sessions designed for all learners.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Live interactive classes</span>
          </li>
          <li className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Comprehensive grammar & vocabulary training</span>
          </li>
          <li className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Pronunciation practice with real-time feedback</span>
          </li>
        </ul>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Join Our Classes Today
        </a>
      </div>

      {/* Right Video Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform transition-all duration-300 hover:scale-105">
        <video
          className="w-full h-full object-cover"
          controls
          poster="/placeholder.svg?height=300&width=400"
          autoPlay
          loop
          muted
        >
          <source src="/videos/bunny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</section>
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-6 md:px-12 lg:px-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Video Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform transition-all duration-300 hover:scale-105">
        <video
          className="w-full h-full object-cover"
          controls
          poster="/placeholder.svg?height=300&width=400"
          autoPlay
          loop
          muted
        >
          <source src="/videos/bunny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Content Section */}
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Explore German Culture While Learning
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Immerse yourself in the richness of German traditions, festivals, and
          history while mastering the language. We offer cultural insights
          alongside linguistic training, making learning fun and engaging.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Interactive language and culture workshops</span>
          </li>
          <li className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Learn idioms and expressions in real-life contexts</span>
          </li>
          <li className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Boost your confidence in speaking German</span>
          </li>
        </ul>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Enroll Now
        </a>
      </div>
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Learn German with Ease
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Dive into the German language with live interactive classes,
          personalized lessons, and practical exercises. Whether you&apos;re a
          beginner or advancing your skills, we have the perfect course for
          you. Explore grammar, vocabulary, and pronunciation in engaging
          sessions designed for all learners.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Live interactive classes</span>
          </li>
          <li className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Comprehensive grammar & vocabulary training</span>
          </li>
          <li className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Pronunciation practice with real-time feedback</span>
          </li>
        </ul>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Start a test
        </a>
      </div>
       {/* Left Video Section */}
       <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform transition-all duration-300 hover:scale-105">
        <video
          className="w-full h-full object-cover"
          controls
          poster="/placeholder.svg?height=300&width=400"
          autoPlay
          loop
          muted
        >
          <source src="/videos/three.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</section>

<ScrollToTopButton/>
<Testimonial/>
<WhatsAppButton/>
<ScrollBar/>

{/* Why Choose Us Section */}
<section id="why-choose-us" className="py-16 bg-[#19324e] relative overflow-hidden">
  {/* Background SVG */}
  <div className="absolute inset-0 opacity-30">
    <svg
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="why-choose-us-gradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          x2="1000"
          y1="0"
          y2="1000"
        >
          <stop offset="0" stopColor="#4299e1" />
          <stop offset="1" stopColor="#3182ce" />
        </linearGradient>
      </defs>
      <path fill="url(#why-choose-us-gradient)" d="M0 0l1000 1000H0V0z" />
      <path fill="#fff" d="M0 200l1000 800H0V200z" opacity=".1" />
      <path fill="#fff" d="M0 400l1000 600H0V400z" opacity=".1" />
      <path fill="#fff" d="M0 600l1000 400H0V600z" opacity=".1" />
      <path fill="#fff" d="M0 800l1000 200H0V800z" opacity=".1" />
    </svg>
  </div>

  <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative z-10">
    <h2 className="text-4xl font-extrabold text-center text-white mb-12 animate-on-scroll">
      Why Choose Us
    </h2>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Image Section */}
      <div className="animate-on-scroll">
        <Image
          src="https://i.pinimg.com/736x/38/25/3e/38253ea48f3797a6e9ebf2cb8ba71c12.jpg"
          alt="Why Choose Us"
          height={400}
          width={600}
          className="rounded-xl shadow-md w-full transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="space-y-8 animate-on-scroll">
        {[
          {
            title: "Expert Native Tutors",
            description:
              "Learn from experienced native German speakers who are passionate about teaching and can provide authentic language insights.",
          },
          {
            title: "Flexible Learning",
            description:
              "Choose from a variety of scheduling options to fit your busy lifestyle. Learn at your own pace and on your own terms.",
          },
          {
            title: "Personalized Curriculum",
            description:
              "Our courses are tailored to your specific goals and learning style, ensuring rapid and effective progress.",
          },
          {
            title: "Interactive Technology",
            description:
              "Leverage advanced tools and platforms for an engaging and effective learning experience.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 opacity-20 rounded-full -mb-32 -ml-32 animate-pulse" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500 opacity-20 rounded-full -mt-48 -mr-48 animate-pulse" />
</section>



        <section id="courses" className="py-16 bg-gray-100">
  <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
    <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll">Our Courses and Pricing</h2>
    <div className="grid md:grid-cols-3 gap-8 animate-on-scroll">
      {/* Beginner Plan */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">Beginner</h3>
        <ul className="mb-6 text-gray-600">
          <li className="mb-2 flex items-center"><svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Basic grammar and vocabulary</li>
          <li className="mb-2 flex items-center"><svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Simple conversations</li>
          <li className="mb-2 flex items-center"><svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Cultural introduction</li>
          <li className="mb-2 flex items-center"><svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 4 hours of 1-on-1 sessions</li>
          <li className="mb-2 flex items-center"><svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 2 group workshops</li>
        </ul>
        <p className="text-2xl font-bold mb-4 text-center text-blue-600">$100<span className="text-sm font-normal text-gray-600">/month</span></p>
        <Button className="w-full bg-blue-600 hover:bg-blue-600 hover:text-white transition-colors">Choose Plan</Button>
      </div>

      {/* Intermediate Plan */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">Intermediate</h3>
        <ul className="mb-6 text-gray-600">
          <li className="mb-2 flex items-center"><svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Advanced grammar concepts</li>
          <li className="mb-2 flex items-center"><svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Expanded vocabulary</li>
          <li className="mb-2 flex items-center"><svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Conversational fluency</li>
          <li className="mb-2 flex items-center"><svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 8 hours of 1-on-1 sessions</li>
          <li className="mb-2 flex items-center"><svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 4 group workshops</li>
        </ul>
        <p className="text-2xl font-bold mb-4 text-center text-blue-600">$200<span className="text-sm font-normal text-gray-600">/month</span></p>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 hover:text-white transition-colors">Choose Plan</Button>
      </div>

      {/* Advanced Plan */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">Advanced</h3>
        <ul className="mb-6 text-gray-600">
          <li className="mb-2 flex items-center"><svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Complex language structures</li>
          <li className="mb-2 flex items-center"><svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Idiomatic expressions</li>
          <li className="mb-2 flex items-center"><svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Business German</li>
          <li className="mb-2 flex items-center"><svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 12 hours of 1-on-1 sessions</li>
          <li className="mb-2 flex items-center"><svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 6 group workshops</li>
        </ul>
        <p className="text-2xl font-bold mb-4 text-center text-blue-600">$300<span className="text-sm font-normal text-gray-600">/month</span></p>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 hover:text-white transition-colors">Choose Plan</Button>
      </div>
    </div>
  </div>
</section>

 {/* About Team Section */}
 <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
            <h2 className="text-3xl font-bold text-black mb-12 text-center animate-on-scroll">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
              <div className="w-full md:w-1/3 animate-on-scroll">
                <Image src="https://i.pinimg.com/736x/8d/16/90/8d16902ae35c1e982c2990ff85fa11fb.jpg" alt="Team" height={300} width={300} className="rounded-lg shadow-lg w-full" />
              </div>
              <div className="w-full md:w-2/3 animate-on-scroll">
                <h3 className="text-2xl font-semibold mb-4 text-black">Our Expert Tutors</h3>
                <p className="text-black mb-6">
                  Our team consists of certified German language instructors with years of experience in teaching students of all levels. We use modern teaching methods and are passionate about helping you achieve your language learning goals.
                </p>
                <ul className="space-y-2 text-black">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Native German speakers with teaching certifications
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Extensive experience in online language instruction
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Specialized in teaching German for various purposes (academic, business, travel)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        

       {/* Contact Section */}
       <section id="contact" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#19324e]" />
      <div className="absolute inset-0 opacity-30">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="1000" y1="0" y2="1000">
              <stop offset="0" stopColor="#4299e1" />
              <stop offset="1" stopColor="#3182ce" />
            </linearGradient>
          </defs>
          <path fill="url(#a)" d="M0 0l1000 1000H0V0z" />
          <path fill="#fff" d="M0 200l1000 800H0V200z" opacity=".1" />
          <path fill="#fff" d="M0 400l1000 600H0V400z" opacity=".1" />
          <path fill="#fff" d="M0 600l1000 400H0V600z" opacity=".1" />
          <path fill="#fff" d="M0 800l1000 200H0V800z" opacity=".1" />
        </svg>
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center animate-on-scroll text-white">
          Contact Us
        </h2>
        <div className="max-w-xl mx-auto bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg p-8 animate-on-scroll">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
              <Input id="name" type="text" placeholder="John Doe" className="w-full" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Your Email</label>
              <Input id="email" type="email" placeholder="john@example.com" className="w-full" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message</label>
              <Textarea id="message" placeholder="I'd like to learn more about your German courses..." className="w-full min-h-[100px]" />
            </div>
            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium text-gray-700">Preferred Date for Consultation</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 opacity-20 rounded-full -mb-32 -ml-32 animate-pulse" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500 opacity-20 rounded-full -mt-48 -mr-48 animate-pulse" />
    </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
  <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
    <h2 className="text-4xl font-bold text-center mb-12 animate-on-scroll">
      Frequently Asked Questions
    </h2>
    <div className="w-full max-w-3xl mx-auto animate-on-scroll">
      <Accordion type="single" collapsible>
        {[
          {
            value: "item-1",
            question: "What materials are needed for the classes?",
            answer:
              "All you need is a computer or tablet with a stable internet connection. We provide all necessary learning materials digitally.",
          },
          {
            value: "item-2",
            question: "Are classes live or pre-recorded?",
            answer:
              "Our classes are live and interactive, allowing for real-time communication with your tutor and immediate feedback.",
          },
          {
            value: "item-3",
            question: "How do I book a class?",
            answer:
              "You can book a class through our online scheduling system. Once you've signed up, you'll have access to our calendar where you can choose your preferred time slots.",
          },
          {
            value: "item-4",
            question: "What happens if I miss a class?",
            answer:
              "If you miss a class, you can reschedule through our platform or access recorded sessions for later review, depending on your subscription plan.",
          },
          {
            value: "item-5",
            question: "Is there a trial period or money-back guarantee?",
            answer:
              "Yes, we offer a 7-day trial period and a money-back guarantee if you're not satisfied within the first 14 days.",
          },
        ].map(({ value, question, answer }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-lg font-thin">{question}</AccordionTrigger>
            <AccordionContent className="text-md">{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
</section>

      </main>

      <footer className="bg-[#19324e] text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footer-gradient" gradientUnits="userSpaceOnUse" x1="0" x2="1000" y1="0" y2="1000">
              <stop offset="0" stopColor="#4299e1" />
              <stop offset="1" stopColor="#3182ce" />
            </linearGradient>
          </defs>
          <path fill="url(#footer-gradient)" d="M0 0l1000 1000H0V0z" />
          <path fill="#fff" d="M0 200l1000 800H0V200z" opacity=".1" />
          <path fill="#fff" d="M0 400l1000 600H0V400z" opacity=".1" />
          <path fill="#fff" d="M0 600l1000 400H0V600z" opacity=".1" />
          <path fill="#fff" d="M0 800l1000 200H0V800z" opacity=".1" />
        </svg>
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="sr-only">DeutschLernen</span>
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <span className="text-xl font-bold">DeutschLernen</span>
            </Link>
            <p className="text-sm opacity-80">
              Empowering language learners with innovative German courses and resources.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Courses', 'Why Us'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-blue-200 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@deutschlernen.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Language St, Berlin, Germany</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
          <p className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} DeutschLernen. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {[Facebook, Twitter, Instagram].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-blue-200 transition-colors duration-200"
              >
                <Icon size={24} />
                <span className="sr-only">{Icon.name}</span>
              </a>
            ))}
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="#" className="text-sm hover:text-blue-200 transition-colors duration-200 mr-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:text-blue-200 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 opacity-20 rounded-full -mb-32 -ml-32 animate-pulse" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500 opacity-20 rounded-full -mt-48 -mr-48 animate-pulse" />
    </footer>
    </div>
  )
}