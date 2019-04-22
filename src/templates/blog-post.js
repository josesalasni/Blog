import React from 'react'
import { Link, graphql } from 'gatsby'
import { Tag, Icon } from 'antd';

import Bio from '../components/Bio'
import MainLayout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import { async } from 'q';


class BlogPostTemplate extends React.Component {

    render() {
        const post = this.props.data.markdownRemark
        const siteTitle = this.props.data.site.siteMetadata.title
        const { previous, next } = this.props.pageContext

        return (
        <MainLayout location={this.props.location} title={siteTitle}>
            <SEO title={post.frontmatter.title} description={post.excerpt} />
            <div id="fb-root"></div>
            <h1 style={{marginTop: '0'}}>{post.frontmatter.title}</h1>
            <p
            style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
                marginTop: rhythm(-1),
            }}
            >
            <Icon style={{paddingTop: '15px', paddingRight: '15px'}} type="calendar" />
            {post.frontmatter.date}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr
            style={{
                marginBottom: rhythm(1),
            }}
            />

            {post.frontmatter.tags.map((tag, index) => {
            return (
                <span key={index} className="tag">
                    <Tag >
                        <Link style={{boxShadow: "none" }}  to={`/tags/${tag}`}>{tag}</Link>
                    </Tag>
                    
                </span>
                )}
            )}

            
            <Bio />

            <ul
            style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                marginTop: '30px',
                padding: 0,
            }}
            >
            <li>
                {previous && (
                <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                </Link>
                )}
            </li>
            <li>
                {next && (
                <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                </Link>
                )}
            </li>
            </ul>

        
        </MainLayout>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`
