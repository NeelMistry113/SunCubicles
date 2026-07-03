import { useState } from 'react'

const IMG_LOC = '/icons/icon-location.svg'
const IMG_PHONE_W = '/icons/icon-phone-w.svg'
const IMG_MAIL = '/icons/icon-mail.svg'
const IMG_CLOCK = '/icons/icon-clock.svg'

const contactInfo = [
  {
    icon: IMG_LOC,
    title: 'Our Location',
    line1: 'Vaishnodevi, Ahmedabad, Gujrat, India',
    line2: 'Serving all major cities across India',
  },
  {
    icon: IMG_PHONE_W,
    title: 'Phone Number',
    line1: '+91 90547 15520',
    line2: 'Mon - Sat, 9:00 AM - 7:00 PM',
  },
  {
    icon: IMG_MAIL,
    title: 'Email Address',
    line1: 'info@cubiclesolutions.com',
    line2: '24/7 email support',
  },
  {
    icon: IMG_CLOCK,
    title: 'Working Hours',
    line1: 'Monday - Saturday',
    line2: '9:00 AM - 7:00 PM IST',
  },
]

const serviceAreas = ['Ahmedabad', 'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Surat', 'Jaipur', 'All India']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', message: '' })

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will get back to you shortly.')
    setForm({ name: '', email: '', phone: '', city: '', message: '' })
  }

  const inputStyle = {
    background: '#f3f3f5',
    border: '1px solid transparent',
    borderRadius: '8px',
    padding: '8px 12px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    color: '#101828',
    width: '100%',
    outline: 'none',
  }

  return (
    <section id="contact" className="bg-white w-full">
      <div
        className="flex flex-col gap-8 lg:gap-[72px] mx-auto px-4 py-12 lg:px-24 lg:py-24"
        style={{ maxWidth: '1440px' }}
      >
        {/* Heading */}
        <div className="flex flex-col items-center gap-[16px] text-center w-full">
          <h2
            className="font-medium text-[#101828]"
            style={{ fontFamily: 'Geist, Inter, sans-serif', fontSize: 'clamp(28px, 5vw, 40px)', lineHeight: '1.2' }}
          >
            Get In Touch
          </h2>
          <p
            className="text-[#4a5565]"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '1.3', maxWidth: '598px' }}
          >
            Ready to transform your restroom spaces? Contact us for a free consultation and quote. We serve clients across India from our base in Ahmedabad.
          </p>
        </div>

        {/* Two columns */}
        <div className="flex gap-[48px] w-full items-start" style={{ flexWrap: 'wrap' }}>
          {/* Left column */}
          <div className="flex flex-col gap-[32px]" style={{ width: 'min(600px, 100%)', flex: '1 0 280px' }}>
            {/* Blue contact info card */}
            <div
              className="flex flex-col gap-[28px]"
              style={{
                padding: '32px',
                borderRadius: '16px',
                backgroundImage: 'linear-gradient(140.59deg, #155dfc 0%, #193cb8 100%)',
              }}
            >
              <p
                className="text-white"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', lineHeight: '32px' }}
              >
                Contact Information
              </p>

              {contactInfo.map(({ icon, title, line1, line2 }) => (
                <div key={title} className="flex gap-[16px] items-start">
                  <div
                    className="flex items-center justify-center shrink-0 rounded-[10px]"
                    style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.2)' }}
                  >
                    <img src={icon} alt="" className="w-[24px] h-[24px] object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <p className="text-white" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '1.2' }}>{title}</p>
                    <p className="text-[#dbeafe]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '1.2' }}>{line1}</p>
                    <p className="text-[#bedbff]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '1.2' }}>{line2}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Service areas */}
            <div
              className="flex flex-col gap-[12px] p-[24px] rounded-[16px]"
              style={{ background: '#eff6ff', border: '1px solid #dbeafe' }}
            >
              <p className="text-[#101828]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '24px' }}>
                Service Areas
              </p>
              <div className="flex flex-wrap gap-[8px]">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="bg-white text-[#364153]"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      lineHeight: '1.3',
                      padding: '8px 12px',
                      border: '1px solid #bedbff',
                      borderRadius: '9999px',
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div
            id="contact-form"
            className="flex flex-col gap-[24px] self-stretch"
            style={{
              width: 'min(600px, 100%)',
              flex: '1 0 280px',
              padding: '32px',
              borderRadius: '16px',
              background: '#f9fafb',
            }}
          >
            <p
              className="text-[#101828]"
              style={{ fontFamily: 'Geist, Inter, sans-serif', fontSize: '24px', lineHeight: '1.3' }}
            >
              Send Us a Message
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-[42px]">
              <div className="flex flex-col gap-[24px]">
                {[
                  { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'Enter your name' },
                  { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'your.email@example.com' },
                  { label: 'Phone Number *', name: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
                  { label: 'City *', name: 'city', type: 'text', placeholder: 'Your city' },
                ].map(({ label, name, type, placeholder }) => (
                  <div key={name} className="flex flex-col gap-[8px]">
                    <label
                      className="text-[#364153]"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '1.3' }}
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      value={form[name]}
                      onChange={handleChange}
                      required
                      style={{ ...inputStyle }}
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-[13px]">
                  <label
                    className="text-[#364153]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '1.3' }}
                  >
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project requirements..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    style={{ ...inputStyle, resize: 'none' }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[12px]">
                <button
                  type="submit"
                  className="w-full bg-[#030213] text-white hover:bg-[#1a1a2e] transition-colors"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    padding: '14px 24px',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Send Message
                </button>
                <p
                  className="text-center text-[#4a5565]"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', lineHeight: '1.3' }}
                >
                  We respect your privacy. Your information will not be shared with third parties.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
