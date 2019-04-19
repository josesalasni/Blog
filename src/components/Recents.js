import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import {List, Divider} from 'antd'


class Recents extends React.Component {

    render() {
        return (
            <div>
            <StaticQuery
            query={recentQuery}
            render={data => {
                const postesito = data.allMarkdownRemark.edges                  
                    var dataList = [];

                    {postesito.map(({ node }) => {     
                        dataList.push (node)
                    })} 
                    
                    return (
                        <div style={{marginTop: '40px'}}>
                            <h4>Artículos recientes</h4>
                            <Divider style={{border: '2px solid #ebedf0'}}/>
                            <List
                                itemLayout="horizontal"
                                dataSource={dataList}
                                style={{marginTop: '30px'}}
                                renderItem={item => (
                                    <List.Item>
                                    <List.Item.Meta
                                        
                                        title={ 
                                            <Link style={{ boxShadow: 'none' }} to={item.fields.slug}>
                                                {item.frontmatter.title}
                                            </Link>   
                                        }
                                        
                                    />
                                    </List.Item>
                                )}
                            />
                        </div>
                    )}
                    
                    
                }
            
           
            />
        </div>
        ) 
    }
}

export default Recents;

const recentQuery = graphql`
  query recentQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
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
