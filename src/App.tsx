
import './App.css'
import { Home } from './componets/home'
import Navbar from './componets/shared/Navbar'
import { useState, useEffect } from "react";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // console.log(lastScrollY>229);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <>
    {lastScrollY>100 && <Navbar showNavbar={showNavbar} />}
     <Home/>

    </>
  )
}

export default App
