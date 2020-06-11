import React, { LabelHTMLAttributes } from 'react';

import { Container } from './styles';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Label;
