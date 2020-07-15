/** @jsx jsx */
import React from "react";
import ReactDOM from "react-dom";
import { css, jsx } from "@emotion/core";
import DataUserInterface from "./DataUserInterface";
import FoodList from "./FoodList";
import ListToggle from "./ListToggle";
import { IFood } from "./types";

class App extends React.Component {
  public state = {
    selectedItem: undefined as undefined | IFood,
    foodItems: [] as IFood[],
    foodListOpen: false,
  };

  public componentDidMount() {
    // Fetch the food data from the Google Sheet
    // Example of the data that should be received.
    const foodItems = [
      {
        name: "food1",
        calories: 10,
        carbs: 20,
        proteins: 30,
        fats: 40,
        fiber: 50,
        image: "avocado.svg",
      },
      {
        name: "food2",
        calories: 15,
        carbs: 25,
        proteins: 35,
        fats: 45,
        fiber: 55,
        image: "banana.svg",
      },
    ];
    this.setState({ foodItems: foodItems });
  }

  public render() {
    return (
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 0.8rem;
          min-height: 100vh;
        `}
      >
        <h1
          css={css`
            display: flex;
            align-items: center;
            align-self: flex-start;
            margin: 0;
            height: 8vh;
            max-height: 1.8rem;
            font-size: 1rem;
          `}
        >
          Nutrition facts
        </h1>
        <h2
          css={css`
            display: flex;
            align-items: center;
            margin: 0;
            height: 10vh;
            max-height: 6.5rem;
            font-size: 2rem;
          `}
        >
          {this.state.selectedItem ? this.state.selectedItem.name : ""}
        </h2>
        <DataUserInterface
          selectedItem={this.state.selectedItem}
          foodListOpen={this.state.foodListOpen}
        />
        <FoodList foodItems={this.state.foodItems} />
        <ListToggle />
        <p
          css={css`
            flex-grow: 1;
            display: flex;
            align-items: flex-end;
            height: 7vh;
            padding: 0.4rem;
            margin: 0;
            font-size: 0.8rem;
            & > a {
              color: #999;
            }
          `}
        >
          Data source&nbsp;
          <a href="https://medicinainformacion.com/">Medicina Información</a>
        </p>
        <a
          href="https://github.com/juanramoncarceles/nutritional-facts"
          target="_blank"
          css={css`
            width: 30px;
            height: 30px;
            position: absolute;
            bottom: 5px;
            right: 5px;
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));