import React from 'react';
import styled from 'styled-components';

const ContainerDivProduto = styled.div`
flex: 3;
padding: 20px;
`

const DivProduto = styled.div`
display: flex;
flex-direction: column;
background-color: whitesmoke;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
margin: 5px;
padding: 10px;

button {
    border-radius: 16px;
    height: 24px;
    outline: none;
}
`
const DivQtdProduto = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 1rem;

p {
    margin: 0;
}
`
const AreaProduto = styled.div`
display: flex;
flex-wrap: wrap;
`

export default class Produtos extends React.Component {

    state = {
        ordenar: ''
    }

    produtoOrdenado = (event) => {
        this.setState({ ordenar: event.target.value}, ()=> console.log(this.state.ordenar))
    }
    
    filtrarProdutos = () => {
        return this.props.produtos
        .filter((produto) => this.props.valorFiltroMinimo ? produto.preco >= this.props.valorFiltroMinimo : true)
        .filter((produto) => this.props.valorFiltroMaximo ? produto.preco <= this.props.valorFiltroMaximo : true)
        .filter((produto) => this.props.valorFiltroNome ? produto.nome.includes(this.props.valorFiltroNome) : true)
        .sort((a ,b) => this.state.ordenar === 'crescente' ? a.preco - b.preco : b.preco - a.preco) 
        // .sort((a ,b) => this.state.ordenar === true ? a.preco - b.preco : b.preco - a.preco) por que não funciona?

        // return this.props.produtos.filter((produto) => {
            
        //     if (this.props.valorFiltroMaximo) {
        //         return produto.preco <= this.props.valorFiltroMaximo
        //     }).filter((produto) => {
        //      if (this.props.valorFiltroMinimo) {
        //         return produto.preco >= this.props.valorFiltroMinimo
        //     })
        // })
        //     if (this.props.valorFiltroNome) {
        //         return produto.nome === this.props.valorFiltroNome
        //     } else { return true }
        // })
    } 

    render() {
        const produtosFiltrados = this.filtrarProdutos()
        const mostrarProdutos = produtosFiltrados.map((produtos) => {
            return (
            <DivProduto>
                <img src={produtos.imagem}/>
                <div>
                    <p>{produtos.nome}</p>
                    <p>R$ {produtos.preco},00</p>
                    <button onClick={() => this.props.adicionarNoCarrinho(produtos.id)}>Adicionar ao carrinho</button>
                </div>
            </DivProduto>)
        })
        

        return (
            <ContainerDivProduto>
                <DivQtdProduto>
                    <p>Quantidade de produtos: {mostrarProdutos.length}</p>
                    <label>
                        Ordenação:
                        <select 
                        onChange={this.produtoOrdenado}
                        value={this.state.ordenar}
                        >
                            <option value={'crescente'}>Crescente</option>
                            <option value={'decrescente'}>Decrescente</option>
                        </select>
                    </label>
                </DivQtdProduto>
                <AreaProduto>
                   {mostrarProdutos}
                </AreaProduto>         
            </ContainerDivProduto>
        )
    }
}