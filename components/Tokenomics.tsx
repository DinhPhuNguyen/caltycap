"use client"

import styled from "styled-components"
import { motion } from "framer-motion"

const TokenomicsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #1a1f3a 0%, #0a0e27 100%);
  position: relative;
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`

const Card = styled(motion.div)`
  background: rgba(102, 126, 234, 0.1);
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: 30px;
  padding: 2.5rem;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(102, 126, 234, 0.15);
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
  }
`

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const CardValue = styled.h3`
  font-size: 2.5rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 0.5rem;
`

const CardLabel = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
`

const ChartContainer = styled(motion.div)`
  background: rgba(102, 126, 234, 0.1);
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: 30px;
  padding: 3rem;
  backdrop-filter: blur(10px);
`

const ChartTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2rem;
  text-align: center;
`

const DistributionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const DistributionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const DistributionBar = styled.div<{ percentage: number; color: string }>`
  flex: 1;
  height: 50px;
  background: ${(props) => props.color};
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`

const DistributionLabel = styled.div`
  min-width: 200px;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.1rem;
`

const DistributionPercentage = styled.div`
  min-width: 60px;
  text-align: right;
  color: #ffffff;
  font-weight: 700;
  font-size: 1.3rem;
`

export default function Tokenomics() {
  const stats = [
    { icon: "💰", value: "1B", label: "Total Supply" },
    { icon: "🔥", value: "0%", label: "Tax" },
    { icon: "🔒", value: "Locked", label: "Liquidity" },
    { icon: "✅", value: "Audited", label: "Contract" },
  ]

  const distribution = [
    { label: "Liquidity Pool", percentage: 40, color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { label: "Community Rewards", percentage: 30, color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { label: "Marketing", percentage: 15, color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
    { label: "Team (Locked)", percentage: 10, color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
    { label: "Development", percentage: 5, color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
  ]

  return (
    <TokenomicsSection id="tokenomics">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Tokenomics
        </SectionTitle>

        <Grid>
          {stats.map((stat, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CardIcon>{stat.icon}</CardIcon>
              <CardValue>{stat.value}</CardValue>
              <CardLabel>{stat.label}</CardLabel>
            </Card>
          ))}
        </Grid>

        <ChartContainer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ChartTitle>Token Distribution</ChartTitle>
          <DistributionList>
            {distribution.map((item, index) => (
              <DistributionItem key={index}>
                <DistributionLabel>{item.label}</DistributionLabel>
                <DistributionBar
                  as={motion.div}
                  percentage={item.percentage}
                  color={item.color}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
                <DistributionPercentage>{item.percentage}%</DistributionPercentage>
              </DistributionItem>
            ))}
          </DistributionList>
        </ChartContainer>
      </Container>
    </TokenomicsSection>
  )
}
