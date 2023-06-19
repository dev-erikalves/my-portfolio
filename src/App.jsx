import Header from "./pages/home/Header/Header.jsx"
import SideBar from "./pages/home/SideBar/SideBar.jsx";
import AboutMe from "./pages/home/ContentAboutMe/AboutMe.jsx"
import Skills from "./pages/home/ContentSkills/Skills.jsx"
import Projects from "./pages/home/ContentProjects/Projects.jsx"
import Footer from "./pages/home/Footer/Footer.jsx";
import "./styles/app.scss";

export default function App() {
  return (
    <>
      <Header />

      <main className="mainContent">

        <div className="sidebarAboutAndSkills">
          <SideBar />

          <div className="aboutAndSkills">
            <AboutMe />
            <Skills />
          </div>
        </div>
        
        <Projects />
      </main>

      <Footer />
    </>
  )
}