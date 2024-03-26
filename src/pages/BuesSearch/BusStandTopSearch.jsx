import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import OutsideClickHandler from "react-outside-click-handler";
import BusTopDropdown from "./BusTopDropdown";

const BusStandTopSearch = ({
  handleSearchData,
  field,
  busData,
  setBusData,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const updateSelectedBusStand = (bus) => {
    const key = field === "To" ? "destination" : "source";
    handleSearchData(key, bus.location);
    setBusData(bus);
  };
  const handleCityDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="bs-busdetails-div" onClick={handleCityDropdown}>
        <p>
          {field} <MdKeyboardArrowDown size={20} />
        </p>
        <p className="bussearch-selecteditem">{busData.location}</p>
      </div>

      {showDropdown && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setShowDropdown(false);
          }}
        >
          <div className="bs-busstand-search-maindiv">
            <BusTopDropdown
              setShowDropdown={setShowDropdown}
              updateSelectedBusStand={updateSelectedBusStand}
            />
          </div>
        </OutsideClickHandler>
      )}
    </>
  );
};

export default BusStandTopSearch;
