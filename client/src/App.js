import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import About from "./Pages/About/About";
import Features from "./Pages/Features/Features";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Donate from "./Pages/Donate/Donate";
import Download from "./Pages/Download/Download";
import Support from "./Components/Support/Support";
import FAQ from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import './admin/Dashboard/Dashboard.css';


import AppAdmin from "./admin/AppAdmin";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>       
            <Route path="/">
              <Nav  />
              <div className="app_container">
                <Route path="/" strict exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/features" component={Features} />
                <Route path="/donate" component={Donate} />
                <Route path="/faq" component={FAQ} />
                <Route path="/support" component={Support} />
                <Route path="/contactus" component={ContactUs} />
                <Route path="/download" component={Download} />
                <Route path="/blog" component={Blog} />
                <div className="wrapper">
        <Route path='/admin'>
        <AppAdmin/>
        
 
  </Route>
</div>
                <Footer />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
