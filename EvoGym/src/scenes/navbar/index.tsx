import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "./shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center, justify-between";
  const [isMenuEnabled, setIsMenuEnabled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
  <nav>
    <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        {/* LEFT SIDE */}
        <img src={Logo} alt="logo" />

        {/* RIGHT SIDE */}
        {
            isAboveMediumScreens ? (
                <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link 
                      page="Home" 
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                  />
                  <Link 
                      page="Benefits" 
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                  />
                  <Link 
                      page="Our Classes" 
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                  />
                  <Link 
                      page="Contact Us" 
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}> 
                  <p>Sign In</p>
                  <ActionButton setSelectedPage= {setSelectedPagez}> Become a Member </ActionButton>
                </div>
              </div>
            ): (
              <button className="p-2 rounded-full bg-secondary-500"
                onClick = {() => setIsMenuEnabled(!isMenuEnabled)}
                >
                <Bars3Icon className="w-6 h-6 text-white"/>
              </button>
            )
        }
      </div>
    </div>
  </nav>
  )
};

export default Navbar;
