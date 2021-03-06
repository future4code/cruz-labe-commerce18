import React from 'react';
import styled from 'styled-components';

const AreaCarrinho = styled.div`
flex: 1;
background-color: whitesmoke;
padding: 1rem;
opacity: ${props => !props.teste && '0' };
/* pode fazer assim tambem>>>  opacity: ${props => props.teste ? '1' : '0' }; */
/* pode fazer assim tambem>>>  ${props => !props.teste && 'opacity: 0;' }; */

div {
    display:flex;
    align-items: center;
    
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        background-color: red;
        border: none;
        border-radius: 50%;
        color: #fff;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        outline: none;
    }
}
`
// Pega o styled de AreaCarrinho como parametro e replica na NovaDiv
// const NovaDiv = styled(AreaCarrinho)`

// `

const CarrinhoH2 = styled.h2`
position: relative;
cursor: pointer;
`

const ItemProduto = styled.p`
margin: 1rem;
`
const ValorTotal = styled.div`
margin: 10px 0;
`

export default class Carrinho extends React.Component {

    valorTotal = () => {
        let valorTotal = 0;
        let array = this.props.produtoNoCarrinho
        for (let i = 0; i < this.props.produtoNoCarrinho.length; i++) {
            valorTotal += array[i].preco * array[i].quantidade
        }
        
        return valorTotal
    }

    
    render() {
        const produtosNoCarrinho = this.props.produtoNoCarrinho.map((item) => {
                return (
                <div>
                    <p>{item.quantidade}x</p>
                    <ItemProduto>{item.nome}</ItemProduto>
                    <button onClick={() => this.props.produtoRemovido(item.id)}>x</button>
                </div>)
                
        })

        return (<AreaCarrinho teste={this.props.mostrar}>
                <CarrinhoH2>Carrinho</CarrinhoH2>
                {produtosNoCarrinho}
                <ValorTotal>Valor total: R$ {this.valorTotal()},00</ValorTotal>
            </AreaCarrinho>
        )
    }
}