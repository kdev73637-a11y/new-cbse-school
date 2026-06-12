import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-amber-50 py-14 md:py-24 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-float stagger-3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-3xl animate-float stagger-5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold mb-5 shadow-sm animate-fade-in-down">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Admissions Open 2026-27
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Welcome to <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">Our School</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-8 max-w-lg">
            CBSE-style learning, modern infrastructure, and a student-friendly campus. 
            We nurture every child&apos;s potential through innovative teaching and holistic development.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/admissions" className="btn-shine px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-semibold hover:from-blue-800 hover:to-indigo-800 transition shadow-xl shadow-blue-500/25 animate-scale-in stagger-2">
              Apply Now
            </Link>
            <Link href="/infrastructure" className="px-8 py-3.5 rounded-xl border-2 border-blue-700 text-blue-700 font-semibold hover:bg-blue-50 transition shadow-sm animate-scale-in stagger-3">
              Virtual Tour
            </Link>
          </div>
        </div>

        {/* Professional image frame with animation */}
        <div className={`relative transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
          <div className="image-frame animate-pulse-glow">
            <div className="image-frame-inner">
              <div className="bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                {/* Decorative grid pattern */}
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle, #1e40af 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                
                {/* Main illustration */}
                <div className="relative z-10 text-center p-8 animate-float">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30 rotate-3 hover:rotate-0 transition-transform duration-500">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">Excellence in Education</p>
                  <p className="text-sm text-gray-500 mt-1">Since 2010</p>
                </div>

                {/* Floating badge elements */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg animate-float stagger-2">
                  <p className="text-xs text-gray-500">Students</p>
                  <p className="text-lg font-bold text-blue-700">1000+</p>
                </div>
                <div className="absolute bottom-6 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg animate-float stagger-4">
                  <p className="text-xs text-gray-500">Pass Rate</p>
                  <p className="text-lg font-bold text-green-600">98%</p>
                </div>
                <div className="absolute top-1/2 -right-2 bg-amber-400 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg animate-bounce-soft">
                  A+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
