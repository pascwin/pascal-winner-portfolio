import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
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
              fields {
                slug
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
            return (
              <li>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })
        }
      </div>

    </Layout>
  )
}

export default BlogPage;