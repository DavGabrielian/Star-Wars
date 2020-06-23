import React, { Component } from "react";
import Header from "../header";
import ItemList from "../item-list";
import RandomPlanet from "../random-planet";
import PersonDetails from "../person-details";
import ErrorButton from "../error-button/index";
import ErrorIndicator from "../error-indicator/index";
import "./app.css";
import PeoplePage from "../people-page/people-page";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="stardb-app">
        <Header />
        {planet}
        <div>
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>

          <ErrorButton />
        </div>

        <PeoplePage />
        <br/>
        <PeoplePage />
        <br/>
        <PeoplePage />


      </div>
    );
  }
}
