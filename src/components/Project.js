import React from "react"
import styled from "styled-components"
import Heading from "./NumberedHeading"
import GatsbyImage from "gatsby-image"
import GatsbyLink from "gatsby-link"
import indexToNumber from "../utils/index-to-number"
import logProjectClick from "../utils/log-portfolio-click"

const Container = styled.div`
  margin-bottom: 112px;
`

const Image = styled(GatsbyImage)`
  img {
    filter: blur(0);
    transition: 0.3s ease-in-out;
  }

  &::after {
    content: "🔗";
    font-size: 64px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:hover {
    img {
      filter: blur(3px);
    }

    &::after {
      opacity: 1;
    }
  }
`

export default props => {
  let { index, imageSizes, name, slug } = props
  let number = indexToNumber(index)
  return (
    <Container>
      <Heading number={number} name={name} />
      <GatsbyLink to={slug} onClick={() => logProjectClick(name)}>
        <Image sizes={imageSizes} />
      </GatsbyLink>
    </Container>
  )
}
