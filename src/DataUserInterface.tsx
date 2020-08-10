/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { IFood } from "./types";
import { CountUp } from "countup.js";

interface IProps {
  selectedItemData: IFood | undefined;
  foodListOpen: boolean;
}

export default class DataUserInterface extends React.Component<IProps> {
  private barStyle = css`
    transition-property: stroke-dasharray;
    transition-duration: 2s;
    transition-timing-function: cubic-bezier(0.12, 0.25, 0.22, 1.55);
  `;

  private verticalBarStyle = css`
    clip-path: url(#barsClip);
    stroke-width: 35px;
  `;

  private currentImageSrc = "";

  public componentDidUpdate(prevProps: IProps) {
    const itemData = this.props.selectedItemData;
    if (itemData) {
      // Save a value in the object just to compare it with the next props.
      this.currentImageSrc = itemData.image;
      // The previous data.
      const prevData = prevProps.selectedItemData;
      // Calories count.
      const caloriesCountUp = new CountUp("caloriesValue", itemData.calories, {
        startVal: prevData ? prevData.calories : 0,
      });
      if (!caloriesCountUp.error) caloriesCountUp.start();
      // Carbs count.
      const carbsCountUp = new CountUp("carbsValueDisplay", itemData.carbs, {
        startVal: prevData ? prevData.carbs : 0,
        decimalPlaces: 1,
      });
      if (!carbsCountUp.error) carbsCountUp.start();
      // Proteins count.
      const proteinsCountUp = new CountUp(
        "proteinsValueDisplay",
        itemData.proteins,
        {
          startVal: prevData ? prevData.proteins : 0,
          decimalPlaces: 1,
        }
      );
      if (!proteinsCountUp.error) proteinsCountUp.start();
      // Fats count.
      const fatsCountUp = new CountUp("fatsValueDisplay", itemData.fats, {
        startVal: prevData ? prevData.fats : 0,
        decimalPlaces: 1,
      });
      if (!fatsCountUp.error) fatsCountUp.start();
      // Fiber count.
      const fiberCountUp = new CountUp("fiberValueDisplay", itemData.fiber, {
        startVal: prevData ? prevData.fiber : 0,
        decimalPlaces: 1,
      });
      if (!fiberCountUp.error) fiberCountUp.start();
    }
  }

  public render() {
    // Values for the SVG image and strokes.
    let image, calories, carbs, proteins, fats, fiber;
    if (this.props.selectedItemData) {
      const item = this.props.selectedItemData;
      image = item.image;
      calories = item.calories;
      carbs = item.carbs;
      proteins = item.proteins;
      fats = item.fats;
      fiber = item.fiber;
    } else {
      image = "";
      calories = 0;
      carbs = 0;
      proteins = 0;
      fats = 0;
      fiber = 0;
    }

    return (
      <svg
        css={css`
          max-width: 350px;
          max-height: 75vh;
        `}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 349.25"
      >
        <image
          css={css`
            transform: ${this.props.foodListOpen ? "scale(0.7)" : "scale(1)"};
            transform-origin: center;
            transform-box: fill-box;
            transition: ${this.currentImageSrc !== image
              ? "transform 0.5s cubic-bezier(0,1.42,1,1.69)"
              : "none"};
          `}
          href={image}
          x="45"
          y="60"
          width="110"
          height="110"
        />
        <g
          css={css`
            fill: none;
            stroke-width: 16px;
            stroke: #ff95d1;
          `}
        >
          <path
            css={css`
              opacity: 0.2;
            `}
            d="M100,207a92,92,0,1,1,92-92A92.1,92.1,0,0,1,100,207Z"
          />
          <path
            d="M100,23A92,92,0,1,1,8,115a92.1,92.1,0,0,1,92-92"
            css={css`
              ${this.barStyle}
              stroke-dasharray: ${calories} 578;
            `}
          />
        </g>
        <g
          css={css`
            font-size: 11px;
            font-family: inherit;
          `}
        >
          <text
            css={css`
              fill: #fff;
            `}
            transform="translate(80.94 10.04)"
          >
            calories
          </text>
          <text
            transform="translate(100 210)"
            css={css`
              text-anchor: middle;
            `}
          >
            <tspan id="caloriesValue">{calories}</tspan> Kcal.
          </text>
        </g>
        <g>
          <clipPath id="barsClip">
            <rect x="82.5" y="234" width="35" height="100" rx="3" ry="3" />
          </clipPath>
          <line
            x1="100"
            y1="234"
            x2="100"
            y2="334"
            css={css`
              ${this.barStyle}
              ${this
                .verticalBarStyle}
              transform: translateX(-75px);
              stroke: #bdf2ff;
              stroke-dasharray: ${carbs} 100;
            `}
          />
          <line
            x1="100"
            y1="234"
            x2="100"
            y2="334"
            css={css`
              ${this.barStyle}
              ${this
                .verticalBarStyle}
              transform: translateX(-25px);
              stroke: #ffae67;
              stroke-dasharray: ${proteins} 100;
            `}
          />
          <line
            x1="100"
            y1="234"
            x2="100"
            y2="334"
            css={css`
              ${this.barStyle}
              ${this.verticalBarStyle}
              transform: translateX(25px);
              stroke: #fffe8f;
              stroke-dasharray: ${fats} 100;
            `}
          />
          <line
            x1="100"
            y1="234"
            x2="100"
            y2="334"
            css={css`
              ${this.barStyle}
              ${this.verticalBarStyle}
              transform: translateX(75px);
              stroke: #d7ff61;
              stroke-dasharray: ${fiber} 100;
            `}
          />
          <g
            css={css`
              opacity: 0.2;
            `}
          >
            <rect
              css={css`
                fill: #d7ff61;
              `}
              x="157.5"
              y="234"
              width="35"
              height="100"
              rx="3"
              ry="3"
            />
            <rect
              css={css`
                fill: #fffe8f;
              `}
              x="107.5"
              y="234"
              width="35"
              height="100"
              rx="3"
              ry="3"
            />
            <rect
              css={css`
                fill: #ffae67;
              `}
              x="57.5"
              y="234"
              width="35"
              height="100"
              rx="3"
              ry="3"
            />
            <rect
              css={css`
                fill: #bdf2ff;
              `}
              x="7.5"
              y="234"
              width="35"
              height="100"
              rx="3"
              ry="3"
            />
          </g>
          <g
            css={css`
              font-size: 11px;
              font-family: inherit;
              fill: #fff;
              & > text {
                text-anchor: middle;
                transition-property: opacity;
                transition-duration: 0.5s;
              }
            `}
          >
            <text transform="translate(175 346)">
              <tspan id="fiberValueDisplay">0.0</tspan> g
            </text>
            <text transform="translate(125 346)">
              <tspan id="fatsValueDisplay">0.0</tspan> g
            </text>
            <text transform="translate(75 346)">
              <tspan id="proteinsValueDisplay">0.0</tspan> g
            </text>
            <text transform="translate(25 346)">
              <tspan id="carbsValueDisplay">0.0</tspan> g
            </text>
            <text transform="translate(175 229)">fiber</text>
            <text transform="translate(125 229)">fats</text>
            <text transform="translate(75 229)">proteins</text>
            <text transform="translate(25 229)">carbs</text>
          </g>
        </g>
      </svg>
    );
  }
}
