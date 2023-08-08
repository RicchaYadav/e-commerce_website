import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Order";
import Continue from "./Continue";


const promise =loadStripe("pk_test_51Nac0oSDRHjuFL5VxqcbCfuyFzuUT2oZP7jWpDhP075zHk9He3TRaijH4mRQ1M7XvWJtRLMQrl7Jom1BuI2YuZFb008aqb2MWW")

function App() {

  const [{user},dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
  return (
    <Router>
      <div className="app">
      
          <Routes>
            <Route exact path="/"  element={
                  <>
                    <Header />
                    <Home />
                  </>
                }>
            </Route>

            <Route path="/checkout" element={
              <>
              <Header />
              <Checkout />
              
             </>
            }></Route>

            <Route path="/payment" element={
              <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
              
              
             </>
            }></Route>

            <Route path="/login" element={<Login/>}></Route>
            <Route path="/Orders" element={<Orders/>}></Route>
            <Route path="/Continue" element={<Continue/>}></Route>
            
          </Routes>

      </div>
    </Router>
  );
}
// "sk_test_51Nac0oSDRHjuFL5VCutjrqgSAQyA9xbrXyDBPNRRN3gxQqJev1jkZkGKBmxzP053PodTB5VlmxOBM5vix4KIwK8Q00khwgfnJW"
export default App;
