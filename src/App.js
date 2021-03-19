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

const produtos = [

  {id: 1,
  nome: "produto",
  imagem: "https://picsum.photos/200/200?a=1",
  preco: 100,
  },
  {id: 2,
    nome: "item",
    imagem: "https://picsum.photos/200/200?a=2",
    preco: 200,
  },
  {id: 3,
    nome: "trem",
    imagem: "https://picsum.photos/200/200?a=3",
    preco: 300,
  }
]


class App extends React.Component {
  state = {
    abreCarrinho: false,
    filtroMinimo: 100,
    filtroMaximo: "",
    filtroNome: "",
    produtoNoCarrinho: []
  }

  mostraCarrinho = () => {
    // if (this.state.abreCarrinho) {
    //   this.setState({abreCarrinho: false})
    // } else {
    //   this.setState({abreCarrinho: true})
    // }
    return this.setState({ abreCarrinho: !this.state.abreCarrinho})
  }

  inputFiltroMinimo = (event) => {
    this.setState({ filtroMinimo: event.target.value})
  }

  inputFiltroMaximo = (event) => {
    this.setState({ filtroMaximo: event.target.value})
  }

  inputFiltroNome = (event) => {
    this.setState({ filtroNome: event.target.value})
  }

  adicionarNoCarrinho = (idDoProduto) => {
    const novoProduto = {
      nome: produtos.nome,
      quantidade: 1
    }

    
    const produtoAcumlado = [...this.state.produtoNoCarrinho, novoProduto]

    this.setState({ produtoNoCarrinho: produtoAcumlado})
  }

  render () {
    console.log('props app',this.state.abreCarrinho)
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
            mostrar={this.state.abreCarrinho}
            />
          </div>
        </Header>
        <AppContainer>
          <Filtro 
          valorFiltroMinimo={this.state.filtroMinimo}
          alteraFiltroMinimo={this.inputFiltroMinimo}
          valorFiltroMaximo={this.state.filtroMaximo}
          alteraFiltroMaximo={this.inputFiltroMaximo}
          valorFiltroNome={this.state.filtroNome}
          alteraFiltroNome={this.inputFiltroNome}
          />
          <Produtos
          produtos={produtos}
          adicionarNoCarrinho={this.adicionarNoCarrinho}
          valorFiltroMinimo={this.state.filtroMinimo}
          valorFiltroMaximo={this.state.filtroMaximo}
          valorFiltroNome={this.state.filtroNome}
          />
          <Carrinho mostrar={this.state.abreCarrinho}/>
        </AppContainer>
      </div>
    );
  }
}
export default App;
