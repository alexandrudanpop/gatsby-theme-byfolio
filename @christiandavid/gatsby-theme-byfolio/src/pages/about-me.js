import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import aboutMe from "../contentJSON/about-me.json"
import LayoutContactMe from "../components/layout/layout-contact-me"
import styles from "../css/aboutme.css"

export default () => {
  return (
    <>
      <Helmet>
        <title>About Me</title>
      </Helmet>
      <LayoutContactMe bgClassName="aboutme">
        {() => (
          <section css={styles.aboutSection}>
            <div css={styles.aboutContainer}>
              <div css={styles.aboutContent}>
                <span css={styles.aboutShadow}>About me</span>
                <>
                  {aboutMe.map(({ subtitle, content }) => (
                    <Fragment key={subtitle}>
                      <h2
                        css={styles.hTag}
                        dangerouslySetInnerHTML={{ __html: subtitle }}
                      ></h2>
                      <p dangerouslySetInnerHTML={{ __html: content }}></p>
                    </Fragment>
                  ))}
                  <h2 css={styles.hTag}> Blog </h2>
                  <p>
                    If you are interested in software development practices,
                    React, Javascript, programming trends you might like my
                    blog! Check it out{" "}
                    <a href="https://blog.alexandrudanpop.dev/" target="_blank">
                      here
                    </a>{" "}
                    or on{" "}
                    <a href="https://dev.to/alexandrudanpop/" target="_blank">
                      Dev.to
                    </a>
                    .
                  </p>
                </>
              </div>
            </div>
          </section>
        )}
      </LayoutContactMe>
    </>
  )
}
