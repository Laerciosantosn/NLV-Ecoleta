import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f0f0f5;
  border-radius: 8px;
  border: 2px solid #f0f0f5;
  width: 100%;
  padding: 0 16px;
  color: #6c6c80;

  display: flex;
  align-items: center;

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

  input {
    flex: 1;
    background: transparent;
    border: 0;
    outline: none;

    &[type='text'],
    &[type='email'],
    &[type='number'] {
      flex: 1;
      background: #f0f0f5;
      border-radius: 8px;
      border: 0;
      padding: 14px 0;
      font-size: 16px;
      color: #6c6c80;
    }

    &::placeholder {
      color: #a0a0b2;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
