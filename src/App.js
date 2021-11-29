import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SaleProductPage from "./Pages/LandingPage/SaleProductPage";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Container, containerClasses } from "@mui/material";
import SinglePage from "./Pages/LandingPage/SinglePage";

function App() {
  const sections = [
    { title: "NEW", url: "#" },
    { title: "リミテッド", url: "#" },
    { title: "レディース", url: "/woman" },
    { title: "メンズ", url: "#" },
    { title: "キッド", url: "#" },
    { title: "あなたのデザイン", url: "#" },
    { title: "ストーリー", url: "#" },
    { title: "連絡先", url: "#" },
    { title: "スタイル", url: "#" },
  ];
  return (
    <Router>
      <Container maxWidth="lg">
        {" "}
        <Header title="Blog" sections={sections} maxWidth="lg" />
      </Container>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/woman" component={SaleProductPage} />
        <Route exact path="/singleProduct" component={SinglePage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
