import PaymentOptions from "./PaymentOptions";
import "./paymentpagemain.css";
import { Link } from "react-router-dom";
import {logowhite} from "../../../src/allimages";

const PaymentPageMain = () => {
  return (
    <div className="paymentpage-conainer">
      <div className="paymentpage-maindiv">
        <div className="logo-and-text">
          <div className="mmt-logo-white">
          <Link to="/">
            <img className="mmt-logo-white" src={logowhite} alt="logo" />
          </Link>
          </div>
          <p>
            <span>Hey,</span> You are viewing this booking at the best price
          </p>
        </div>
        <div className="safeandsecure-div">
          <div className="safeandsecure-img"></div>
          <p>SAFE & SECURE</p>
        </div>
      </div>
      <PaymentOptions />
    </div>
  );
};

export default PaymentPageMain;
