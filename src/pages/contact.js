import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/resuable/HeroSection"
import { graphql } from 'gatsby'
import Infoblock from "../components/resuable/Infoblock"
import ContactForm from "../components/contact/ContactForm"

const ConatctPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection image={data.img.childImageSharp.fluid} title={`This is the title`} subtitle={`this is the subtitle`} heroStyleClass={`about-background`}/>
    <Infoblock heading="Contact us"/>
    <ContactForm/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid {
					...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
`

export default ConatctPage
