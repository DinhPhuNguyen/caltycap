"use client"

import styled from "styled-components"
import { motion } from "framer-motion"

const RoadmapSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: #0a0e27;
  position: relative;
`

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`

const Phase = styled(motion.div)<{ align: "left" | "right" }>`
  display: flex;
  justify-content: ${(props) => (props.align === "left" ? "flex-start" : "flex-end")};
  margin-bottom: 4rem;
  position: relative;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 60px;
  }
`

const PhaseContent = styled.div<{ align: "left" | "right" }>`
  width: 45%;
  background: rgba(102, 126, 234, 0.1);
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 30px;
    ${(props) => (props.align === "left" ? "right: -20px" : "left: -20px")};
    width: 20px;
    height: 3px;
    background: #667eea;
    
    @media (max-width: 768px) {
      left: -40px;
      right: auto;
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`

const PhaseNumber = styled.div`
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1.2rem;
  color: #ffffff;
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.5);
  z-index: 2;
  
  @media (max-width: 768px) {
    left: 20px;
    transform: translateX(-50%);
  }
`

const PhaseTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
`

const PhaseList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

const PhaseItem = styled.li`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '✓';
    color: #43e97b;
    font-weight: 900;
    font-size: 1.2rem;
  }
`

export default function Roadmap() {
  const phases = [
    {
      title: "Phase 1: Launch",
      items: ["Token Launch on BSC", "List on Four.meme", "Community Building", "Social Media Presence"],
    },
    {
      title: "Phase 2: Growth",
      items: ["Marketing Campaign", "Partnerships", "CEX Listings", "10,000+ Holders"],
    },
    {
      title: "Phase 3: Expansion",
      items: ["NFT Collection", "Staking Platform", "Mobile App", "Major Exchange Listings"],
    },
    {
      title: "Phase 4: Ecosystem",
      items: ["DeFi Integration", "Merchandise Store", "Community DAO", "To The Moon! 🚀"],
    },
  ]

  return (
    <RoadmapSection id="roadmap">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Roadmap
        </SectionTitle>

        <Timeline>
          {phases.map((phase, index) => (
            <Phase
              key={index}
              align={index % 2 === 0 ? "left" : "right"}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <PhaseNumber>{index + 1}</PhaseNumber>
              <PhaseContent align={index % 2 === 0 ? "left" : "right"}>
                <PhaseTitle>{phase.title}</PhaseTitle>
                <PhaseList>
                  {phase.items.map((item, itemIndex) => (
                    <PhaseItem key={itemIndex}>{item}</PhaseItem>
                  ))}
                </PhaseList>
              </PhaseContent>
            </Phase>
          ))}
        </Timeline>
      </Container>
    </RoadmapSection>
  )
}
