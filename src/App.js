import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import BikePointList from "./pages/bikePointList/BikePointList";
import BikePoint from "./pages/bikePoint/BikePoint";
import { getBikePoints } from "./api/bikePointsService";

function App() {
  const [bikePointList, setBikePointList] = useState(null);

  useEffect(() => {
    getBikePoints()
      .then((points) => setBikePointList(points))
      .catch(() => setBikePointList([]));
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/bikepoints/:id" render={() => <BikePoint />} />
            <Route
              path="/bikepoints"
              render={() => <BikePointList bikePointList={bikePointList} />}
            />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
