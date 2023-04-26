import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./sceens/Navbar";
import DotGroup from "./sceens/DotGroup";


function App() {

  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage("home")
      }
      if(window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])



  return (
    <div className="app bg-deep-blue">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        <DotGroup
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
         />
    </div>
  );
}

export default App;
