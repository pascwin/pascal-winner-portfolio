import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              html
              excerpt
            }
          }
        }
      }
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            <p>Posts will show up here later on</p>
            <div>
            {
                data.allMarkdownRemark.edges.map(edge => {
                    return(
                        <li>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })
            }
            {
                data.allMarkdownRemark.edges[0].node.frontmatter.title
            }
            </div>
           
        </Layout>
    )
}

export default BlogPage;