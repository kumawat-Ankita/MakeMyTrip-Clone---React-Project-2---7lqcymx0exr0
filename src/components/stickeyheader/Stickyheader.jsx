import React, { useContext, useState } from "react";
import "./stickyheader.css";
import {logoblue} from "../../../src/allimages";
import { BsChevronDown } from "react-icons/bs";
import TabforLogin from "../Login/TabforLogin";
import { Link, createSearchParams } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { SlLogout } from "react-icons/sl";
import { SlHandbag } from "react-icons/sl";
import { toast } from "react-toastify";
import LoginContext from "../../Context/LoginContext";

export const Stickyheader = () => {
  const { showLogin, setShowLogin } = useContext(LoginContext);
  const [isHovered, setIsHovered] = useState(false);
  const { authenticated, logoutUser } = useAuthContext();
  const [searchData, setSearchData] = useState({
    location: "Delhi",
    
  });
  const [searchDataFlight, setSearchDataFlight] = useState({
    source: "PNQ",
    destination: "JAI",
    day: "Mon",
    date: new Date().toLocaleDateString(),
  });
  const [searchDataTrain, setSearchDataTrain] = useState({
    source: "Delhi Junction",
    destination: "Salem Junction",
    day: "Tue",
    date: new Date().toLocaleDateString(),
  });
  const [searchDataBus, setSearchDataBus] = useState({
    source: "Mumbai, Maharashtra",
    destination: "Jabalpur, Madhya Pradesh",
    day: "Mon",
    date: new Date().toLocaleDateString(),
  });

  const openMyStuffHover = () => {
    setIsHovered(true);
  };
  const closeMyStuffHover = () => {
    setIsHovered(false);
  };

  const handleOpenLogin = () => {
    setShowLogin(true);
  };
  const handleSignout = () => {
    logoutUser();
    toast.success("user Loggedout successfully!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="stickyheaderpage">
      <div className="stickyheadermaindiv">
        <Link to="/">
          <div className="bluelogodiv">
            <img src={logoblue} alt="mmtbluelogo" />
          </div>
        </Link>
        <Link to="/" className="sticky-linktohome">
          <div className="stickynavlinks">
            <ul className="navlinkslist">
              <li>
              <Link to={`/Flights?${createSearchParams(searchDataFlight)}`}>
              <div className="sh-flightsimg"></div>
                <div>Flights</div>
             </Link>
              </li>
              <li>
              <Link to={`/hotels?${createSearchParams(searchData)}`}>
              <div className="sh-hotelimg"></div>
                  <div>Hotels</div>
             </Link>
              </li>
              <li>
                <div className="sh-homestaysimg"></div>
                <div>Homestays & Villas</div>
              </li>
              <li>
                <div className="sh-holidayimg"></div>
                <div>Holiday Packages</div>
              </li>
              <li>
              <Link to={`/trains?${createSearchParams(searchDataTrain)}`}>
                <div className="sh-trainimg"></div>
                <div>Trains</div>
                </Link>
              </li>
              <li>
              <Link to={`/buses?${createSearchParams(searchDataBus)}`}>
                <div className="sh-busesimg"></div>
                <div>Buses</div>
                </Link>
              </li>
              <li>
                <div className="sh-cabsimg"></div>
                <div>Cabs</div>
              </li>
              <li>
                <div className="sh-foreximg"></div>
                <div>Forex Card & Currency</div>
              </li>
              <li>
                <div className="sh-travelinsuranceimg"></div>
                <div>Travel Insurance</div>
              </li>
            </ul>
          </div>
        </Link>
        {authenticated ? (
          <div
            className="afterloginorcreateaccntsticky"
            onMouseEnter={openMyStuffHover}
            onMouseLeave={closeMyStuffHover}
          >
            <div className="loginlogoafterlogin">
              <p>T</p>
            </div>
            <div>Hi Traveller</div>
            <BsChevronDown />
            <div
              className="stickyuserDropdown"
              style={{ display: isHovered ? "block" : "none" }}
            >
              <Link to="/mytrips">
                <li className="fadeIndown">
                  <SlHandbag className="mt-1" />
                  <h2>My Trips</h2>
                </li>
              </Link>
              <li className="logoutbtn" onClick={handleSignout}>
                <SlLogout className="mt-1" />
                <h2>Logout</h2>
              </li>
            </div>
          </div>
        ) : (
          <div className="sh-logindropdown" onClick={handleOpenLogin}>
            <div className="sh-loginlogo">
              <div className="sh-loginlogowhite"></div>
            </div>
            <div className="login-para">
              Login or <br /> Create Account
            </div>
          </div>
        )}

        <div className="sh-countryselectmaindiv">
          <div className="country">Country</div>
          <div className="sh-bottomdiv">
            <div className="sh-flag"></div>
            <span className="sh-countryindia">India</span>
          </div>
        </div>
        <div className="sh-languageselector">
          <div className="sh-language">Language</div>
          <div className="sh-language-btm">
            <span>ENG</span>
          </div>
        </div>
      </div>
      {showLogin && <TabforLogin />}
    </div>
  );
};
