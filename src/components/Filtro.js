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
                    type={Number}
                    value={100}
                    />
                </Label>
                <Label>
                    Valor máximo:
                    <input
                    type={Number}
                    value={1000}
                    />
                </Label>
                <Label>
                    Buscar por nome:
                    <input
                    type={'Text'}
                    value={'Produto'}
                    />
                </Label>
            </AreaFiltro>
        )
    }
}