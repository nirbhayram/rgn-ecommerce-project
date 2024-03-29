/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./bootstrap.min.css"
import "./layout.css"
import Footer from "./resuable/Footer"
import Navbar from "./resuable/Navbar"

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
