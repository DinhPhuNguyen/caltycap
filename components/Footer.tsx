"use client"

import styled from "styled-components"

const FooterSection = styled.footer`
  background: #0a0e27;
  padding: 3rem 2rem;
  border-top: 1px solid rgba(102, 126, 234, 0.3);
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Links = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`

const Link = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffffff;
  }
`

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  text-align: center;
`

const Disclaimer = styled.p`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.8rem;
  text-align: center;
  max-width: 800px;
  line-height: 1.6;
`

export default function Footer() {
  return (
    <FooterSection>
      <Container>
        <Logo>$CALTYCAP</Logo>

        <Links>
          <Link href="#about">About</Link>
          <Link href="#tokenomics">Tokenomics</Link>
          <Link href="#roadmap">Roadmap</Link>
          <Link href="#community">Community</Link>
          <Link href="#">Whitepaper</Link>
          <Link href="#">Audit</Link>
        </Links>

        <Copyright>© 2025 $CALTYCAP. All rights reserved. Built with ❤️ by the community.</Copyright>

        <Disclaimer>
          Disclaimer: Cryptocurrency investments carry risk. $CALTYCAP is a meme coin created for entertainment
          purposes. Always do your own research and invest responsibly. This is not financial advice.
        </Disclaimer>
      </Container>
    </FooterSection>
  )
}
