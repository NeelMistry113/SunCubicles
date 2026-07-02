import Header from './components/Header'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Products from './components/Products'
import Applications from './components/Applications'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Products />
        <Applications />
        {/* <Gallery /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
