import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import AboutPage from "./pages/About/AboutPage";
import Contact from "./pages/Contact/Contact";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/Cart/CartPage";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import Authpage from "./pages/Auth/Authpage";

function App() {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/products">
            <ProductPage />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route exact path="/authentication">
            <Authpage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
