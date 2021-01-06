import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import styles from "./layout.css"
import Menu from "../menu"

const Layout = ({
  title,
  children,
  bgClassName,
  fixedMenuPosition = false,
}) => {
  return (
    <div className={`layout-wrapper ${bgClassName || "white"}`}>
      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                title
                email
                siteKeywords
                siteDescription
              }
            }
          }
        `}
        render={({
          site: {
            siteMetadata: { title: siteTitle, siteKeywords, siteDescription },
          },
        }) => (
          <>
            <Helmet
              title={title || siteTitle}
              link={[
                { rel: "canonical", href: "https://alexandrudanpop.dev/" },
              ]}
              meta={[
                {
                  name: "description",
                  content: siteDescription,
                },
                {
                  name: "keywords",
                  content: siteKeywords,
                },
                { charSet: "utf-8" },
                {
                  name: "og:description",
                  content: siteDescription,
                },
                {
                  name: "og:locale",
                  content: "en_US",
                },
                {
                  name: "og:type",
                  content: "website",
                },
                {
                  name: "og:title",
                  content: title || siteTitle,
                },
                {
                  name: "og:url",
                  content: "https://alexandrudanpop.dev/",
                },
                {
                  name: "og:site_name",
                  content: title || siteTitle,
                },
                {
                  name: "twitter:title",
                  content: title || siteTitle,
                },
                {
                  name: "twitter:site",
                  content: "@alexandrudanpop",
                },
                {
                  name: "twitter:creator",
                  content: "@alexandrudanpop",
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div className="layout-inner">
              <div css={styles.layout}>
                <Menu
                  bgClassName={bgClassName}
                  numPoints={18}
                  duration={600}
                  delayPointsMax={300}
                  delayPerPath={100}
                  fixedMenuPosition={fixedMenuPosition}
                />
              </div>
              <div css={styles.pageContainer}>{children}</div>
            </div>
          </>
        )}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  bgClassName: PropTypes.string,
  fixedMenuPosition: PropTypes.bool,
}

export default Layout
