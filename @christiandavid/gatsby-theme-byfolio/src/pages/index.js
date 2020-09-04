import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"
import Typewriter from "typewriter-effect"
import GraphemeSplitter from "grapheme-splitter"
import anime from "animejs"
import { css } from "@emotion/core"
import LayoutContactMe from "../components/layout/layout-contact-me"
import styles from "../css/home.css"
import { Button } from "../components/button/button"

const Home = ({
  data: {
    file,
    site: {
      siteMetadata: {
        siteName,
        homePage: { availableToHire, dotColors, h1Text, h2Text, typewriter },
      },
    },
  },
}) => {
  const dotAnimation = useRef()
  function stringSplitter(string) {
    const splitter = new GraphemeSplitter()
    return splitter.splitGraphemes(string)
  }

  const dotCss = css`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: ${dotColors[0]};
    float: left;
    margin: 35px 10px 0 0;
  `

  useEffect(() => {
    const dotEl = dotAnimation.current
    availableToHire &&
      anime({
        targets: dotEl,
        endDelay: 800,
        easing: "easeInOutQuad",
        direction: "alternate",
        background: dotColors[1],
        loop: true,
      })

    return () => availableToHire && anime.remove(dotEl)
  })

  return (
    <LayoutContactMe bgClassName="home">
      <Helmet>
        <title>{siteName}</title>
        <meta charset="UTF-8" />
      </Helmet>
      <section css={styles.dataSection}>
        <div css={styles.dataContainer}>
          <div css={styles.dataContent}>
            {availableToHire && (
              <div css={styles.dataTopbar}>
                <div css={dotCss} ref={dotAnimation}></div>
                <p>Available to be hired</p>
              </div>
            )}
            <div css={styles.dataContentItem}>
              <figure>
                <Img
                  css={styles.image}
                  fixed={file.childImageSharp.fixed}
                  alt="Alex's profile image"
                ></Img>
                {/* todo - text from gatsby-config file */}
                <figcaption css={styles.craft}>
                  Remote Software Engineer
                </figcaption>
              </figure>
            </div>
            <div css={styles.dataContentItem}>
              <h1>{h1Text}</h1>
              <p>{h2Text}</p>
              {/* <Typewriter
                css={styles.typewriter}
                options={{
                  strings: typewriter,
                  autoStart: true,
                  loop: true,
                  delay: 55,
                  stringSplitter,
                }}
              /> */}

              {/* todo - button component */}
              <Button>Contact ➜</Button>
              <Button>Projects ⚙️</Button>
              <Button>Blog ✍️</Button>
            </div>
          </div>
        </div>
      </section>
    </LayoutContactMe>
  )
}

Home.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        siteName: PropTypes.string.isRequired,
        homePage: PropTypes.shape({
          availableToHire: PropTypes.bool.isRequired,
          h1Text: PropTypes.string.isRequired,
          h2Text: PropTypes.string.isRequired,
          typewriter: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }),
}

export default Home

export const query = graphql`
  {
    site {
      siteMetadata {
        siteName
        homePage {
          availableToHire
          dotColors
          h1Text
          h2Text
          typewriter
        }
      }
    }
    file(name: { eq: "me" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
