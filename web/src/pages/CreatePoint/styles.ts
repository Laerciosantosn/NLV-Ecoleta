import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;

  margin: 0 auto;
  padding: 0 20px;
`;

export const Header = styled.header`
  margin-top: 48px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: var(--title-color);
    font-weight: bold;
    text-decoration: none;

    display: flex;
    align-items: center;

    & svg {
      margin-right: 16px;
      color: var(--primary-color);
    }
  }
`;

export const Title = styled.h1`
  font-size: 36px;
`;

export const FormContainer = styled.div`
  form {
    margin: 80px auto;
    padding: 64px;
    max-width: 730px;
    background: #fff;
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    fieldset {
      margin-top: 64px;
      min-inline-size: auto;
      border: 0;
    }

    legend {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;

      & h2 {
        font-size: 24px;
      }

      & span {
        font-size: 14px;
        font-weight: normal;
        color: var(--text-color);
      }
    }

    .leaflet-container {
      width: 100%;
      height: 350px;
      border-radius: 8px;
      margin-bottom: 24px;
    }
  }
`;

export const Field = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  & :disabled {
    cursor: not-allowed;
  }
`;

export const FieldGroup = styled.div`
  flex: 1;
  display: flex;

  & .field + .field {
    margin-left: 24px;
  }

  & input + input {
    margin-left: 24px;
  }
`;

export const ItensGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;

  li {
    background: #f5f5f5;
    border: 2px solid #f5f5f5;
    height: 180px;
    border-radius: 8px;
    padding: 32px 24px 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    cursor: pointer;

    & span {
      flex: 1;
      margin-top: 12px;

      display: flex;
      align-items: center;
      color: var(--title-color);
    }

    &.selected {
      background: #e1faec;
      border: 2px solid #34cb79;
    }
  }
`;
