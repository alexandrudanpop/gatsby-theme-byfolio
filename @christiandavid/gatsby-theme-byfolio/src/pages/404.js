import React from "react"
import { Helmet } from "react-helmet"
import LayoutContactMe from "../components/layout/layout-contact-me"
import styles from "../css/home.css"

export default () => {
  return (
    <>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <LayoutContactMe bgClassName="e404">
        {() => (
          <section css={[styles.dataSection, styles.blackColor]}>
            <div css={styles.dataContainer}>
              <div css={styles.dataContent} data-test="404">
                <h1>Page not found</h1>
                <h2>
                  Oops! The page you are looking for has been removed o
                  relocated.
                </h2>
                <a href="/">Go to Home</a>
              </div>
            </div>
          </section>
        )}
      </LayoutContactMe>
    </>
  )
}
