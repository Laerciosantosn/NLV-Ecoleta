import styled, { css } from 'styled-components';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f0f0f5;
  border-radius: 8px;
  border: 2px solid #f0f0f5;
  padding: 0 16px;
  color: #6c6c80;

  display: flex;
  align-items: center;

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 14px 0;
    font-size: 16px;
    color: #6c6c80;
    outline: none;

    & option {
      font-size: 16px;
      color: #6c6c80;
    }
  }
  svg {
    margin-right: 16px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #34cb79;
      border-color: #34cb79;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #34cb79;
    `}
`;
