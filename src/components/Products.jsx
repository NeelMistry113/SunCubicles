const IMG_CHECKMARK = '/icons/icon-check.svg'

const colors = [
  { name: 'White', bg: '#ffffff', border: '2px solid #e5e7eb' },
  { name: 'Beige', bg: '#f5f5dc' },
  { name: 'Light Gray', bg: '#d3d3d3' },
  { name: 'Dark Gray', bg: '#696969' },
  { name: 'Navy Blue', bg: '#1e3a8a' },
  { name: 'Sky Blue', bg: '#0ea5e9' },
  { name: 'Mint Green', bg: '#6ee7b7' },
  { name: 'Olive Green', bg: '#84cc16' },
  { name: 'Cream', bg: '#fef3c7' },
  { name: 'Peach', bg: '#fed7aa' },
  { name: 'Brown', bg: '#92400e' },
  { name: 'Black', bg: '#000000' },
]

const features = [
  'High-pressure laminate (HPL) finish',
  'Water and moisture resistant',
  'Scratch and impact resistant',
  'Easy to clean and maintain',
  'Anti-bacterial coating available',
  'Fire-retardant options',
  'Customizable dimensions',
  'Quick installation process',
]

const specs = [
  { label: 'Thickness', value: '10mm – 25mm' },
  { label: 'Material', value: 'HPL / Compact' },
  { label: 'Size', value: 'Customizable' },
  { label: 'Warranty', value: '5 Years' },
]

export default function Products() {
  return (
    <section
      id="products"
      className="w-full"
      style={{ backgroundImage: 'linear-gradient(142.62deg, rgb(249, 250, 251) 0%, rgb(239, 246, 255) 100%)' }}
    >
      <div
        className="flex flex-col items-center gap-8 lg:gap-[72px] mx-auto px-4 py-12 lg:px-24 lg:py-24"
        style={{ maxWidth: '1440px' }}
      >
        {/* Heading */}
        <div className="flex flex-col items-center gap-[16px] text-center w-full">
          <h2
            className="font-medium text-[#101828]"
            style={{ fontFamily: 'Geist, Inter, sans-serif', fontSize: 'clamp(28px, 5vw, 40px)', lineHeight: '1.2' }}
          >
            Products
          </h2>
          <p
            className="text-[#4a5565]"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(15px, 2.5vw, 18px)', lineHeight: '1.5', maxWidth: '598px' }}
          >
            Premium quality cubicle boards available in multiple colors and finishes to perfectly match your interior design requirements.
          </p>
        </div>

        {/* Two panels */}
        <div
          className="flex items-start w-full"
          style={{ gap: '48px', flexWrap: 'wrap' }}
        >
          {/* Colors panel */}
          <div
            className="flex flex-col gap-[32px] shrink-0"
            style={{
              width: 'min(600px, 100%)',
              padding: '32px',
              borderRadius: '16px',
              background: '#ffffff',
              boxShadow: '0px 10px 7.5px rgba(0,0,0,0.1), 0px 4px 3px rgba(0,0,0,0.1)',
            }}
          >
            <p
              className="text-[#101828]"
              style={{ fontFamily: 'Geist, Inter, sans-serif', fontSize: '24px', lineHeight: '1.2' }}
            >
              Available Colors
            </p>
            <div className="flex flex-col gap-[24px] w-full">
              <p className="text-[#4a5565]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '1.3' }}>
                Choose from our wide range of colors to complement your space. Custom colors available on request.
              </p>
              {/* Grid */}
              <div className="grid grid-cols-4 gap-[16px] w-full">
                {colors.map(({ name, bg, border }) => (
                  <div key={name} className="flex flex-col gap-[8px] items-center">
                    <div
                      className="w-full rounded-[10px] relative"
                      style={{
                        aspectRatio: '1',
                        backgroundColor: bg,
                        border: border || 'none',
                        boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)',
                      }}
                    />
                    <span
                      className="text-[#4a5565] text-center w-full"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', lineHeight: '16px' }}
                    >
                      {name}
                    </span>
                  </div>
                ))}
              </div>
              {/* Note */}
              <div
                className="flex items-center justify-center p-[16px] rounded-[10px]"
                style={{ background: '#eff6ff', border: '1px solid #dbeafe' }}
              >
                <p className="text-[#1c398e] text-center" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '1.2' }}>
                  Note: Custom colors and finishes available. Contact us for more options.
                </p>
              </div>
            </div>
          </div>

          {/* Features + Specs panel */}
          <div
            className="flex flex-col justify-between self-stretch shrink-0"
            style={{
              width: 'min(600px, 100%)',
              flex: '1 0 300px',
              padding: '32px',
              borderRadius: '16px',
              background: '#ffffff',
              boxShadow: '0px 10px 7.5px rgba(0,0,0,0.1), 0px 4px 3px rgba(0,0,0,0.1)',
              gap: '32px',
            }}
          >
            {/* Features */}
            <div className="flex flex-col gap-[24px]">
              <p
                className="text-[#101828]"
                style={{ fontFamily: 'Geist, Inter, sans-serif', fontSize: '24px', lineHeight: '1.2' }}
              >
                Product Features
              </p>
              <ul className="flex flex-col gap-[16px]">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-[12px]">
                    <img src={IMG_CHECKMARK} alt="" className="w-[20px] h-[20px] shrink-0 object-contain" />
                    <span className="text-[#364153]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '1.2' }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs — blue card */}
            <div
              className="flex flex-col gap-[20px] rounded-[16px]"
              style={{
                padding: '24px',
                backgroundImage: 'linear-gradient(140.59deg, #155dfc 0%, #193cb8 100%)',
              }}
            >
              <p
                className="text-white"
                style={{ fontFamily: 'Geist, Inter, sans-serif', fontSize: '20px', lineHeight: '1.2' }}
              >
                Specifications
              </p>
              <div className="grid grid-cols-2 gap-[16px]">
                {specs.map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-[4px]">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>{label}</p>
                    <p className="text-white font-semibold" style={{ fontFamily: 'Geist, Inter, sans-serif', fontSize: '16px' }}>{value}</p>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="flex items-center justify-center w-full bg-white hover:bg-blue-50 transition-colors"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: '#155dfc',
                  padding: '12px',
                  borderRadius: '10px',
                  fontWeight: '500',
                }}
              >
                Request Specifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
