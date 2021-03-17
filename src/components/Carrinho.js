import React from 'react';
import styled from 'styled-components';

const AreaCarrinho = styled.div`
flex: 1;
background-color: whitesmoke;
padding: 1rem;

div {
    display:flex;
    align-items: center;
    
    button {
        height: 20px;
    }
}
`

const ItenProduto = styled.p`
margin: 1rem;
`

export default class Carrinho extends React.Component {

    render() {
        return (<AreaCarrinho>
                <h2>Carrinho</h2>
                <div>
                    <p>1x</p>
                    <ItenProduto>Produto 1</ItenProduto>
                    <button>Remover</button>
                </div>
                <div>Valor total: R$ 200,00</div>
            </AreaCarrinho>
        )
    }
}