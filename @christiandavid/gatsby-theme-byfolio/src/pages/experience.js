import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import LayoutContactMe from "../components/layout/layout-contact-me"
import Experience from "../components/experience"

export default ({ data, transitionStatus }) => {
  return (
    <>
      <Helmet>
        <title>Work Experience</title>
      </Helmet>
      <LayoutContactMe bgClassName="experience">
        {() => (
          <Experience
            jobs={data.allMarkdownRemark.edges}
            transitionStatus={transitionStatus}
            title="Work Experience"
            description="Here you can find information about my work experience, these are some
      companies with which I have had the privilege of working"
          />
        )}
      </LayoutContactMe>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: {
          slug: { regex: "/experience/" }
          hideOnExperience: { eq: false }
        }
      }
      sort: { fields: [frontmatter___dateFrom], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            company
            logo {
              childImageSharp {
                fluid(maxWidth: 481) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            jobTitle
            dateFrom(formatString: "YYYY")
            dateTo(formatString: "YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
