import { css } from "@emotion/core"
import mediaQueryGenerator from "../utils/mediaQGen"

const [media52Dot5em, media36em] = mediaQueryGenerator([
  { type: "min", size: "52.5" },
  { type: "max", size: "36" },
])

const styles = {
  h1: css`
    ${media36em} {
      font-size: 24px;
    }
  `,
  blackColor: css`
    color: #000;
  `,
  dataSection: css`
    height: 100%;
    color: #fff;
  `,
  dataContainer: css`
    margin: 0 auto;
    height: 100%;

    ${media52Dot5em} {
      width: 1050px;
    }
  `,
  dataContent: css`
    position: relative;
    top: 14vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    ${media52Dot5em} {
      top: 20vh;
    }

    /* todo - remove if not needed */
    .Typewriter {
      font-size: 18px;
    }
  `,
  dataContentItem: css`
    flex-basis: 350px;
    flex-grow: 1;
    text-align: center;
    padding: 10px 0px 10px 0px;

    ${media36em} {
      padding-top: 0px;
      padding-bottom: 0px;
    }
  `,
  image: css`
    /* border-radius: 80% 75% 90% 60% / 80% 70% 90% 60%; */
    border-radius: 132px 131px 73px 73px;

    /* todo fix with gatsby graphql */
    ${media36em} {
      width: 130px !important;
      height: 130px !important;
    }
  `,
  craft: css`
    font-size: 17px;
    color: #bfd7ea;
  `,
  description: css`
    font-size: 17px;
    list-style: none;
    text-align: left;
    margin-left: 0;
    letter-spacing: 0.03rem;

    ${media36em} {
      font-size: 15px;
      line-height: 15px;
      margin-bottom: 15px;
    }
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
