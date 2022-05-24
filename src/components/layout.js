import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import * as layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {

  return (
    <>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
