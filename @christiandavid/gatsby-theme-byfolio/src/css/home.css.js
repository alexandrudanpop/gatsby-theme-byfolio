import { css } from "@emotion/core"

const styles = {
  blackColor: css`
    color: #000;
  `,
  dataSection: css`
    height: 100%;
    color: #fff;
  `,
  dataContainer: css`
    margin: 0 auto;
    /* padding: 0 3rem; */
    max-width: 700px;
    height: 100%;
  `,
  dataContent: css`
    position: relative;
    top: 14vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    /* todo - remove if not needed */
    .Typewriter {
      font-size: 1.5em;
    }
  `,
  dataContentItem: css`
    flex-basis: 350px;
    flex-grow: 1;
    text-align: center;
  `,
  image: css`
    border-radius: 80% 75% 90% 60% / 80% 70% 90% 60%;
  `,
  craft: css`
    width: 350px;
    position: absolute;
    top: 200px;
    left: 0;
    right: 0;
    font-size: 17px;
    color: #bfd7ea;
  `,
  dataTopbar: css`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    height: 80px;
    z-index: 1;
    p {
      float: left;
      line-height: 0px;
      font-size: 0.74rem;
      font-family: sans-serif;
      padding: 39.5px 0;
      font-weight: 700;
    }
  `,
}

export default styles
