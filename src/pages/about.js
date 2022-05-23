import React from "react";
import { Link } from "gatsby";
import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = () => {
  return(
    <div>
    <Header />
      <h1>About Me</h1>
      <p>I currently work full-time in german company</p>
      <p><Link to="/contact">Contact me</Link></p>
      <Footer />
    </div>
  )
}

export default AboutPage;