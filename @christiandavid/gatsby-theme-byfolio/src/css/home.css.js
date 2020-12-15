import { css } from "@emotion/core"
import mediaQueryGenerator from "../utils/mediaQGen"

const [mediaMin62em, mediaMax40em, mediaMax51Em] = mediaQueryGenerator([
  { type: "min", size: "62.5" },
  { type: "max", size: "46" },
  { type: "max", size: "50.75" },
])

const styles = {
  h1: css`
    ${mediaMax51Em} {
      font-size: 24px;
      margin-bottom: 17px;
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
    min-height: 600px;

    ${mediaMin62em} {
      width: 1050px;
    }
  `,
  dataContent: css`
    position: relative;
    top: 12vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    ${mediaMin62em} {
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

    ${mediaMax40em} {
      padding-top: 0px;
      padding-bottom: 0px;
    }
  `,
  image: css`
    /* border-radius: 80% 75% 90% 60% / 80% 70% 90% 60%; */
    border-radius: 132px 131px 73px 73px;

    /* todo fix with gatsby graphql */
    ${mediaMax51Em} {
      width: 200px !important;
      height: 200px !important;
    }
    ${mediaMax40em} {
      width: 130px !important;
      height: 130px !important;
    }
  `,
  craft: css`
    font-size: 17px;
    color: #bfd7ea;
    letter-spacing: normal;
  `,
  description: css`
    font-size: 17px;
    list-style: none;
    text-align: left;
    margin-left: 0;
    letter-spacing: 0.04rem;

    ${mediaMax40em} {
      font-size: 15px;
      line-height: 17px;
      margin-bottom: 15px;
    }

    ${mediaMax51Em} {
      font-size: 15px;
      line-height: 17px;
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
