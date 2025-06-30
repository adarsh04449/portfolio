import Navbar from "./components/Nav/Navbar";
import { SparklesPreview } from "./components/sparkles-preview";
import About from "./components/About/About"
import { Projects } from "./components/Projects/Projects"
import { Experience } from "./components/Experience/Experience";
import Tech from "./components/Tech";

function App() {

  return (
    <>
      <SparklesPreview />
      <About />
      <Projects />
      <Experience />
      <Tech/>
    </>
  )
}

export default App
