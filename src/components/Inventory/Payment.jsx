import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { DialogDefault } from "../common/DilogBox";
const Payment = () => {
  const [isSuccess, setSuccess] = useState(false);
  const [isReview, setReview] = useState(false);
  const [isLive, setLive] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setReview(true);
    }, 1000);
    setTimeout(() => {
      setReview(false);
      setLive(true);
    }, 2000);
    setTimeout(() => {
      setLive(false);
      // navigate("/inventory");
    }, 3000);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Payment</p>
        <div
          className="flex items-center px-6 h-12"
          style={{
            backgroundColor: "#FFFFFF",
            width: "20rem",
            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="../../image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none w-48 bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="payment-container">
        <div>
          <p className="font-bold text-xl text-black pb-4">
            Let’s Make Payment
          </p>
          <p className="pb-4">
            To start your subscription, input your card details to make payment.
            you will be redirected to your banks authorization page .{" "}
          </p>
          <div className="payment-input-container">
            <label htmlFor="">Cardholder’s Name</label>
            <input type="text" name="" id="" value="PAULINA CHIMAROKE" />
          </div>
          <div className="payment-input-container">
            <label htmlFor="">Card Number</label>
            <input
              type="text"
              name=""
              id=""
              value="9870 3456 7890 6473"
              className="cardN-input"
            />
            <img src="../mastercard 1.png" alt="" className="visa-logo" />
          </div>
          <div className="flex justify-between">
            <div className="payment-input-container">
              <label htmlFor="">Expiry</label>
              <input type="text" name="" id="" value="03 / 25" />
            </div>
            <div className="payment-input-container">
              <label htmlFor="">CVC</label>
              <input type="text" name="" id="" value="654" />
            </div>
          </div>
          <button
            className="loyalty-button1"
            style={{ width: "180px", marginTop: "20px" }}
            onClick={handleSubmit}
          >
            Pay £450
          </button>
        </div>
        <div className="payment-card">
          <p>You’re paying,</p>
          <p className="text-[24px] font-bold text-black pb-3">£450.00</p>
          <hr />
          <div className="flex justify-between font-bold text-black mt-2">
            <p>Campaign Run</p>
            <p>£1/Day</p>
          </div>
        </div>
      </div>
      <DialogDefault open={isSuccess} handleOpen={setSuccess}>
        <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-[20px]">
            Successfully !!!! <br />
            Payment has been Done
          </p>
        </div>
      </DialogDefault>
      <DialogDefault open={isReview} handleOpen={setReview}>
        <div className="alert">
          <img src="../emojione-monotone_hourglass-not-done.png" alt="" />
          <p className="text-center text-[20px]">
            Your #promotionName is under review
          </p>
        </div>
      </DialogDefault>
      <DialogDefault open={isLive} handleOpen={setLive}>
        <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-[20px]">
            Congratulations! Your #promotionName is Live!
          </p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default Payment;
