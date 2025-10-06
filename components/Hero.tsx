"use client"

import styled from "styled-components"
import { motion } from "framer-motion"

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
`

const FloatingBubbles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`

const Bubble = styled(motion.div)<{ size: number; left: string; delay: number }>`
  position: absolute;
  bottom: -100px;
  left: ${(props) => props.left};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  backdrop-filter: blur(10px);
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 1200px;
`

const Logo = styled(motion.div)`
  margin-bottom: 2rem;
`

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 900;
  color: #ffffff;
  text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
  margin-bottom: 1rem;
  line-height: 1;
  letter-spacing: -0.02em;
`

const Subtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  font-weight: 500;
`

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`

const Button = styled(motion.a)`
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  
  &.primary {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: #ffffff;
    box-shadow: 0 10px 30px rgba(245, 87, 108, 0.4);
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(245, 87, 108, 0.6);
    }
  }
  
  &.secondary {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-3px);
    }
  }
`

const MascotContainer = styled(motion.div)`
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`

const MascotImage = styled(motion.img)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

const InfoBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
`

export default function Hero() {
  const bubbles = [
    { size: 80, left: "10%", delay: 0 },
    { size: 120, left: "25%", delay: 2 },
    { size: 60, left: "45%", delay: 4 },
    { size: 100, left: "65%", delay: 1 },
    { size: 90, left: "80%", delay: 3 },
  ]

  return (
    <HeroSection>
      <FloatingBubbles>
        {bubbles.map((bubble, index) => (
          <Bubble
            key={index}
            size={bubble.size}
            left={bubble.left}
            delay={bubble.delay}
            animate={{
              y: [-100, -1000],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              delay: bubble.delay,
              ease: "linear",
            }}
          />
        ))}
      </FloatingBubbles>

      <Content>
        <InfoBadge initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span>🚀</span>
          <span>Listed on Four.meme | BSC Network</span>
        </InfoBadge>

        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          $CALTYCAP
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The Captain of Meme Coins 🐙⚓
        </Subtitle>

        <ButtonGroup
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button href="#" className="primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Buy on Four.meme
          </Button>
          <Button href="#about" className="secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Learn More
          </Button>
        </ButtonGroup>

        <MascotContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <MascotImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/68aeed046b24d9319e9e1b0b019d96cb-gDInDIgUBt6wo8rvIxxTENg0LTtsWS.jpg"
            alt="Captain Calty - Pirate"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <MascotImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/71d339c178bc4b05c1ca1f24922afcdc-63oagMLW96SfGl4l4GHDd5hCJj6gRj.jpg"
            alt="Calty - Gamer"
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <MascotImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/34e91de6db4178591d2b1217b3a9b041-xSuyY4kzJpMgWS4pLaWHna18RXpyrF.jpg"
            alt="Calty - Happy"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <MascotImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ed96a5674d52422a036aaa8c14d52833-xIWjPEYZ931AmwfkZ0XHCk7JW42oVB.jpg"
            alt="Captain Calty - Navigator"
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <MascotImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b2aae30706ceb980a34846a5d3a8c408-3JDSqZRWBW3I6wuk3x094wIHqpyRWR.jpg"
            alt="Calty - Fitness"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </MascotContainer>
      </Content>
    </HeroSection>
  )
}
