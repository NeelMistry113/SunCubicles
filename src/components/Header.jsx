import { useState } from 'react'

const IMG_LOGO = '/icons/logo.svg'
const IMG_PHONE = '/icons/icon-phone.svg'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Applications', href: '#applications' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Desktop */}
      <div
        className="hidden lg:flex items-center justify-between w-full bg-white"
        style={{
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          boxShadow: '0px 4px 3px rgba(0,0,0,0.1), 0px 2px 2px rgba(0,0,0,0.1)',
          padding: '24px 96px',
        }}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center shrink-0">
          <img src={IMG_LOGO} alt="SunCubicles logo" className="h-[32px] w-auto object-contain" />
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-[32px] text-[#364153]" style={{ fontSize: '16px' }}>
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-[#030213] transition-colors leading-[24px]">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-[16px]">
          <a href="tel:+919876543210" className="flex items-center gap-[8px] h-[20px] text-[#364153] text-[14px] hover:text-[#030213] transition-colors">
            <img src={IMG_PHONE} alt="" className="w-[16px] h-[16px]" />
            <span className="leading-[20px]">Call Us</span>
          </a>
          <a
            href="#contact-form"
            className="flex items-center justify-center bg-[#030213] text-white text-[14px] leading-[20px] rounded-[8px] hover:bg-[#1a1a2e] transition-colors"
            style={{ width: '96px', height: '36px' }}
          >
            Get Quote
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="lg:hidden flex items-center justify-between bg-white px-6 py-4"
        style={{ boxShadow: '0px 4px 3px rgba(0,0,0,0.1)' }}
      >
        <a href="#home" className="flex items-center">
          <img src={IMG_LOGO} alt="SunCubicles logo" className="h-8 w-auto object-contain" />
        </a>
        <button onClick={() => setOpen(!open)} className="p-2 text-[#364153]">
          {open
            ? <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            : <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          }
        </button>
      </div>
      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3 shadow-lg z-50">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-[#364153] text-base py-1 hover:text-[#030213]" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-3">
            <a href="tel:+919876543210" className="text-sm text-[#364153]">📞 +91 98765 43210</a>
            <a href="#contact-form" onClick={() => setOpen(false)} className="bg-[#030213] text-white text-sm py-2.5 rounded-lg text-center">Get Quote</a>
          </div>
        </div>
      )}
    </header>
  )
}
