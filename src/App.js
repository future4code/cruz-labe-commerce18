import React from 'react';
import styled from 'styled-components';
import Carrinho from './components/Carrinho';
import Filtro from './components/Filtro';
import Produtos from './components/Produtos';
import Logo from './images/astronaut.svg';
import Cart from './images/cart.svg';

const AppContainer = styled.div`
display: flex;
`
const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
height: 70px;
background-color: #1c2e4a;
padding: 0 2rem;

div {
  display: flex;
  align-items: center;
}

div:nth-child(2) {
  img {
    width: 30px;
    cursor: pointer;
    filter: invert();
  }
}

img {
  width: 40px;
}

p {
  margin: 0 .5rem;
  font-weight: 600;
  font-size: 1.7rem;
  color: #fff;
}
`

class App extends React.Component {
  state = {
    carrinho: false,
  }

  mostraCarrinho = () => {
    if (this.state.carrinho) {
      this.setState({carrinho: false})
    } else {
      this.setState({carrinho: true})
    }
  }

  render () {
    console.log('props app',this.state.carrinho)
    return (
      <div>
        <Header>
          <div>
            <img src={Logo}/>
            <p>LabCommerce</p>
          </div>
          
          <div>
            <img 
            onClick={this.mostraCarrinho} 
            src={Cart}
            mostrar={this.state.carrinho}
            />
          </div>
        </Header>
        <AppContainer>
          <Filtro/>
          <Produtos/>
          <Carrinho mostrar={this.state.carrinho}/>
        </AppContainer>
      </div>
    );
  }
}
export default App;
