import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I currently work full-time in german company</p>
            <p><Link to="/contact">Contact me</Link></p>
        </Layout>
    )
}

export default AboutPage;