import React from "react";
import "./hotelsearch.css";
import { Link } from "react-router-dom";
import { Box, Skeleton } from "@mui/material";

const HotelCard = ({ data, loading }) => {
  return (
    <>
      <div className="mainsearchresultspage">
        <h3>Popular in {data?.data?.hotels[0]?.location}</h3>

        {loading &&
          new Array(20)
            .fill("")
            .map((_, i) => (
              <Skeleton key={i} width={940} height={400} animation="wave" />
            ))}
        {data?.data?.hotels.map((hotel, index) => (
          <div key={index} className="showhoteldiv">
            <Link to={`/singlehotel/${hotel._id}`}>
              <div className="hotelsdetailsdiv">
                <div className="hoteldetails-leftdiv">
                  <div className="hotelimagesdiv">
                    <div className="mainimagediv">
                      <img src={hotel?.images[0]} />
                    </div>
                    <div className="subimagediv">
                      <img src={hotel?.images[1]} />
                      <img src={hotel?.images[2]} />
                      <img src={hotel?.images[3]} />
                      <img src={hotel?.images[1]} />
                    </div>
                  </div>
                  <div className="hoteldescriptiondiv">
                    <div className="hotelname-rating-div">
                      <h4>{hotel?.name}</h4>
                    </div>
                    <p className="hotellocation">
                      <span>{hotel?.location} </span>
                    </p>
                    <div className="couplefriendly">Couple Friendly</div>
                  </div>
                </div>
                <div className="hoteldetails-rightdiv">
                  <div className="ratingpointdiv">
                    <span>Very Good</span>
                    <span>{hotel?.rating}</span>
                  </div>
                  {/* <p className="numberofratings">266 Ratings</p> */}
                  <div className="hotelbookingprice">
                    <h2>₹ {parseFloat(hotel?.avgCostPerNight).toFixed(0)}</h2>
                    <p>+ ₹ {hotel?.rooms[0].costDetails.taxesAndFees}</p>
                    <p>Per Night</p>
                  </div>
                  <p className="linktologin">Login to Book Now & Pay Later!</p>
                </div>
              </div>
              <p className="offerplan">
                Exclusive Offer on SBI Credit Cards. Get INR 1264 Off
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default HotelCard;