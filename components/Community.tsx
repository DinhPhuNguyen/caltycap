"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

const CommunitySection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  font-weight: 500;
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SocialCard = styled(motion.a)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 2rem;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const SocialIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const SocialName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const SocialCount = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const CTABox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  padding: 3rem;
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1.2rem 3rem;
  background: #ffffff;
  color: #667eea;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  }
`;

export default function Community() {
  const socials = [
    {
      icon: "💬",
      name: "Telegram",
      count: "30K+ Members",
      href: "https://t.me/CALTYCAP",
    },
  ];

  return (
    <CommunitySection id="community">
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Join The Crew
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Be part of the most adventurous community in crypto!
        </Subtitle>

        <SocialGrid>
          {socials.map((social, index) => (
            <SocialCard
              key={index}
              href={social.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon>{social.icon}</SocialIcon>
              <SocialName>{social.name}</SocialName>
              <SocialCount>{social.count}</SocialCount>
            </SocialCard>
          ))}
        </SocialGrid>

        <CTABox
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <CTATitle>Ready to Set Sail?</CTATitle>
          <CTAText>
            Join thousands of crew members on this incredible journey. Buy
            $CALTYCAP now and become part of the adventure!
          </CTAText>
          <CTAButton
            href="https://four.meme/token/0xc2fbf91c9c3133d4ebaa1056b53304ce42cd4444"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Buy $CALTYCAP Now
          </CTAButton>
        </CTABox>
      </Container>
    </CommunitySection>
  );
}
