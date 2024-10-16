import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "./shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "./shared/ActionButton";

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
                  <ActionButton setSelectedPage= {setSelectedPage}> 
                    Become a Member 
                  </ActionButton>
                </div>
              </div>
            ): (
              <button 
               className="p-2 rounded-full bg-secondary-500"
                onClick = {() => setIsMenuEnabled(!isMenuEnabled)}
                >
                <Bars3Icon className="w-6 h-6 text-white"/>
              </button>
            )}
      </div>
    </div>
    
    {/* MOBILE MENU MODAL */}
    {!isAboveMediumScreens && isMenuEnabled && (
      <div
        className="fixed right-0 bottom-0 h-full bg-primary-100 drop-shadow-xl w-[300px] "
      >
        {/* CLOSE ICON */}
        <div 
          className="flex justify-end p-12"
        >
          <button 
            onClick={() => setIsMenuEnabled(!isMenuEnabled)}
            >
              <XMarkIcon
                className="w-6 h-6 text-gray-400"
              />
            </button>
        </div>
        {/* MOBILE MENU MODAL */}
      </div>
    ) }
  </nav>
  ); 
};

export default Navbar;