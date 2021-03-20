import React from 'react';
import styled from 'styled-components';

const AreaFiltro = styled.div`
flex: 1;
padding: 1rem;
background-color: whitesmoke;
`

const Label = styled.label`
display: flex;
flex-direction: column;
`

export default class Filtro extends React.Component {

    render() {
        return (
            <AreaFiltro>
                <h2>Filtros</h2>
                <Label>
                    Valor mínimo:
                    <input
                    onChange={this.props.alteraFiltroMinimo}
                    type={'number'}
                    value={this.props.valorFiltroMinimo}
                    />
                </Label>
                <Label>
                    Valor máximo:
                    <input
                    onChange={this.props.alteraFiltroMaximo}
                    type={'number'}
                    value={this.props.valorFiltroMaximo}
                    />
                </Label>
                <Label>
                    Buscar por nome:
                    <input
                    onChange={this.props.alteraFiltroNome}
                    type={'text'}
                    value={this.props.valorFiltroNome}
                    />
                </Label>
            </AreaFiltro>
        )
    }
}