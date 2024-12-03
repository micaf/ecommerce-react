import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background: none;
  border: ${(props) => `1px solid ${props.theme.colors.border}`};
  border-radius: ${(props) => props.theme.borders.radius.small};
  color: ${(props) => props.theme.colors.textPrimary};
  padding: ${(props) => props.theme.spacing.small};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.surface};
  }
`;

export const Badge = styled.span`
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: ${(props) => props.theme.typography.fontSizes.xsmall};
  font-weight: ${(props) => props.theme.typography.fontWeights.bold};
  width: 20px; 
  height: 20px; 
  border-radius: 50%; 
  position: absolute;
  top: -8px;
  right: -10px;
  box-sizing: border-box; 
`;