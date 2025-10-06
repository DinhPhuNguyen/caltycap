"use client"

import styled from "styled-components"
import { motion } from "framer-motion"

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0e27;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #667eea, transparent);
  }
`

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  align-items: center;
`

const TextContent = styled.div`
  color: #ffffff;
`

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
`

const FeatureList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Feature = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 20px;
  border: 1px solid rgba(102, 126, 234, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(102, 126, 234, 0.15);
    transform: translateX(10px);
  }
`

const FeatureIcon = styled.div`
  font-size: 2rem;
  flex-shrink: 0;
`

const FeatureContent = styled.div`
  flex: 1;
`

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #ffffff;
`

const FeatureText = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`

const ImageContent = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const MainImage = styled(motion.img)`
  width: 100%;
  max-width: 500px;
  border-radius: 30px;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);
  border: 3px solid rgba(102, 126, 234, 0.3);
`

export default function About() {
  const features = [
    {
      icon: "🌊",
      title: "Community Driven",
      text: "Built by the community, for the community. Every holder is part of the crew!",
    },
    {
      icon: "⚡",
      title: "BSC Network",
      text: "Lightning-fast transactions with minimal fees on Binance Smart Chain.",
    },
    {
      icon: "🎯",
      title: "Listed on Four.meme",
      text: "Trade $CALTYCAP on the premier meme coin exchange platform.",
    },
    {
      icon: "🔒",
      title: "Safe & Secure",
      text: "Audited smart contract with locked liquidity for your peace of mind.",
    },
  ]

  return (
    <AboutSection id="about">
      <Container>
        <Grid>
          <TextContent>
            <SectionTitle
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Meet Captain Calty
            </SectionTitle>

            <Description
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              $CALTYCAP is not just another meme coin - it's an adventure! Led by our charismatic octopus captain, we're
              sailing through the crypto seas, bringing fun, community, and gains to all our crew members.
            </Description>

            <FeatureList>
              {features.map((feature, index) => (
                <Feature
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureContent>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureText>{feature.text}</FeatureText>
                  </FeatureContent>
                </Feature>
              ))}
            </FeatureList>
          </TextContent>

          <ImageContent
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <MainImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/68aeed046b24d9319e9e1b0b019d96cb-gDInDIgUBt6wo8rvIxxTENg0LTtsWS.jpg"
              alt="Captain Calty"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </ImageContent>
        </Grid>
      </Container>
    </AboutSection>
  )
}
