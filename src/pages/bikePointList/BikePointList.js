import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BikePointList.css";

export default function BikePointList({ bikePointList }) {
  const [formState, setFormState] = useState({ searchText: "" });
  const [searchResult, setResult] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const arrayResult = bikePointList.filter((point) =>
      point.commonName
        .toLowerCase()
        .includes(formState.searchText.toLowerCase())
    );
    setResult(arrayResult);
  }

  //   handle the input value change
  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  let listToShow = bikePointList;
  if (searchResult) {
    listToShow = searchResult;
  }

  return bikePointList ? (
    <div>
      <h1>List of Bike Points</h1>

      <form onSubmit={handleSubmit} className="search-form">
        <fieldset className="search-field">
          <h2> Search by address or surburb </h2>
          <input
            type="text"
            value={formState.searchText}
            name="searchText"
            placeholder="Chelsea"
            onChange={handleChange}
          />
          <input type="submit" value="Search" />
        </fieldset>
      </form>

      <table className="bike-list">
        <thead>
          <tr>
            <th>ID</th>
            <th>Common Name</th>
            <th>Area</th>
          </tr>
        </thead>
        <tbody>
          {listToShow.map((bikePoint) => (
            <tr key={bikePoint.id}>
              <td>{bikePoint.id}</td>
              <td>
                <Link to={`/bikepoints/${bikePoint.id}`}>
                  {bikePoint.commonName}
                </Link>
              </td>
              <td>{bikePoint.commonName.split(",")[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div>Please wait. Bike points data is loading&hellip;</div>
  );
}
