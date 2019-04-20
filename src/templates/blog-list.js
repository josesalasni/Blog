import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'
import Bio from '../components/Bio'
import MainLayout from '../components/Layout'
import { rhythm } from '../utils/typography'

import { Divider, Button, Row,Col} from 'antd';


class BlogIndex extends React.Component {

    render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    
    return (
      <MainLayout location={this.props.location} title={siteTitle}>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1  style={{marginTop: '0'}}> Artículos </h1>
        <Divider />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div style={{marginBottom: '50px'}} key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}

        <Row style={{ marginTop: '100px'}} className="pagination" >
            <Col style={{textAlign: 'left' }} span={8}>
                {!isFirst 
                ?
                <Button style={{display: 'inline-block'}} type="primary">
                    <Link to={prevPage} rel="prev">
                        ← Anterior
                    </Link>
                </Button>
                :
                <Button style={{display: 'inline-block'}} disabled={true} type="primary">
                    <Link to={prevPage} rel="prev">
                        ← Anterior
                    </Link>
                </Button>
                }
            </Col>

            <Col style={{textAlign: 'center'}} span={8}>
                <p>Página {currentPage} de  {numPages}</p>
            </Col>

            <Col style={{textAlign: 'right'}} span={8}>
            {!isLast
            ?
            <Button style={{display: 'inline-block'}} type="primary">
                <Link to={nextPage} rel="next">
                    Siguiente →
                </Link>
            </Button>
            :
            <Button style={{display: 'inline-block'}} disabled={true} type="primary">
                <Link to={nextPage} rel="next">
                    Siguiente →
                </Link>
            </Button>
            }

            </Col>
        </Row>
        
      </MainLayout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
