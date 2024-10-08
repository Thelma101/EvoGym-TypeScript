import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";


type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
        className="px-10 py-2 rounded-md bg-secondary-500 hover:bg-primary-500 hover:text-white"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        // href="#contact-us"
        href={`#${SelectedPage.ContactUs}`}
        >
    </AnchorLink>
  )
}

export default ActionButton