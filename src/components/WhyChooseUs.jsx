const IMG_ICON1 = '/icons/icon-quality.svg'
const IMG_ICON2 = '/icons/icon-water.svg'
const IMG_ICON3 = '/icons/icon-team.svg'
const IMG_ICON4 = '/icons/icon-trusted.svg'

const features = [
  {
    icon: IMG_ICON1,
    title: 'Premium Quality',
    desc: 'High-grade materials ensuring durability and longevity in all environments.',
  },
  {
    icon: IMG_ICON2,
    title: 'Water & Stain Resistant',
    desc: 'Advanced coating technology for easy maintenance and hygiene.',
  },
  {
    icon: IMG_ICON3,
    title: 'Expert Team',
    desc: 'Experienced professionals for consultation, installation, and support.',
  },
  {
    icon: IMG_ICON4,
    title: 'Trusted Brand',
    desc: 'Serving commercial spaces across India with excellence and reliability.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-white w-full">
      <div
        className="flex flex-col items-center gap-8 lg:gap-[72px] w-full mx-auto px-4 py-12 lg:px-24 lg:py-24"
        style={{ maxWidth: '1440px' }}
      >
        {/* Heading */}
        <div
          className="flex flex-col items-center gap-[16px] text-center"
          style={{ maxWidth: '641px' }}
        >
          <h2
            className="font-medium text-[#101828] w-full"
            style={{ fontFamily: 'Geist, Inter, sans-serif', fontSize: 'clamp(28px, 5vw, 40px)', lineHeight: '1.2' }}
          >
            Why Choose Us?
          </h2>
          <p
            className="text-[#4a5565] w-full"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(15px, 2.5vw, 18px)', lineHeight: '1.5' }}
          >
            We specialize in providing top-quality cubicle solutions for commercial restrooms, combining functionality with aesthetic appeal.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full flex flex-col gap-[16px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] w-full">
            {features.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col justify-between border border-[#dbeafe]"
                style={{
                  padding: '24px',
                  borderRadius: '14px',
                  minHeight: '220px',
                  backgroundImage: 'linear-gradient(140.19deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 100%)',
                }}
              >
                {/* Icon */}
                <div
                  className="bg-[#155dfc] flex items-center justify-center shrink-0"
                  style={{ width: '56px', height: '56px', borderRadius: '10px' }}
                >
                  <img src={icon} alt="" className="w-[28px] h-[28px] object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-[16px]">
                  <p
                    className="text-[#101828]"
                    style={{ fontFamily: 'Geist, Inter, sans-serif', fontSize: '24px', lineHeight: '1.2' }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-[#4a5565]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '1.3' }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

