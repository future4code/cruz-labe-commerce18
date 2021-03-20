import React from 'react';
import styled from 'styled-components';

const AreaFiltro = styled.div`
flex: 1;
padding: 1rem;
background-color: whitesmoke;

div {
    position: relative;
}

`

const Label = styled.label`
display: flex;
flex-direction: column;
position: absolute;
color: rgba(0,0,0,.6);
top: 0;
`

const InputValor = styled.input`
background-color: transparent;
border: none;
border-bottom: 1px solid #1a1a1a;
outline: none;
margin: 10px 0;

    :focus ~ Label, :valid ~ Label {
        transition: .3s;
        font-size: 12px;
        transform: translateY(-10px);
        color: #000;
    }
`

const TituloH2 = styled.h2`
color: blue;

:hover {
    color: red;
}

`

export default class Filtro extends React.Component {

    render() {
        return (
            <AreaFiltro>
                <h2>Filtros</h2>
                <div>
                    <InputValor
                        onChange={this.props.alteraFiltroMinimo}
                        type={'number'}
                        value={this.props.valorFiltroMinimo}
                        required
                    />
                    
                    <Label>
                        Valor mínimo
                    </Label>
                </div>
                
                <div>
                    <InputValor
                        onChange={this.props.alteraFiltroMaximo}
                        type={'number'}
                        value={this.props.valorFiltroMaximo}
                        required
                    />
                    <Label>
                        Valor máximo
                    </Label>
                </div>

                <div>
                    <InputValor
                        onChange={this.props.alteraFiltroNome}
                        type={'text'}
                        value={this.props.valorFiltroNome}
                        required
                        />
                    <Label>
                        Buscar por nome
                    </Label>
                </div>
            </AreaFiltro>
        )
    }
}