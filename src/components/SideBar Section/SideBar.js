import Collect from "../Collect Section/Collect";
import Customize from "../Customize Section/Customize";
import SideFooter from "../SideBarFooter Section/SideFooter";
import "./SideBar.css";

const SideBar = () => {

  return (
    <div className="sidebar">
      <div className="sidebar fixed">
        {/* Customize Section: Starts */}
          <Customize />
        {/* Customize Section: Ends  */}
       
        {/* Collect Section Starts */}
          <Collect />
        {/* Collect Section Ends */}

        {/* SideBar Section: Starts */}
          <SideFooter />
        {/* SideBar Section: Ends */}
      </div>
    </div>
  )
}

export default SideBar;