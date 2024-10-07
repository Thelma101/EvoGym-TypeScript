import Navbar from "@/scenes/navbar";
import { useState } from "react";
import { SelectedPage } from "@/shared/types/"

enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "our-classes",
  ContactUs = "contact-us",
}

function App() {
  const [selectedPage, setSelectedPage ] = useState<SelectedPage>(SelectedPage.Home); 

  return (
    <div className="app bg-gray-20">
      <Navbar 
      selectedPage= {selectedPage}
      setSelectedPage= {setSelectedPage}
      />
    </div>
  )
}

export default App
