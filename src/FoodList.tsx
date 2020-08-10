/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { IFood } from "./types";

interface IProps {
  ClickHandler: (event: React.MouseEvent<HTMLImageElement>) => void;
  foodItems: IFood[];
  open: boolean;
}

export default class FoodList extends React.Component<IProps> {
  public state = {
    selected: "",
  };

  /**
   * Holds a reference to the HTML container of HTML elements that represent the food items.
   */
  private listHTMLContainer!: HTMLElement | null;

  /**
   * Holds a reference to the HTML input element to filter food items.
   */
  private foodListInput!: HTMLInputElement | null;

  private disabledStyle = css`
    top: 300px;
    transform: translateX(-50%);
    left: 50%;
    & > form {
      display: none;
    }
    & > #foodListItems {
      align-items: center;
    }
    & > #foodListItems > img {
      position: absolute;
    }
    & > #foodListItems > img.selected {
      transition: opacity 1s, transform 0.5s;
    }
    & > #foodListItems > img:not(.selected) {
      opacity: 0;
    }
  `;

  private activeStyle = css`
    min-height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    padding: 1.5rem;
    background-color: #89d88deb;
    & > form {
      display: unset;
    }
    & > #foodListItems {
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 1.5rem;
    }
    & > #foodListItems > img {
      width: 50%;
      max-width: 200px;
      padding: 1.2rem;
      cursor: pointer;
      opacity: 1;
      filter: drop-shadow(0px 4px 4px #3e3e3e);
      transition: opacity 1s, transform 0.5s;
    }
    & > #foodListItems > img.selected {
      opacity: 0.3;
      cursor: unset;
    }
    & > #foodListItems > img:not(.selected):hover {
      transform: scale(1.1);
    }
  `;

  public componentDidMount() {
    this.foodListInput = document.getElementById(
      "foodListInput"
    ) as HTMLInputElement;
    this.listHTMLContainer = document.getElementById("foodListItems");
  }

  private onInputHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) {
      return;
    }
    const keyword = event.target.value.toLowerCase();
    this.filterFood(keyword);
  };

  private filterFood = (string: string) => {
    const foodList = this.listHTMLContainer?.children;
    if (foodList) {
      for (let i = 0; i < foodList.length; i++) {
        const item = foodList[i] as HTMLElement;
        if (
          item.dataset.name &&
          !item.dataset.name.toLowerCase().includes(string)
        ) {
          item.style.display = "none";
        } else {
          item.style.display = "unset";
        }
      }
    }
  };

  componentDidUpdate(prevProps: IProps) {
    if (!this.props.open) {
      (this.foodListInput as HTMLInputElement).value = "";
      this.filterFood("");
    }
  }

  public render() {
    return (
      <div
        css={css`
          position: absolute;
          ${this.props.open ? this.activeStyle : this.disabledStyle}
        `}
      >
        <form>
          <input
            id="foodListInput"
            onInput={this.onInputHandler}
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
        <div
          id="foodListItems"
          css={css`
            display: flex;
          `}
        >
          {this.props.foodItems.map((item) => (
            <img
              key={item.name}
              src={item.image}
              alt={item.name}
              data-name={item.name}
              onClick={this.props.ClickHandler}
            />
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
