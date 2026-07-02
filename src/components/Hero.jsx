import { useState, useEffect } from 'react'

const IMG_ARROW = '/icons/icon-arrow.svg'
const IMG_PHONE = '/icons/icon-phone.svg'

const slides = [
  '/icons/carousel1.png',
  '/icons/carousel2.png',
  '/icons/carousel3.png',
  '/icons/carousel4.png',
  '/icons/carousel5.png',
  '/icons/carousel6.png',
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home">
      {/* Desktop */}
      <div
        className="hidden lg:block relative w-full shrink-0 overflow-hidden"
        style={{
          height: '800px',
          backgroundImage: 'linear-gradient(150.94deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 50%, rgb(239, 246, 255) 100%)',
        }}
      >
        {/* Carousel card */}
        <div
          className="absolute overflow-hidden rounded-[16px]"
          style={{
            top: '56px',
            left: '96px',
            right: '96px',
            height: '528px',
            boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
          }}
        >
          {/* Slides */}
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Restroom interior"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
              style={{ opacity: i === current ? 1 : 0 }}
            />
          ))}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Dot indicators */}
          <div className="absolute left-1/2 -translate-x-1/2 flex gap-[8px]" style={{ bottom: '24px' }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  background: 'white',
                  opacity: i === current ? 0.9 : 0.45,
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero content */}
        <div
          className="absolute flex items-center gap-[32px]"
          style={{ top: '608px', left: '96px', right: '96px' }}
        >
          <div className="flex-1 min-w-0">
            <h1
              className="font-medium text-black"
              style={{
                fontFamily: 'Geist, Inter, sans-serif',
                fontSize: '64px',
                lineHeight: '1.1',
                letterSpacing: '-1px',
              }}
            >
              <span className="block">Transform Your</span>
              <span className="block">Restroom Spaces</span>
            </h1>
          </div>

          <div className="flex items-start gap-[24px] shrink-0">
            <a
              href="#contact"
              className="flex items-center gap-[20px] bg-[#030213] text-white hover:bg-[#1a1a2e] transition-colors"
              style={{ padding: '16px 24px', borderRadius: '10px', fontSize: '18px', fontFamily: 'Inter, sans-serif' }}
            >
              Get a Free Quote
              <img src={IMG_ARROW} alt="" className="w-[20px] h-[20px]" />
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-[10px] bg-white hover:bg-gray-50 transition-colors"
              style={{
                padding: '16px 24px',
                borderRadius: '10px',
                fontSize: '18px',
                fontFamily: 'Inter, sans-serif',
                color: '#0a0a0a',
                border: '1.263px solid rgba(0,0,0,0.1)',
              }}
            >
              Call Us
              <img src={IMG_PHONE} alt="" className="w-[16px] h-[16px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="lg:hidden flex flex-col"
        style={{ background: 'linear-gradient(150.94deg, #eff6ff 0%, #fff 50%, #eff6ff 100%)' }}
      >
        <div className="mx-4 mt-6 rounded-2xl overflow-hidden shadow-2xl relative" style={{ height: '260px' }}>
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Restroom interior"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
              style={{ opacity: i === current ? 1 : 0 }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute left-1/2 -translate-x-1/2 flex gap-[6px]" style={{ bottom: '16px' }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '20px' : '6px',
                  height: '6px',
                  background: 'white',
                  opacity: i === current ? 0.9 : 0.45,
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
        <div className="px-6 py-8 flex flex-col gap-6">
          <h1 className="font-semibold text-black text-4xl leading-tight" style={{ fontFamily: 'Geist, Inter, sans-serif' }}>
            Transform Your<br />Restroom Spaces
          </h1>
          <div className="flex flex-col gap-3">
            <a href="#contact" className="flex items-center justify-center gap-3 bg-[#030213] text-white py-4 px-6 rounded-xl text-base font-medium">
              Get a Free Quote →
            </a>
            <a href="tel:+919876543210" className="flex items-center justify-center gap-3 bg-white border border-black/10 text-[#0a0a0a] py-4 px-6 rounded-xl text-base font-medium">
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
