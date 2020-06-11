import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background: #f0f0f5;
  border-radius: 8px;
  border: 0;
  width: 100%;
  padding: 0 16px;
  font-size: 16px;
  color: #6c6c80;

  display: flex;
  align-items: center;

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
      padding: 16px 0;
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
