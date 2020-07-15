/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { IFood } from "./types";

interface IProps {
  foodItems: IFood[];
}

export default class FoodList extends React.Component<IProps> {
  public state = {
    selected: "",
    open: false,
  };

  disabledStyle = css`
    top: 300px;
    transform: translateX(-50%);
    left: 50%;
    & > form {
      display: none;
    }
    & > .food-list-items {
      display: flex;
      align-items: center;
    }
    & > .food-list-items > img {
      position: absolute;
    }
    & > .food-list-items > img.selected {
      transition: opacity 1s, transform 0.5s;
    }
    & > .food-list-items > img:not(.selected) {
      opacity: 0;
    }
  `;

  activeStyle = css`
    min-height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    padding: 1.5rem;
    background-color: #89d88deb;
    & > form {
      display: unset;
    }
    & > .food-list-items {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 1.5rem;
    }
    & > .food-list-items > img {
      width: 50%;
      max-width: 200px;
      padding: 1.2rem;
      cursor: pointer;
      opacity: 1;
      filter: drop-shadow(0px 4px 4px #3e3e3e);
      transition: opacity 1s, transform 0.5s;
    }
    & > .food-list-items > img.selected {
      opacity: 0.3;
      cursor: unset;
    }
    & > .food-list-items > img:not(.selected):hover {
      transform: scale(1.1);
    }
  `;

  public render() {
    return (
      <div
        css={css`
          position: absolute;
          ${this.state.open ? this.activeStyle : this.disabledStyle}
        `}
        id="foodList"
        className="disabled"
        data-active="false"
      >
        <form>
          <input
            id="foodListInput"
            css={css`
              margin: auto;
              display: block;
              border-radius: 4px;
              font-size: 1.4rem;
              padding: 0.6rem;
              background-color: #adefb0eb;
              width: 70%;
              max-width: 400px;
              font-family: inherit;
              border-top-style: none;
              border-right-style: none;
              border-left-style: none;
              border-bottom: 4px solid #f4ff00;
            `}
            type="text"
            placeholder="Search food..."
          />
        </form>
        <div id="food-list-items">
          {this.props.foodItems.map((item) => (
            <img key={item.name} src={item.image} alt={item.name} />
          ))}
          {/* <img
            id="banana"
            data-name="Banana"
            src="src/food-svg/banana.svg"
            alt="banana"
          />
          <img
            id="peanuts"
            data-name="Peanuts"
            src="src/food-svg/peanuts.svg"
            alt="peanuts"
          />
          <img
            id="avocado"
            data-name="Avocado"
            src="src/food-svg/avocado.svg"
            alt="avocado"
          />
          <img
            id="cowMilk"
            data-name="Cow milk"
            src="src/food-svg/cow-milk.svg"
            alt="cow milk"
          />
          <img
            id="broccoli"
            data-name="Broccoli"
            src="src/food-svg/broccoli.svg"
            alt="broccoli"
          />
          <img
            data-name="placeholder"
            src="src/food-svg/placeholder.svg"
            alt=""
          /> */}
        </div>
      </div>
    );
  }
}
