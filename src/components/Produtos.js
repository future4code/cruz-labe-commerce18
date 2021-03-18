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

    render() {
        return (
            <ContainerDivProduto>
                <DivQtdProduto>
                    <p>Quantidade de produtos: 1{/* provelmente uma props*/}</p>
                    <label>
                        Ordenação:
                        <select>
                            <option value={'crescente'}>Crescente</option>
                            <option value={'decrescente'}>Decrescente</option>
                        </select>
                    </label>
                </DivQtdProduto>
                <AreaProduto>
                    <DivProduto>
                        <img src={'https://picsum.photos/200/200?a=2'}/>
                        <div>
                            <p>Produto 1</p>
                            <p>R$ 100,00</p>
                            <button>Adicionar ao carrinho</button>
                        </div>
                    </DivProduto>
                    <DivProduto>
                        <img src={'https://picsum.photos/200/200?a=2'}/>
                        <div>
                            <p>Produto 1</p>
                            <p>R$ 100,00</p>
                            <button>Adicionar ao carrinho</button>
                        </div>
                    </DivProduto>
                    <DivProduto>
                        <img src={'https://picsum.photos/200/200?a=2'}/>
                        <div>
                            <p>Produto 1</p>
                            <p>R$ 100,00</p>
                            <button>Adicionar ao carrinho</button>
                        </div>
                    </DivProduto>
                    <DivProduto>
                        <img src={'https://picsum.photos/200/200?a=2'}/>
                        <div>
                            <p>Produto 1</p>
                            <p>R$ 100,00</p>
                            <button>Adicionar ao carrinho</button>
                        </div>
                    </DivProduto>
                    <DivProduto>
                        <img src={'https://picsum.photos/200/200?a=2'}/>
                        <div>
                            <p>Produto 1</p>
                            <p>R$ 100,00</p>
                            <button>Adicionar ao carrinho</button>
                        </div>
                    </DivProduto>
                </AreaProduto>         
            </ContainerDivProduto>
        )
    }
}