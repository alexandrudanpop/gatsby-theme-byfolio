import React from "react"
import { css } from "@emotion/core"

const styles = {
  button: css`
    --primary-color: white;
    --btn-padding: 6px 10px 6px 10px;
    --btn-border-width: 1px;
    --btn-border-style: solid;
    --btn-border-color: var(--secondary-color);
    --btn-radius: 6px;
    --btn-color: black;
    --btn-bg: var(--primary-color);
    --btn-border-color: var(--btn-bg);

    outline: 0;
    cursor: pointer;
    position: relative;
    padding: var(--btn-padding);
    color: var(--btn-color, #000);
    background: var(--btn-bg, #fff);
    border: var(--btn-border-width) var(--btn-border-style)
      var(--btn-border-color);
    border-radius: var(--btn-radius);
    font-size: 14px;
    margin: 0.1rem;
    min-width: 100px;

    :hover {
      filter: brightness(90%);
    }

    :focus {
      filter: brightness(90%);
      border: 1px solid black;
    }
  `,
}

export const Button = ({ children, ...rest }) => (
  <button css={styles.button} {...rest}>
    {children}
  </button>
)
