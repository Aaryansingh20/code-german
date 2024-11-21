"use client"
import React, { useRef } from 'react';
import { Quote, Star, Languages } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    videoSrc: "/videos/bunny.mp4",
    poster: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80",
    quote: "Learning German with Frau Schmidt has been transformative. Her teaching method makes complex grammar concepts feel natural. Now I'm confidently speaking in business meetings!",
    name: "Sarah Mitchell",
    level: "B2 Level • 6 Months",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
  },
  // Add 4 more testimonials here...
];

function Testimonial() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleVideoEnd = () => {
    // Scroll horizontally to the next testimonial when the video ends
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: window.innerWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 flex items-center">
      <div className="max-w-4xl mx-auto">
        {/* Horizontal Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-8 overflow-x-auto scroll-smooth"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-2/5 aspect-[7/10] bg-slate-100 rounded-xl overflow-hidden shadow-lg"
            >
              <video
                className="w-full h-full object-cover"
                poster={testimonial.poster}
                controls
                autoPlay
                muted
                onEnded={handleVideoEnd} // Trigger scroll when video ends
              >
                <source src={testimonial.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Testimonial Content */}
              <div className="p-4 space-y-4 bg-white bg-opacity-80">
                <div className="flex items-center gap-2">
                  <Languages className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">Success Story</span>
                </div>

                <blockquote className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-200" />
                  <p className="text-lg text-gray-800 leading-relaxed pl-4">
                    {testimonial.quote}
                  </p>
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      height={20}
                      width={20}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.level}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
