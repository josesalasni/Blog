import React from "react"

import MainLayout from '../components/Layout'
// Components
import { Link, graphql } from "gatsby"

class tagsInfo extends React.Component {

    render() {
      const { data } = this.props
      const siteTitle = data.site.siteMetadata.title
      const posts = this.props.data.allMarkdownRemark.edges
      const title = this.props.data.site.siteMetadata.title
      const postLinks = posts.map(post => {
        return (
          <li key={post.node.fields.slug}>
            <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
          </li>
        )
      })
  
      return (
        <MainLayout location={this.props.location} title={siteTitle}>
        
          <h2 style={{marginTop: '0'}}>
            Hay {this.props.data.allMarkdownRemark.totalCount} posts etiquetados con“
            {this.props.pageContext.tag}”
          </h2>
          <ul>{postLinks}</ul>
          <p>
            
          </p>
        </MainLayout>
      )
    }
  }
  
  export default tagsInfo;
  
  export const pageQuery = graphql`
  query($tag: String) {
    site {
        siteMetadata {
          title
        }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
    `