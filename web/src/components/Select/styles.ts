import styled from 'styled-components';

export const Container = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  flex: 1;
  background: #f0f0f5;
  border-radius: 8px;
  border: 0;
  padding: 16px 24px;
  font-size: 16px;
  color: #6c6c80;
  outline-color: #2fb86e;

  & option {
    font-size: 16px;
    color: #6c6c80;
  }
`;
