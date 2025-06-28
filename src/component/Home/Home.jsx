// import Header from "./sections/Header"
import SliderGif from "./sections/SliderGif"
import About from "./sections/About"
import Community from "./sections/Community"
import Discover from "./sections/Discover"
import Features from "./sections/Features"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Vision from "./sections/Vision"
import Start from "./sections/Start"

const Home = () => {
  return (
    <>
        <Start />
        <Header />
        <SliderGif />
        <About />
        <Features />
        <Discover />
        <Community />
        <Vision />
        <Footer />
    </>
  )
}

export default Home