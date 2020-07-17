/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

interface IProps {
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  active: boolean;
}

export default class ListToggle extends React.Component<IProps> {
  public render() {
    return (
      <button
        onClick={this.props.ClickHandler}
        css={css`
          position: absolute;
          right: 0;
          top: 0;
          background-color: unset;
          border-style: none;
          padding: 1rem;
          cursor: pointer;
          & > svg {
            & > * {
              transition: stroke-dasharray 1s;
            }
            & > .glass {
              stroke-dasharray: ${this.props.active ? "0 16" : "16 16"};
            }
            & > .handle {
              stroke-dasharray: ${this.props.active ? "20 14" : "7.7 14"};
            }
            & > .cross {
              stroke-dasharray: ${this.props.active ? "12 14" : "0 14"};
            }
          }
        `}
      >
        <span className="offscreen">Toggle food list</span>
        <svg
          viewBox="0 0 16 16"
          width="32"
          height="32"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        >
          <path className="glass" d="M 9.5 9.5 A 4 4 0 0 0 2.5 2.5" />
          <path className="glass" d="M 9.5 9.5 A 4 4 0 0 1 2.5 2.5" />
          <line className="handle" x1="15" y1="15" x2="1" y2="1" />
          <polyline className="cross" points="9.5 9.5 8 8 15 1" />
          <polyline className="cross" points="9.5 9.5 8 8 1 15" />
        </svg>
      </button>
    );
  }
}
