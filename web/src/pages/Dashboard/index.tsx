import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiSearch } from 'react-icons/fi';

import { Container, Content, Main, Title, Header } from './styles';

import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <Container id="page-home">
      <Content className="content">
        <Header>
          <img src={logo} alt="Ecoleta" />

          <Link to="/create-point">
            <FiLogIn />
            Cadastre um ponto de coleta
          </Link>
        </Header>

        <Main>
          <Title>Seu marketplace de coleta de resíduos.</Title>
          <p>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </p>

          <Link to="/detail">
            <span>
              <FiSearch />
            </span>
            <strong>Pesquisar ponto de coleta</strong>
          </Link>
        </Main>
      </Content>
    </Container>
  );
};
export default Dashboard;
