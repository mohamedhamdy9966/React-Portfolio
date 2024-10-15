import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Main from "./components/main/Main"
import MyWork from "./components/mywork/MyWork"
import Navbar from "./components/navbar/Navbar"
import Services from "./components/services/Services"

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Services />
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
