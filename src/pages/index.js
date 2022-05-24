import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1>My name is Pascal Winner living in beautiful Munich</h1>
      <p>Need a developer?<Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default IndexPage;