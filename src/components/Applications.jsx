const IMG_RESTAURANT = '/icons/Restaurants & Cafes.png'
const IMG_THEATER = '/icons/Movie Theaters.png'
const IMG_MALL = '/icons/Shopping Malls.png'
const IMG_OFFICE = '/icons/Corporate Offices.png'
const IMG_HOTEL = '/icons/carousel1.png'
const IMG_AIRPORT = '/icons/Airports & Stations.png'

const IMG_IC8 = '/icons/icon-restaurant.svg'
const IMG_IC9 = '/icons/icon-theater.svg'
const IMG_IC10 = '/icons/icon-mall.svg'
const IMG_IC11 = '/icons/icon-office.svg'
const IMG_IC12 = '/icons/icon-hotel.svg'
const IMG_IC13 = '/icons/icon-airport.svg'

const applications = [
  {
    title: 'Restaurants & Cafes',
    desc: 'Perfect for food establishments requiring hygienic and stylish restroom solutions.',
    images: [IMG_RESTAURANT],
    icon: IMG_IC8,
  },
  {
    title: 'Movie Theaters',
    desc: 'Durable solutions designed for high-traffic entertainment venues.',
    images: [IMG_THEATER],
    icon: IMG_IC9,
  },
  {
    title: 'Shopping Malls',
    desc: 'Premium quality partitions for modern retail environments.',
    images: [IMG_MALL],
    icon: IMG_IC10,
  },
  {
    title: 'Corporate Offices',
    desc: 'Professional and elegant washroom cubicles for business environments.',
    images: [IMG_OFFICE],
    icon: IMG_IC11,
  },
  {
    title: 'Hotels & Resorts',
    desc: 'Luxury finishes for hospitality spaces demanding premium quality.',
    images: [IMG_HOTEL],
    icon: IMG_IC12,
  },
  {
    title: 'Airports & Stations',
    desc: 'Heavy-duty partitions for transportation hubs with constant usage.',
    images: [IMG_AIRPORT],
    icon: IMG_IC13,
  },
]

function AppCard({ title, desc, images, icon }) {
  return (
    <div
      className="flex flex-col justify-between overflow-hidden shrink-0 bg-white border border-[#f3f4f6]"
      style={{
        width: 'min(395px, 100%)',
        flex: '1 0 280px',
        height: '326px',
        borderRadius: '14px',
        boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)',
      }}
    >
      {/* Image area */}
      <div className="relative shrink-0 w-full overflow-hidden" style={{ height: '192px' }}>
        {images.map((src, i) => (
          <div key={i} className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src={src}
              alt=""
              className="absolute w-full max-w-none left-0 object-cover"
              style={{ height: '100%', top: '0' }}
            />
          </div>
        ))}
        {/* White icon chip */}
        <div
          className="absolute bg-white flex items-center justify-center rounded-[10px]"
          style={{ bottom: '16px', left: '16px', width: '48px', height: '48px' }}
        >
          <img src={icon} alt="" className="w-[24px] h-[24px] object-contain" />
        </div>
      </div>

      {/* Text area */}
      <div className="flex flex-col gap-[12px] p-[24px]">
        <p
          className="text-[#101828]"
          style={{ fontFamily: 'Geist, Inter, sans-serif', fontSize: 'clamp(18px, 3vw, 24px)', lineHeight: '1.2' }}
        >
          {title}
        </p>
        <p
          className="text-[#4a5565]"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '1.3' }}
        >
          {desc}
        </p>
      </div>
    </div>
  )
}

export default function Applications() {
  return (
    <section id="applications" className="bg-white w-full">
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
            Applications & Industries
          </h2>
          <p
            className="text-[#4a5565]"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(15px, 2.5vw, 18px)', lineHeight: '1.5', maxWidth: '598px' }}
          >
            Our cubicle solutions are trusted across various commercial sectors, providing durability and elegance in every installation.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {applications.map((a) => <AppCard key={a.title} {...a} />)}
        </div>
      </div>
    </section>
  )
}
