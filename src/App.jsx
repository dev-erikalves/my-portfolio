import Header from "./components/Header/Header.jsx"
import SideBar from "./components/SideBar/SideBar.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./styles/app.scss";

export default function App() {
  return (
    <>
        <Header />
        <div className="mainAndSidebar">
          <SideBar />
          <MainContent />
        </div>
          <Footer />
    </>
  )
}