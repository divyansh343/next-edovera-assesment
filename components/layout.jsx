import Footer from "./footer"
import Label from "./landing/Label"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-r
    from-base-300
    via-blue-900
    to-accent  `}" data-theme="light">
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
      {/* <Label/> */}
    </div>
  )
}

export default Layout