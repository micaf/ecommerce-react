import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  height: 300px; 
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${(props) => props.theme.colors.heroBackground};
  color: ${(props) => props.theme.colors.textPrimary};
  padding: ${(props) => props.theme.spacing.medium};
  border-radius: ${(props) => props.theme.borders.radius.large}; // Optional rounded edges
  box-shadow: ${(props) => props.theme.shadows.medium}; // Optional shadow for depth
`;

const HeroContent = styled.div`
  max-width: 800px;
  text-align: center;
`;

const HeroHeading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.primary}; // Main brand color
`;

const HeroSubheading = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const HeroButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textPrimary};
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: ${(props) => props.theme.borders.radius.small};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroHeading>Your Perfect Hero</HeroHeading>
        <HeroSubheading>
          This transparent banner seamlessly blends with your app’s design.
        </HeroSubheading>
        <HeroButton>Learn More</HeroButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;