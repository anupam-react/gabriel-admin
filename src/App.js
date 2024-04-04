import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./utiils/PrivateRoutes";
import Login from "./components/Login";
import Register from "./components/Register";
import Document from "./components/Document";
import Help from "./components/Help";
import Forgot from "./components/Help/Forgot";
import Transaction from "./components/Transaction.jsx";
import CustomerInfo from "./components/customerInfo/index.jsx";
import SalesAnalytics from "./components/SalesAnalytics/index.jsx";
import LoyaltyProgram from "./components/LoyaltyProgram/index.jsx";
import PointSystemForm from "./components/LoyaltyProgram/PointSystemForm.jsx";
import StampSystemForm from "./components/LoyaltyProgram/StampSystemForm.jsx";
import StampPreview from "./components/LoyaltyProgram/StampPreview.jsx";
import SavingForm from "./components/LoyaltyProgram/SavingForm.jsx";
import SavingPreview from "./components/LoyaltyProgram/SavingPreview.jsx";
import PointForm from "./components/LoyaltyProgram/PointForm.jsx";
import PointPreview from "./components/LoyaltyProgram/PointPreview.jsx";
import DigitalReceipt from "./components/DigitalReceipt/index.jsx";
import Inventory from "./components/Inventory/index.jsx";
import AddProduct from "./components/Inventory/AddProduct.jsx";
import AddOutlate from "./components/Inventory/AddOutlate.jsx";
import ExitingOutlate from "./components/Inventory/ExitingOutlate.jsx";
import AddOutlate2 from "./components/Inventory/AddOutlate2.jsx";
import ProductDetails from "./components/Inventory/ProductDetails.jsx";
import CustomerGift from "./components/Inventory/CustomerGIft.jsx";
import GiftPreview from "./components/Inventory/GiftPreview.jsx";
import Promote from "./components/Inventory/Promote.jsx";
import ReviewCampaign from "./components/Inventory/ReviewCampaign.jsx";
import AdPreview from "./components/Inventory/AdPreview.jsx";
import Payment from "./components/Inventory/Payment.jsx";
import CustomizedGift from "./components/Inventory/CustomizedGift.jsx";
import CustomizedPreview from "./components/Inventory/CustomizedPreview.jsx";
import EditProduct from "./components/Inventory/EditProduct.jsx";
import EditProduct2 from "./components/Inventory/EditProduct2.jsx";
import Comparison from "./components/Comparison/index.jsx";
import PromoCode from "./components/PromoCode/index.jsx";
import Purchases from "./components/Purchases/index.jsx";
// import FeedBack from "./components/FeedBack/index.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/customer" element={<CustomerInfo />} />
          <Route path="/sales" element={<SalesAnalytics />} />
          <Route path="/loyalty" element={<LoyaltyProgram />} />
          <Route path="/loyalty/point-system" element={<PointSystemForm />} />
          <Route
            path="/loyalty/point-system/review"
            element={<PointSystemForm isReview={true} />}
          />
          <Route path="/loyalty/stamp-system" element={<StampSystemForm />} />
          <Route
            path="/loyalty/stamp-system/review"
            element={<StampSystemForm isReview={true} />}
          />
          <Route
            path="/loyalty/stamp-system/preview"
            element={<StampPreview />}
          />
          <Route path="/loyalty/saving" element={<SavingForm />} />
          <Route
            path="/loyalty/saving/review"
            element={<SavingForm isReview={true} />}
          />
          <Route path="/loyalty/saving/preview" element={<SavingPreview />} />
          <Route path="/loyalty/point" element={<PointForm />} />
          <Route
            path="/loyalty/point/review"
            element={<PointForm isReview={true} />}
          />
          <Route path="/loyalty/point/preview" element={<PointPreview />} />
          <Route path="/receipt" element={<DigitalReceipt />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/add-product" element={<AddProduct />} />
          <Route path="/inventory/add-outlate" element={<AddOutlate />} />
          <Route
            path="/inventory/existing-outlate"
            element={<ExitingOutlate />}
          />
          <Route path="/inventory/adding-outlate" element={<AddOutlate2 />} />
          <Route path="/inventory/edit-product" element={<EditProduct />} />
          <Route path="/inventory/edit-prod" element={<EditProduct2 />} />
          <Route
            path="/inventory/product-details"
            element={<ProductDetails />}
          />
          <Route path="/inventory/customer-gift" element={<CustomerGift />} />
          <Route path="/inventory/preview-gift" element={<GiftPreview />} />
          <Route
            path="/inventory/customized-gift"
            element={<CustomizedGift />}
          />
          <Route
            path="/inventory/customized-preview"
            element={<CustomizedPreview />}
          />
          <Route path="/inventory/promote" element={<Promote />} />
          <Route
            path="/inventory/review-campaign"
            element={<ReviewCampaign />}
          />
          <Route path="/inventory/ad-preview" element={<AdPreview />} />
          <Route
            path="/inventory/ad-confirm"
            element={<AdPreview isPay={true} />}
          />
          <Route path="/inventory/payment" element={<Payment />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/promo-code" element={<PromoCode />} />
          <Route path="/purchases" element={<Purchases />} />
          {/* <Route path="/feedback" element={<FeedBack />} /> */}
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/documents" element={<Document />} />
        <Route path="/help" element={<Help />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </div>
  );
}

export default App;
