import React from 'react';
import styled from 'styled-components';
import Carrinho from './components/Carrinho';
import Filtro from './components/Filtro';
import Produtos from './components/Produtos';
import Logo from './images/astronaut.svg';
import Cart from './images/cart.svg';
import Face from './images/facebook.svg';
import Insta from './images/instagram.svg';
import Twitter from './images/twitter.svg';
// import satelite from './images/satelite-antigo.svg';

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

const Footer = styled.footer`
display: flex;
background-color: #1c2e4a;
position: fixed;
height: 70px;
width: 100vw;
bottom: 0;

p {
  margin: 1 .5rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: #fff;
  text-align: center;
}

img {
  width: 36px;
}

`

const produtos = [

  {id: 1,
  nome: "Satélite Antigo",
  imagem: "https://picsum.photos/200/200?a=1",
  // imagem: {satelite},
  preco: 800,
  },
  {id: 2,
    nome: "Camiseta Galática",
    imagem: "https://picsum.photos/200/200?a=2",
    preco: 100,
  },
  {id: 3,
    nome: "Meteoro",
    imagem: "https://picsum.photos/200/200?a=3",
    preco: 500,
  },
  {id: 4,
    nome: "Viagem Espacial",
    imagem: "https://picsum.photos/200/200?a=4",
    preco: 350,
  },
  {id: 5,
    nome: "Roupa Espacial",
    imagem: "https://picsum.photos/200/200?a=5",
    preco: 300,
  },
  {id: 6,
    nome: "Brinquedo Intergalático",
    imagem: "https://picsum.photos/200/200?a=6",
    preco: 150,
  },
  {id: 7,
    nome: "Ônibus Espacial",
    imagem: "https://picsum.photos/200/200?a=7",
    preco: 950,
  }
]


class App extends React.Component {
  state = {
    abreCarrinho: false,
    // filtroMinimo: ,
    // filtroMaximo: "",
    // filtroNome: "",
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
    const novoProduto = this.state.produtoNoCarrinho.find(produto => idDoProduto === produto.id)
    // aramazenado o produto 1 com propriedads id,nome,imagem,preco,quantidade:2
    if (novoProduto) {
      
      const adicionadoNoCarrinho = this.state.produtoNoCarrinho.map((produto) => {
        
        if (idDoProduto === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade +1
          }
        }
        return produto
      })
      this.setState({produtoNoCarrinho: adicionadoNoCarrinho})
    } else { 
      const adicionarProduto = produtos.find(produto => idDoProduto === produto.id)

      const produtoAcumlado = [...this.state.produtoNoCarrinho, {...adicionarProduto, quantidade: 1}]
      
      this.setState({ produtoNoCarrinho: produtoAcumlado})
    }
    }

  removerProduto = (idDoProduto) => {
    
    const produtoRemovido = this.state.produtoNoCarrinho.map((produto) => {

      if (idDoProduto === produto.id) {
        return {
          ...produto,
          quantidade: produto.quantidade -1
        }
      }
      return produto
    }).filter((produto) => produto.quantidade > 0)
    
    this.setState({produtoNoCarrinho: produtoRemovido})

  }

  render () {
    
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
          <Carrinho 
          mostrar={this.state.abreCarrinho}
          produtoNoCarrinho={this.state.produtoNoCarrinho}
          produtoRemovido={this.removerProduto}
          />
        </AppContainer>
        <Footer>
          <div>
            <p>Siga nossas redes sociais</p>
          </div>
          
          <div>
            <img 
            src={Face}
            />
            <img
            src={Insta}
            />
            <img
            src={Twitter}
            />
          </div>
        </Footer>
      </div>
    );
  }
}
export default App;
