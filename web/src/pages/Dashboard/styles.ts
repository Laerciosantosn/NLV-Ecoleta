import styled from 'styled-components';
import { shade } from 'polished';

import homeBackground from '../../assets/home-background.svg';

export const Container = styled.div`
  width: 100%;

  height: 100vh;
  max-width: 1280px;

  margin: 0 auto;
  padding: 0 20px;

  background: url(${homeBackground}) no-repeat 550px bottom;

  @media (max-width: 900px) {
    #page-home .content {
      align-items: center;
      text-align: center;
    }

    #page-home .content header {
      margin: 48px auto 0;
    }

    #page-home .content main {
      align-items: center;
    }

    #page-home .content main h1 {
      font-size: 42px;
    }

    #page-home .content main p {
      font-size: 24px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Main = styled.main`
  flex: 1;
  max-width: 560px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 24px;
    margin-top: 24px;
    line-height: 38px;
  }

  a {
    width: 100%;
    max-width: 360px;
    height: 72px;
    background: var(--primary-color);
    border-radius: 8px;
    text-decoration: none;

    display: flex;
    align-items: center;
    overflow: hidden;

    margin-top: 40px;

    & span {
      display: block;
      background: rgba(0, 0, 0, 0.08);
      width: 72px;
      height: 72px;

      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;

      & svg {
        color: #fff;
        width: 20px;
        height: 20px;
      }
    }

    & strong {
      flex: 1;
      text-align: center;
      color: #fff;
    }

    &:hover {
      background: ${shade(0.08, '#34CB79')};
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  margin: 48px 0 0;
  width: 100%;

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
  font-size: 54px;
  color: var(--title-color);
`;
