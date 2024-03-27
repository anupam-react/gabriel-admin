import React from "react";
import InfoHeader from "./InfoHeader";
import "./index.scss";
const ReturnForm = ({ handleOpen }) => {
  return (
    <div className="info-container">
      <div className="gift-main">
        <p className="title">Return & Exchange</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => handleOpen(false)}
        />
      </div>
      <hr className="hr2" />
      <InfoHeader />
      <p className="heading-title">Customer Information</p>
      <div className="form-container">
        <div className="input-container">
          <label>Moneychat ID</label>
          <input
            type="text"
            name=""
            id=""
            value="MC12345"
            className="input"
            placeholder=""
          />
        </div>
      </div>
      <p className="heading-title">Original Purchase Details</p>
      <div className="form-container">
        <div className="input-container">
          <label>order number</label>
          <input
            type="text"
            name=""
            id=""
            value="MC12345"
            className="input"
            placeholder=""
          />
        </div>
        <div className="input-container">
          <label>Date of purchase</label>
          <input
            type="text"
            name=""
            id=""
            value="MC12345"
            className="input"
            placeholder=""
          />
        </div>
        <div className="input-container">
          <label>Payment method</label>
          <input
            type="text"
            name=""
            id=""
            value="Linked Card"
            className="input"
            placeholder=""
          />
        </div>
      </div>
      <p className="heading-title">Product Information</p>
      <div className="form-container">
        <div className="input-container">
          <label>Product name or description</label>
          <input
            type="text"
            name=""
            id=""
            value="Dunkins  (Lorem ipsum dolor sit amet consectetur. Eleifend enim quis commodo eget mi a pretium. Faucibus risus purus enim ullamcorper turpis)"
            className="input"
            placeholder=""
          />
        </div>
        <div className="input-container">
          <label>Product ID</label>
          <input
            type="text"
            name=""
            id=""
            value="MC12345"
            className="input"
            placeholder=""
          />
        </div>
        <div className="input-container">
          <label>Type of Product (Return / Exchange)</label>
          <input
            type="text"
            name=""
            id=""
            value="Return"
            className="input"
            placeholder=""
          />
        </div>
        <div className="input-container">
          <label>Condition of the product (unused, worn, damaged, etc.)</label>
          <input
            type="text"
            name=""
            id=""
            value="Un Used"
            className="input"
            placeholder=""
          />
        </div>
      </div>
      <p className="heading-title">Reason for Return or Exchange</p>
      <div className="form-container">
        <div className="input-container">
          <label>
            Specific reason (defective, wrong size/colour, not as described,
            change of mind, etc.)
          </label>
          <input
            type="text"
            name=""
            id=""
            value="Defective"
            className="input"
            placeholder=""
          />
        </div>
        <div className="input-container">
          <label>Product ID</label>
          <input
            type="text"
            name=""
            id=""
            value="MC12345"
            className="input"
            placeholder=""
          />
        </div>
        <div className="input-container">
          <label>Type of Product (Return / Exchange)</label>
          <input
            type="text"
            name=""
            id=""
            value="Return"
            className="input"
            placeholder=""
          />
        </div>
        <div className="input-container">
          <label>
            If the product is defective, a detailed description of the issue.
          </label>
          <input
            type="text"
            name=""
            id=""
            value="Dunkins  (Lorem ipsum dolor sit amet consectetur. Eleifend enim quis commodo eget mi a pretium. Faucibus risus purus enim ullamcorper turpis)"
            className="input"
            placeholder=""
          />
        </div>
      </div>
      <p className="heading-title">Return Policy Verification</p>
      <div className="form-container">
        <div className="input-container">
          <label>
            Checking the product against the company’s return policy{" "}
          </label>
          <input
            type="text"
            name=""
            id=""
            value="Requirement"
            className="input"
            placeholder=""
          />
        </div>
      </div>
      <p className="heading-title">Method of Refund or Exchange</p>
      <div className="form-container">
        <div className="input-container">
          <label>Refund Request</label>
          <input
            type="text"
            name=""
            id=""
            value="To Bank"
            className="input"
            placeholder=""
          />
        </div>
      </div>
      <p className="heading-title">
        Shipping and Handling Information (for online purchases)
      </p>
      <div className="form-container">
        <div className="input-container">
          <label>Original shipping address.</label>
          <input
            type="text"
            name=""
            id=""
            value="(Lorem ipsum dolor sit amet consectetur. Eleifend enim quis commodo eget mi a pretium. Faucibus risus purus enim ullamcorper turpis)"
            className="input"
            placeholder=""
          />
        </div>
        <div className="input-container">
          <label>
            Return shipping address (if different from the original)
          </label>
          <input
            type="text"
            name=""
            id=""
            value="Same as Original"
            className="input"
            placeholder=""
          />
        </div>
        <div className="input-container">
          <label>
            Tracking number for the return shipment (if the return is via mail
            or courier).
          </label>
          <input
            type="text"
            name=""
            id=""
            value="Mail"
            className="input"
            placeholder=""
          />
        </div>
      </div>
      <p className="heading-title">
        Employee Handling the Return (for in-store returns)
      </p>
      <div className="form-container">
        <div className="input-container">
          <label>
            Name or ID of the employee processing the return or exchange
          </label>
          <input
            type="text"
            name=""
            id=""
            value="(Lorem ipsum)"
            className="input"
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
};

export default ReturnForm;
