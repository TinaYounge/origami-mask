import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SaleProductPage from "./Pages/LandingPage/SaleProductPage";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Container } from "@mui/material";
import SinglePage from "./Pages/LandingPage/SinglePage";
import Cart from "./Pages/LandingPage/Cart";
import PhoneHeader from "./Components/Header/PhoneHeader";
import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const sections = [
    { title: "NEW", url: "/" },
    { title: "Limited", url: "/cart" },
    { title: "Nữ", url: "/woman" },
    { title: "Nam", url: "#" },
    { title: "Trẻ em", url: "#" },
    { title: "Tự thiết kế", url: "#" },
    { title: "Sale", url: "#" },
    { title: "Yêu thích", url: "#" },
  ];
  const { width } = useWindowDimensions();

  return (
    <Router>
      <Container maxWidth="lg">
        {width > 600 ? (
          <Header title="Blog" sections={sections} maxWidth="lg" />
        ) : (
          <PhoneHeader title="Blog" sections={sections} maxWidth="lg" />
        )}
      </Container>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/woman" component={SaleProductPage} />
        <Route exact path="/singleProduct" component={SinglePage} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
