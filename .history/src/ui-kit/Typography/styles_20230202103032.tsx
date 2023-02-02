import styled from "styled-components";

interface TypographyStyledProps {
    fontSize?: string;
    fontWeight?: string;
    color?: string;
}

const TypographyStyled = styled.p<TypographyStyledProps>`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => props?.fontSize || '18px'};
  font-weight: ${(props) => props?.fontWeight || '400'};
  color: ${(props) => props?.color || 'black'};
  text-align: center;
  magrin: 0l
`;

export { TypographyStyled };
