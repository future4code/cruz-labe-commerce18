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

const ItenProduto = styled.p`
margin: 1rem;
`

export default class Carrinho extends React.Component {
    
    render() {
        
        console.log('props carrinho',this.props.mostrar)
        return (<AreaCarrinho teste={this.props.mostrar}>
                <CarrinhoH2>Carrinho</CarrinhoH2>
                <div>
                    <p>1x</p>
                    <ItenProduto>Produto 1</ItenProduto>
                    <button>x</button>
                </div>
                <div>Valor total: R$ 200,00</div>
            </AreaCarrinho>
        )
    }
}