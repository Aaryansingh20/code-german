"use client"
import React, { useState, useEffect } from 'react';
import { Quote, Star, Languages, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoEnd = () => {
    if (currentIndex < 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-4 sm:gap-8 relative">
          {/* Testimonials Section */}
          <div className="flex-grow w-full order-2">
            {/* Testimonial 1 */}
            {currentIndex === 0 && (
              <div className="flex flex-col lg:flex-row bg-slate-100 rounded-xl overflow-hidden shadow-lg lg:items-center">
                <div className="w-full lg:w-2/5 aspect-[9/16] max-w-[240px] mx-auto">
                  <video
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80"
                    controls
                    autoPlay
                    muted
                    onEnded={handleVideoEnd}
                    ref={videoRef}
                  >
                    <source src="/videos/one.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="w-full lg:w-3/5 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2">
                    <Languages className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">Success Story</span>
                  </div>
                  <blockquote className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-200" />
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed pl-4">
                      Learning German with Frau Schmidt has been transformative. Her teaching method makes complex grammar concepts feel natural. Now I&apos;m confidently speaking in business meetings!
                    </p>
                  </blockquote>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                    <div className="flex items-center gap-3">
                      <Image height={48} width={48} src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80" alt="Sarah Mitchell" className="w-12 h-12 rounded-full object-cover border-2 border-blue-100" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Sarah Mitchell</h3>
                        <p className="text-sm text-gray-600">B2 Level • 6 Months</p>
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
            )}

            {/* Testimonial 2 */}
            {currentIndex === 1 && (
              <div className="flex flex-col lg:flex-row bg-slate-100 rounded-xl overflow-hidden shadow-lg lg:items-center">
                <div className="w-full lg:w-2/5 aspect-[9/16] max-w-[240px] mx-auto">
                  <video
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80"
                    controls
                    autoPlay
                    muted
                    onEnded={handleVideoEnd}
                    ref={videoRef}
                  >
                    <source src="/videos/two.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="w-full lg:w-3/5 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2">
                    <Languages className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">Success Story</span>
                  </div>
                  <blockquote className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-200" />
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed pl-4">
                      The approach taken here helped me learn the language quickly. I&apos;m already applying my German skills in professional settings.
                    </p>
                  </blockquote>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                    <div className="flex items-center gap-3">
                      <Image height={48} width={48} src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80" alt="John Doe" className="w-12 h-12 rounded-full object-cover border-2 border-blue-100" />
                      <div>
                        <h3 className="font-semibold text-gray-900">John Doe</h3>
                        <p className="text-sm text-gray-600">C1 Level • 3 Months</p>
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
            )}

            {/* Testimonial 3 */}
            {currentIndex === 2 && (
              <div className="flex flex-col lg:flex-row bg-slate-100 rounded-xl overflow-hidden shadow-lg lg:items-center">
                <div className="w-full lg:w-2/5 aspect-[9/16] max-w-[240px] mx-auto">
                  <video
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80"
                    controls
                    autoPlay
                    muted
                    onEnded={handleVideoEnd}
                    ref={videoRef}
                  >
                    <source src="/videos/one.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="w-full lg:w-3/5 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2">
                    <Languages className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">Success Story</span>
                  </div>
                  <blockquote className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-200" />
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed pl-4">
                      My fluency has improved so much, and I can now have full conversations with native speakers.
                    </p>
                  </blockquote>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                    <div className="flex items-center gap-3">
                      <Image height={48} width={48} src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80" alt="Alex Johnson" className="w-12 h-12 rounded-full object-cover border-2 border-blue-100" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Alex Johnson</h3>
                        <p className="text-sm text-gray-600">B1 Level • 4 Months</p>
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
            )}

            {/* Testimonial 4 */}
            {currentIndex === 3 && (
              <div className="flex flex-col lg:flex-row bg-slate-100 rounded-xl overflow-hidden shadow-lg lg:items-center">
                <div className="w-full lg:w-2/5 aspect-[9/16] max-w-[240px] mx-auto">
                  <video
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80"
                    controls
                    autoPlay
                    muted
                    onEnded={handleVideoEnd}
                    ref={videoRef}
                  >
                    <source src="/videos/two.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="w-full lg:w-3/5 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2">
                    <Languages className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">Success Story</span>
                  </div>
                  <blockquote className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-200" />
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed pl-4">
                      I couldn&apos;t believe how quickly I learned! The exercises were really practical and helped me apply the language in my everyday life.
                    </p>
                  </blockquote>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                    <div className="flex items-center gap-3">
                      <Image height={48} width={48} src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80" alt="Mark Brown" className="w-12 h-12 rounded-full object-cover border-2 border-blue-100" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Mark Brown</h3>
                        <p className="text-sm text-gray-600">A2 Level • 2 Months</p>
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
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="relative w-full">
  <button
    onClick={handlePrev}
    className="absolute left-0 mt-60 top-1/2 transform -translate-y-1/2 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    disabled={currentIndex === 0}
    aria-label="Previous testimonial"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
  <button
    onClick={handleNext}
    className="absolute right-0  mt-60  top-1/2 transform -translate-y-1/2 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    disabled={currentIndex === 3}
    aria-label="Next testimonial"
  >
    <ChevronRight className="w-6 h-6" />
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default Testimonial;

