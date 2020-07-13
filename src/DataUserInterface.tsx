import React from "react";
import { css } from "@emotion/core";

class DataUserInterface extends React.Component {
  state = {
    food: "",
    calories: 0,
    carbs: 0,
    proteins: 0,
    fats: 0,
    fiber: 0,
    loading: false,
  };

  render() {
    const { calories, carbs, proteins, fats, fiber } = this.state;
    return (
      <svg
        id="nutritionFactsUI"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 349.25"
      >
        <image
          id="selectedFoodImage"
          href=""
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
            id="caloriesBar"
            d="M100,23A92,92,0,1,1,8,115a92.1,92.1,0,0,1,92-92"
            css={css`
              stroke-dasharray: 0 578;
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
            id="caloriesValue"
            transform="translate(100 210)"
            css={css`
              text-anchor: middle;
            `}
          >
            {calories} Kcal.
          </text>
        </g>
        <g>
          <clipPath id="barsClip">
            <rect x="82.5" y="234" width="35" height="100" rx="3" ry="3" />
          </clipPath>
          <line
            id="carbsBar"
            x1="100"
            y1="234"
            x2="100"
            y2="334"
            css={css`
              clip-path: url(#barsClip);
              transform: translateX(-75px);
              stroke: #bdf2ff;
              stroke-width: 35px;
              stroke-dasharray: 0 100;
            `}
          />
          <line
            id="proteinsBar"
            x1="100"
            y1="234"
            x2="100"
            y2="334"
            css={css`
              clip-path: url(#barsClip);
              transform: translateX(-25px);
              stroke: #ffae67;
              stroke-width: 35px;
              stroke-dasharray: 0 100;
            `}
          />
          <line
            id="fatsBar"
            x1="100"
            y1="234"
            x2="100"
            y2="334"
            css={css`
              clip-path: url(#barsClip);
              transform: translateX(25px);
              stroke: #fffe8f;
              stroke-width: 35px;
              stroke-dasharray: 0 100;
            `}
          />
          <line
            id="fiberBar"
            x1="100"
            y1="234"
            x2="100"
            y2="334"
            css={css`
              clip-path: url(#barsClip);
              transform: translateX(75px);
              stroke: #d7ff61;
              stroke-width: 35px;
              stroke-dasharray: 0 100;
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
            id="barsTexts"
            css={css`
              font-size: 11px;
              font-family: inherit;
              fill: #fff;
            `}
          >
            <text id="fiberValue" transform="translate(175 346)">
              {fiber}g
            </text>
            <text id="fatsValue" transform="translate(125 346)">
              {fats}g
            </text>
            <text id="proteinsValue" transform="translate(75 346)">
              {proteins}g
            </text>
            <text id="carbsValue" transform="translate(25 346)">
              {carbs}g
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

export default DataUserInterface;
