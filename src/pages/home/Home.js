import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Home() {
  return (
    <div className="container-home">
      <div className="header-home">
        <section className="header-text">
          <h1>Let's use bicycles for a better world</h1>
          <p>
            If bikes and ebikes became 22% of all transport trips in all cities
            worldwide,
          </p>
          <p>
            greenhouse gas emissions and energy use would be 47% reduced by 2050
          </p>
        </section>
      </div>

      <h1 className="sub-head">Bike points application</h1>
      <p>
        The purpose of this website is to make it more convenient for people to
        search bike points, encourage more people to travel by bike
      </p>

      <div className="screenshot">
        <div className="screenshot-item">
          <img src="/images/cosy.png" alt="homepage" className="home-image" />
          <h3>Cosy</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="buttonClass">
            <Link to="/bikepoints">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
