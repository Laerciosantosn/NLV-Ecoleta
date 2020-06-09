import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  width: 100%;

  background-color: #fff;
`;

export const HeaderContainer = styled.div`
  padding: 48px 20px 0;

  width: 100%;
  height: 370px;
  background-color: #f0f0f5;
`;

export const Header = styled.header`
  margin-top: 48px;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;

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

export const MainContainer = styled.div`
  width: 100%;
  margin-top: -210px;
  padding: 0 20px;
`;

export const Main = styled.main`
  margin: 0px auto;
  max-width: 1280px;

  p {
    font-size: 16px;

    & strong {
      margin-right: 4px;
    }
  }
`;

export const PointsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;

  .point {
    max-width: 450px;

    & + .point {
      margin-left: 20px;
    }

    h1 {
      margin: 24px 0;
      font-size: 36px;
      color: var(--title-color);
    }

    h2 {
      font-size: 24px;
      margin-bottom: 24px;
      color: var(--primary-color);
    }
    p {
      font-size: 14px;
      margin-bottom: 8px;
    }

    img {
      width: 100%;
      object-fit: cover;

      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }

  @media (max-width: 900px) {
    & {
      flex-wrap: wrap;

      .point {
        max-width: 48%;

        &:first-child {
          margin-bottom: 20px;
        }

        &:last-child {
          margin-left: 0px;
        }

        & + .point {
          margin-bottom: 20px;
        }

        h1 {
          font-size: 32px;
        }

        img {
          width: 100%;
          max-height: 300px;
        }
      }
    }
  }

  @media (max-width: 700px) {
    & {
      .point {
        max-width: 100%;

        & + .point {
          margin-left: 0px;
        }

        img {
          max-height: 100%;
          max-height: 300px;
        }
      }
    }
  }
`;

export const Form = styled.form`
  max-width: 1280px;
  margin-top: 32px;

  margin: auto;
  padding: 32px;

  display: flex;
  flex-direction: column;

  fieldset {
    min-inline-size: auto;
    border: 0;
  }
  .leaflet-container {
    width: 100%;
    height: 350px;
    border-radius: 8px;
    margin-bottom: 24px;
  }
`;
