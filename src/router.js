import React from "react";
import { Switch, Route } from "react-router-dom";
import Collections from "./components/Collections/Collections";
import HotDeals from "./components/HotDeals/HotDeals";
import Business from "./components/Business/Business";
import Home from "./Home";
import BusinessSolution from "./components/BusinessSolution/BusinessSolution";
import ContactUs from "./components/ContactUs/ContactUs";
import Applications from "./components/Applications/Applications";
import WebDevelopment from "./components/WebDevelopment/WebDevelopment";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AndroidDevelopment from "./components/AndroidDevelopment/AndroidDevelopment";
import iosDevelopment from "./components/iosDeveleopment/iosDevelopment";
import AI from "./components/AI/AI";
import Maintainance from "./components/Maintainance/Maintainance";
import UI from "./components/UIdesign/UI";
import corporateOutsourcing from "./components/CorporateOutsourcing/corporateOutsourcing";
import privacy from "./components/Privacypolicy/privacy";
import Accounts from "./components/Accounts/Accounts";
import Logins from "./components/Logins/Logins";

const BaseRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/collections/" component={Collections} />
      <Route exact path="/hotdeals/" component={HotDeals} />
      <Route exact path="/business/" component={Business} />
      <Route exact path="/businessSolution" component={BusinessSolution} />
      <Route exact path="/contactus" component={ContactUs} />
      <Route exact path="/applications" component={Applications} />
      <Route exact path="/webdevelopment" component={WebDevelopment} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/android-development" component={AndroidDevelopment} />
      <Route exact path="/ios-development" component={iosDevelopment} />
      <Route exact path="/artificial-intelligence" component={AI} />
      <Route exact path="/maintainance-and-support" component={Maintainance} />
      <Route exact path="/ui-design" component={UI} />
      <Route
        exact
        path="/corporate-outsourcing"
        component={corporateOutsourcing}
      />
      <Route exact path="/privacy-policy" component={privacy} />
      <Route exact path="/accounts" component={Accounts} />
      <Route exact path="/logins" component={Logins} />
    </Switch>
  );
};

export default BaseRoute;
