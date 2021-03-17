import React from 'react';
import styled from 'styled-components';
import Carrinho from './components/Carrinho';
import Filtro from './components/Filtro';
import Produtos from './components/Produtos';

const AppContainer = styled.div`
display: flex;
background-color: #20B2AA;
`

class App extends React.Component {
  render () {
  
    return (
      <AppContainer>
        <Filtro/>
        <Produtos/>
        <Carrinho/>
      </AppContainer>
    );
  }
}
export default App;
