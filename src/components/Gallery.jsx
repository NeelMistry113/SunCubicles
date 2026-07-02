const IMG_G1 = 'https://www.figma.com/api/mcp/asset/efe69f22-7b7b-4f5f-ba75-95767c53caf2'
const IMG_G2 = 'https://www.figma.com/api/mcp/asset/e31cb7c2-7acb-45d3-aa78-8c085a005509'
const IMG_G3 = 'https://www.figma.com/api/mcp/asset/f418fc07-5771-42ac-a82e-9e3e6f1f310c'

const galleryImages = [IMG_G1, IMG_G2, IMG_G3]

const highlights = [
  { title: 'Quality Materials', desc: 'Premium HPL boards with superior finish' },
  { title: 'Expert Installation', desc: 'Professional team ensuring perfect fit' },
  { title: 'Timely Delivery', desc: 'On-time project completion guaranteed' },
]

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="w-full"
      style={{ backgroundImage: 'linear-gradient(146.89deg, rgb(249, 250, 251) 0%, rgb(239, 246, 255) 100%)' }}
    >
      <div
        className="flex flex-col items-start gap-[72px] mx-auto"
        style={{ padding: '96px', maxWidth: '1440px' }}
      >
        {/* Heading */}
        <div className="flex flex-col items-center gap-[16px] text-center w-full">
          <h2
            className="font-medium text-[#101828]"
            style={{ fontFamily: 'Geist, Inter, sans-serif', fontSize: '40px', lineHeight: '40px' }}
          >
            Our Work Gallery
          </h2>
          <p
            className="text-[#4a5565]"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '1.3', maxWidth: '598px' }}
          >
            Explore our recent installations and see the quality and craftsmanship that goes into every project we complete.
          </p>
        </div>

        {/* Gallery + highlights */}
        <div className="flex flex-col gap-[48px] w-full">
          {/* 3 equal photo cards */}
          <div className="flex gap-[32px] w-full" style={{ flexWrap: 'wrap' }}>
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden bg-[#f3f4f6] shrink-0"
                style={{
                  flex: '1 0 280px',
                  height: '296px',
                  borderRadius: '16px',
                  boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)',
                  position: 'relative',
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="absolute w-full max-w-none left-0 object-cover"
                  style={{ height: '200%', top: '-50%' }}
                />
              </div>
            ))}
          </div>

          {/* Highlights strip */}
          <div
            className="flex items-start gap-[80px] w-full shrink-0 flex-wrap justify-center"
            style={{
              padding: '48px 96px',
              borderRadius: '16px',
              background: '#ffffff',
              boxShadow: '0px 10px 7.5px rgba(0,0,0,0.1), 0px 4px 3px rgba(0,0,0,0.1)',
            }}
          >
            {highlights.map(({ title, desc }) => (
              <div key={title} className="flex flex-col items-center gap-[16px]" style={{ minWidth: '200px' }}>
                <div
                  className="flex items-center justify-center rounded-full bg-[#dbeafe]"
                  style={{ width: '64px', height: '64px' }}
                >
                  <span
                    className="text-[#155dfc] font-semibold"
                    style={{ fontSize: '24px', lineHeight: '32px' }}
                  >
                    ✓
                  </span>
                </div>
                <div className="flex flex-col items-center gap-[8px] text-center">
                  <p
                    className="text-[#101828]"
                    style={{ fontFamily: 'Geist, Inter, sans-serif', fontSize: '24px', lineHeight: '27px' }}
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
