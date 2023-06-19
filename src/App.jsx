import Header from "./pages/home/Header/Header.jsx"
import SideBar from "./pages/home/SideBar/SideBar.jsx";
import MainContent from "./pages/home/MainContent/MainContent.jsx";
import Footer from "./pages/home/Footer/Footer.jsx";
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