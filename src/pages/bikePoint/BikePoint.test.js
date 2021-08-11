import BikePoint from "./BikePoint";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import { StaticRouter as Router } from "react-router-dom";

describe("BikePoint", () => {
  it("renders a bike point", async () => {
    const fakeBikePoint = {
      id: 666,
      commonName: "Chelsea",
      lon: 6.66,
      lat: 7.77,
    };

    const spy = jest.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(fakeBikePoint),
      });
    });

    await act(async () => {
      const bikePoint = render(
        <Router>
          <BikePoint id={666} />
        </Router>
      );
      // screen.debug();
      expect(bikePoint.getByText(/loading/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/Chelsea/i)).toBeInTheDocument();

    // screen.debug();
    spy.mockRestore();
  });
});
