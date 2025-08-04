import React from 'react'
import Navbar from './components/Navbar'
import ImgCarousel from './components/Imgcarasoul'
import About from './components/About'
import Courses from './components/Courses/coursedemo'
import TestSeriesSection from './components/Courses/Test'
import WhyJoinSection from './components/Whyjoin'
import Footer from './components/Footer'
import ContactSection from './components/Contact'
import ImageGallery from './components/Imagegallery'
import PopupModal from './components/PopupModal'
function App() {
  return (
    <div className="overflow-x-hidden">
     <PopupModal/>
     <Navbar/>
     <ImgCarousel/>
     <About/>
     <Courses/>
     <TestSeriesSection/>
     <WhyJoinSection/>
     <ContactSection/>
     <ImageGallery/>
     <Footer/>
    </div>
  )
}

export default App