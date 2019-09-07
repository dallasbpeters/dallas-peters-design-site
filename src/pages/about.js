import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="About"
        keywords={[
          `dallas`,
          `peters`,
          `user experience`,
          `design`,
          `Austin`,
          `Texas`,
        ]}
      />

      <article className="post-content page-template">
        <header class="post-content-header">
          <h1 class="post-content-title">
            Hi. I'm Dallas. I design and develop things for screens.
          </h1>
        </header>
        <div className="bio row">
          <div className="col-12">
            <figure className="bio--figure">
              <Img fluid={data.dallasBioPhoto.childImageSharp.fluid} />
            </figure>
            <h3>About Me</h3>
            <p>
              I'm a Product Designer &amp; CSS Guru. Born in Amarillo, Texas.
              Rasied in Phoenix, Arizona. Now living and working in Austin,
              Texas. I have four kids and an amazing wife and we're all in love
              with Austin. Over the past 13 years I've become a
              jack-of-all-trades in the graphic, web and product design space.
              After graduation from the Art Institute of Pittsburgh with a
              degree in graphic design I went to work making ads and posters and
              other graphic assets for the Austin American Statesman... more to
              come!
            </p>

            <section className="work-experience">
              <h3>Work Experience</h3>
              <div className="job row">
                <div className="col-1">
                  <Img
                    className="job--logo"
                    fluid={data.absLogo.childImageSharp.fluid}
                  />
                </div>
                <div className="col-11">
                  <p className="job--title">
                    User Experience Designer &amp; Developer
                  </p>
                  <p className="job--meta job--meta--company">
                    American Bible Society
                  </p>
                  <p className="job--meta">Nov 2012 – Present</p>
                  <p className="job--meta">6 yrs 11 mos</p>
                  <p className="job--meta">Greater Philadelphia Area</p>
                  <p className="job--description">
                    Working with internal clients on a wide range of web
                    properties and mobile applications. User interviews and
                    surveys, wireframes, high fidelity mockups, motion
                    prototypes, user stories, product requirement documents, and
                    plenty of HTML, Javascript and CSS can all be found at my
                    desk on any given day.
                  </p>
                </div>
              </div>
              {/* end job */}
              <div className="job row">
                <div className="col-1">
                  <Img
                    className="job--logo"
                    fluid={data.dpdLogo.childImageSharp.fluid}
                  />
                </div>
                <div className="col-11">
                  <p className="job--title">
                    Owner, User Experience Designer &amp; Developer
                  </p>
                  <p className="job--meta job--meta--company">
                    Dallas Peters Design
                  </p>
                  <p className="job--meta">Jan 2007 – Nov 2012</p>
                  <p className="job--meta">6 yrs 11 mos</p>
                  <p className="job--meta">Austin, Texas</p>
                  <p className="job--description">
                    Web Design and Development during the Wordpress boom. Custom
                    designed Wordpress themes and site for small businesses in
                    Austin Texas.
                  </p>
                </div>
              </div>
              {/* end job */}
              <div className="job row">
                <div className="col-1">
                  <Img
                    className="job--logo"
                    fluid={data.unleadedLogo.childImageSharp.fluid}
                  />
                </div>
                <div className="col-11">
                  <p className="job--title">Graphic and Web Designer</p>
                  <p className="job--meta job--meta--company">
                    Unleaded Studios
                  </p>
                  <p className="job--meta">Oct 2007 – 2012</p>
                  <p className="job--meta">5 yrs</p>
                  <p className="job--meta">Dallas/Fort Worth Area</p>
                  <p className="job--description">
                    Working with agency director and clients to produce creative
                    across the print, digital, and environmental design.
                  </p>
                </div>
              </div>
              {/* end job */}
              <div className="job row">
                <div className="col-1">
                  <Img
                    className="job--logo"
                    fluid={data.statesmanLogo.childImageSharp.fluid}
                  />
                </div>
                <div className="col-11">
                  <p className="job--title">Graphic Designer</p>
                  <p className="job--meta job--meta--company">
                    Austin American Statesman
                  </p>
                  <p className="job--meta">Jan 2006 – Sep 2008</p>
                  <p className="job--meta">2 yrs 9 mos</p>
                  <p className="job--meta">Austin, Texas</p>
                  <p className="job--description">
                    Graphic Designer working on in-house creative campaigns.
                  </p>
                </div>
              </div>
              {/* end job */}
            </section>
          </div>
        </div>
        {/* end bio row */}
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    dallasBioPhoto: file(relativePath: { eq: "dallas-profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    absLogo: file(relativePath: { eq: "abs-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    unleadedLogo: file(relativePath: { eq: "unleaded-logo.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    statesmanLogo: file(relativePath: { eq: "statesman-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dpdLogo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
