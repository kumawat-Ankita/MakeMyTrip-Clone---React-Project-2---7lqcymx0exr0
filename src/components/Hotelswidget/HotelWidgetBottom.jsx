import React from "react";
import Offers from "../offers/Offers";
import DownloadApp from "../downloadapp/DownloadApp";
import ForexWidget from "../forexwidget/ForexWidget";

const HotelWidgetBottom = () => {
  return (
    <div>
      <Offers />
      <DownloadApp />
      <ForexWidget />
    </div>
  );
};

export default HotelWidgetBottom;
