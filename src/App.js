import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Manage from "./Components/Manage/Manage";
import Nomatch from "./Components/NoMatch/Nomatch";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Review from "./Components/Review/Review";
import Shop from "./Components/Shop/Shop";
function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Router>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/manage">
              <Manage></Manage>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/product/:productKey">
              <ProductDetails></ProductDetails>
            </Route>
            <Route path="*">
              <Nomatch></Nomatch>
            </Route>
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
