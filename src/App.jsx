import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"
import ProgressBar from "./components/ProgressBar"
import Stats from "./components/Stats"

export default function App() {
  return (
    <div className="bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] antialiased selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100">
<ProgressBar />
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 lg:px-8">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Technologies />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
