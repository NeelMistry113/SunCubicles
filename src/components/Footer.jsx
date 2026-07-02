const IMG_LOGO = '/icons/logo.svg'
const IMG_LINKEDIN = '/icons/icon-linkedin.svg'
const IMG_INSTA = '/icons/icon-instagram.svg'
const IMG_TWITTER = '/icons/icon-facebook.svg'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Applications', href: '#applications' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const services = ['HPL Cubicles', 'Compact Boards', 'Custom Colors', 'Installation', 'Consultation', 'Warranty Service']
const socials = [IMG_LINKEDIN, IMG_INSTA, IMG_TWITTER]

export default function Footer() {
  return (
    <footer className="w-full bg-[#030213]">
      <div
        className="mx-auto flex flex-col gap-[48px] px-4 py-12 lg:px-24 lg:py-24"
        style={{ maxWidth: '1440px' }}
      >
        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {/* Brand col */}
          <div className="flex flex-col gap-[16px]">
            <div className="flex items-center h-[32px]">
              <img src={IMG_LOGO} alt="SunCubicles logo" className="h-[32px] w-auto object-contain brightness-0 invert" />
            </div>
            <p
              className="text-[#99a1af]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '20px' }}
            >
              Premium quality restroom cubicle solutions for commercial spaces across India.
            </p>
            <div className="flex gap-[12px] items-center">
              {socials.map((src, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center rounded-[10px] hover:bg-[#2a3a4e] transition-colors"
                  style={{ width: '36px', height: '36px', background: '#1e2939' }}
                >
                  <img src={src} alt="" className="w-[16px] h-[16px] object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-[16px]">
            <p className="text-white" style={{ fontFamily: 'Geist, Inter, sans-serif', fontSize: '18px', lineHeight: '1.3' }}>
              Quick Links
            </p>
            <ul className="flex flex-col gap-[12px]">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-[#99a1af] hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '1.3' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-[16px]">
            <p className="text-white" style={{ fontFamily: 'Geist, Inter, sans-serif', fontSize: '18px', lineHeight: '1.3' }}>
              Services
            </p>
            <ul className="flex flex-col gap-[12px]">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-[#99a1af]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '1.3' }}>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-[16px]">
            <p className="text-white" style={{ fontFamily: 'Geist, Inter, sans-serif', fontSize: '18px', lineHeight: '1.3' }}>
              Contact
            </p>
            <ul className="flex flex-col gap-[12px]">
              {['Ahmedabad, Gujarat, India', '+91 98765 43210', 'info@cubiclesolutions.com', 'Mon–Sat, 9AM–7PM IST'].map((t) => (
                <li key={t}>
                  <span className="text-[#99a1af]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '1.3' }}>
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#1e2939]" />

        {/* Bottom bar */}
        <div className="flex items-center justify-between w-full" style={{ flexWrap: 'wrap', gap: '12px' }}>
          <p
            className="text-[#99a1af]"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '1.3' }}
          >
            © {new Date().getFullYear()} SunCubicles. All rights reserved.
          </p>
          <p
            className="text-[#99a1af]"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '1.3' }}
          >
            Made with ♥ in Ahmedabad, India
          </p>
        </div>
      </div>
    </footer>
  )
}
