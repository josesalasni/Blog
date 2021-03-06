import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import {Card} from 'antd'

import { rhythm } from '../utils/typography'
const { Meta } = Card;

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (

            <Card style={{ marginTop: 16 }} >
            <Meta
                avatar={  
                    <Image
                        fixed={data.avatar.childImageSharp.fixed}
                        alt={author}
                        style={{
                            marginRight: rhythm(1 / 2),
                            marginBottom: 0,
                            minWidth: 50,
                            borderRadius: `100%`,
                        }}
                    />}
                title={author}
                description= {"Escrito por " + author } 
            />
          </Card>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
