import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { RecoilRoot } from 'recoil';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Kr67EJsxpRH9smiVHbxmogutwO92w8dmTUErkRtIsIo0lR7kyfyeVnULRoQlry9byYbS8Uhk5Mq4xegT2bB9n9F00hv3OFGM5');

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Elements stripe={stripePromise}>
  <GoogleOAuthProvider clientId="620789512619-pk4vhkcqcmds8ilf8u7ckgpvojeh1oum.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
        <ToastContainer />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
  </Elements>
);
