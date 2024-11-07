import NavBar from "../../components/NavBar/NavBar.tsx"
import About from "./sections/About/About"
import Foot from "./sections/Foot/Foot.tsx"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects.tsx"
import Skills from "./sections/Skills/Skills"

const Home = () =>{
  

    return (
      <>
        <NavBar />
        <Hero />
        <About />
        <Projects /> 
        <Skills />
        <Foot />
      </>
    )
  }
  
  export default Home
  