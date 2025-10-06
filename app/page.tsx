"use client"

import styled from "styled-components"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Tokenomics from "@/components/Tokenomics"
import Roadmap from "@/components/Roadmap"
import Community from "@/components/Community"
import Footer from "@/components/Footer"

const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: linear-gradient(180deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%);
`

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <About />
      {/* <Tokenomics /> */}
      <Roadmap />
      <Community />
      <Footer />
    </PageContainer>
  )
}
