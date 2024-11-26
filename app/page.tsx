"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Menu, X, Facebook, Twitter, Instagram } from 'lucide-react'
import Image from 'next/image'
import Testimonial from './sections/testimonial/page'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import ScrollToTopButton from '@/components/ui/scrollupbtn'
import { motion } from 'framer-motion'
import logo from "@/public/img/code german_ transparent  (1).png"
import CourseGrid from './sections/course-grid/coursegrid'
import CarouselHero from './sections/caroselsection/carosel'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";


export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);
  const [date, setDate] = useState<Date>();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    setModalOpen(false);
  };

  // Automatically open the modal every one minute
  useEffect(() => {
    const interval = setInterval(() => {
      setModalOpen(true);
    }, 120000); // 1 minute = 60000 ms

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

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
    <div className="flex flex-col min-h-screen bg-[#f3e8e3] text-gray-900">
      <main className="flex-grow">
        <div className="bg-[#f3e8e3] shadow-md">
          <header className="mx-auto max-w-[1400px] p-2">
            <div className="flex items-center justify-between px-6 py-2">
              {/* Logo Section */}
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src={logo}
                    alt=''
                    height={40}
                    width={40}
                  />

                  <span className="text-lg font-semibold text-black">Code German</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-10">
                {["About Me", "Courses", "Why Us", "Contact Us"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-lg font-semibold text-black transition-colors duration-200 hover:text-black relative"
                  >
                    <span className="after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
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
                  {["About Me", "Courses", "Why Us", "Contact Us"].map((item) => (
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
        <section
  className="relative bg-cover bg-center text-white py-20 overflow-hidden min-h-screen flex items-center justify-center"
  style={{
    backgroundImage:
      'url(https://images.pexels.com/photos/5473881/pexels-photo-5473881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
  }}
>
  {/* Dynamic background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNncmlkKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-20"></div>
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20"></div>
  </div>

  <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative z-10 text-center">
    <motion.div
      className="flex flex-col items-center"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        variants={itemVariants}
      >
        Master German
        <span className="block text-white">From Anywhere, Anytime!</span>
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl lg:text-2xl mb-8 text-white"
        variants={itemVariants}
      >
        Join personalized online classes designed for learners of all levels.
      </motion.p>
      <motion.div className="space-x-4 mb-12" variants={itemVariants}>
        <Button
          size="lg"
          className="bg-[#f2b31e] hover:bg-[#f9d98c] text-white"
          onClick={() => setModalOpen(true)}
        >
          Contact Us
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-blue border-2 text-white bg-transparent hover:text-white hover:bg-white/20"
          onClick={() => {
            const aboutSection = document.getElementById("courses");
            aboutSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View Course
        </Button>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        variants={itemVariants}
      >
        {[
          { number: "6+", text: "Years of experience" },
          { number: "10k+", text: "students trained" },
          { number: "27+", text: "student enrollment countries" },
        ].map((stat, index) => (
          <div key={index}>
            <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
            <p className="text-base md:text-lg text-white">{stat.text}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  </div>
</section>




        {/* About Services Section */}
        <section id="about" className="py-20 bg-[#f3eeec] relative overflow-hidden">
          {/* Background SVG */}
          

          <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            <h2 className="text-4xl font-extrabold mb-14 text-center text-black animate-on-scroll">
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
          
        </section>


        {/* Video Section */}

        <section className="py-16 bg-[#f3eeec]">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

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
                  href='/quiz'
                  className="inline-block px-6 py-3 lg:w-[25%] text-center bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
                >
                  Start a test
                </a>
              </div>
              {/* Left Video Section */}
              <div className="hidden lg:block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform transition-all duration-300 hover:scale-105">
                <Image
                  src="https://i.pinimg.com/736x/55/4b/57/554b572b7b1a9b88f0dcbc4c48a8b989.jpg"
                  alt=""
                  width={200}
                  height={200}
                  className='w-full h-full object-contain '
                />
              </div>
            </div>
          </div>
        </section>
        <section id="courses" className="py-16 bg-[#f3eeec]">
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
        <ScrollToTopButton />
        <WhatsAppButton />

        {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 bg-[#f3e8e3] relative overflow-hidden">
          {/* Background SVG */}

          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative z-10">
            <h2 className="text-4xl font-extrabold text-center text-black mb-12 animate-on-scroll">
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
        </section>
        <CarouselHero />


        <CourseGrid />
        {/*here*/}


        {/* About Team Section */}
        <section id='about-me' className="py-16 bg-[#f3eeeb]">
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

        {/*contact */}
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Contact Us</DialogTitle>
              <DialogDescription>
                Fill out this form to get in touch with us.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-xl mx-auto bg-white rounded-lg p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Your Name
                      </label>
                      <Input id="name" type="text" placeholder="John Doe" className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Your Email
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="I'd like to learn more about your German courses..."
                        className="w-full min-h-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="date" className="text-sm font-medium text-gray-700">
                        Preferred Date for Consultation
                      </label>
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
            </div>
          </DialogContent>
        </Dialog>
        {/* Testimonials Section */}
        <Testimonial />

        {/* FAQ Section */}
        <section className="py-20 bg-[#f3eeeb]">
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

      <footer className="bg-[#f3e8e3] text-black py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          
        </div>
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <span className="sr-only">DeutschLernen</span>
                <svg
                  className="h-8 w-8 text-black"
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
                      className="hover:underline text-sm"
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
        </footer>
    </div>
  )
}