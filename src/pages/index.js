import React from "react";
import { Link } from "gatsby";
import Footer from "../components/footer";
import Header from "../components/header";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>My name is Pascal Winner living in beautiful Munich</h1>
      <p>Need a developer?<Link to="/contact">Contact me</Link></p>
      <Footer />
    </div>
  )
}

export default IndexPage;