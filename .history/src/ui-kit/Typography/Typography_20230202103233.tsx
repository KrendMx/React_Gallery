import React from "react";
import { TypographyStyled } from "./styles";

interface TypographyProps {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  children: string || JSX.element;
  margin?: string;
}

const Typography: React.FC<TypographyProps> = ({ children, ...otherProps }) => {
  return <TypographyStyled {...otherProps}>{children}</TypographyStyled>;
};

export default Typography;
