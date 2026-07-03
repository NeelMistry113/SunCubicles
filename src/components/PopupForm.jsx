import { useState, useEffect } from 'react'

export default function PopupForm() {
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', message: '' })

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will get back to you shortly.')
    setForm({ name: '', email: '', phone: '', city: '', message: '' })
    setVisible(false)
  }

  const inputStyle = {
    background: '#f3f3f5',
    border: '1px solid transparent',
    borderRadius: '8px',
    padding: '10px 12px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    color: '#101828',
    width: '100%',
    outline: 'none',
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-black/50"
        style={{ backdropFilter: 'blur(2px)' }}
        onClick={() => setVisible(false)}
      />

      {/* Modal */}
      <div
        className="fixed z-[101] bg-white rounded-2xl shadow-2xl overflow-y-auto"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(520px, calc(100vw - 32px))',
          maxHeight: 'calc(100vh - 48px)',
          padding: '32px',
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 text-[#99a1af] hover:text-[#101828] transition-colors"
          style={{ background: 'none', border: 'none', cursor: 'pointer', lineHeight: 1 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="flex flex-col gap-[6px] mb-6">
          <p
            className="text-[#101828]"
            style={{ fontFamily: 'Geist, Inter, sans-serif', fontSize: '22px', fontWeight: 500, lineHeight: '1.3' }}
          >
            Get a Free Quote
          </p>
          <p className="text-[#4a5565]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            Fill in your details and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {[
            { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'Enter your name' },
            { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'your.email@example.com' },
            { label: 'Phone Number *', name: 'phone', type: 'tel', placeholder: '+91 90547 15520' },
            { label: 'City *', name: 'city', type: 'text', placeholder: 'Your city' },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name} className="flex flex-col gap-[6px]">
              <label className="text-[#364153]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px' }}>
                {label}
              </label>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={form[name]}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>
          ))}

          <div className="flex flex-col gap-[6px]">
            <label className="text-[#364153]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px' }}>
              Project Details
            </label>
            <textarea
              name="message"
              placeholder="Tell us about your project requirements..."
              value={form.message}
              onChange={handleChange}
              rows={3}
              style={{ ...inputStyle, resize: 'none' }}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#030213] text-white hover:bg-[#1a1a2e] transition-colors"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              padding: '13px 24px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              marginTop: '4px',
            }}
          >
            Send Message
          </button>

          <a
            href="tel:+919054715520"
            className="w-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              color: '#030213',
              padding: '13px 24px',
              borderRadius: '10px',
              border: '1.5px solid rgba(0,0,0,0.12)',
              textDecoration: 'none',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.15 6.15l1.07-.55a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Call Us — +91 90547 15520
          </a>

          <p className="text-center text-[#99a1af]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px' }}>
            We respect your privacy. Your information will not be shared.
          </p>
        </form>
      </div>
    </>
  )
}
