import React from 'react';
import styled from 'styled-components';

function Clients() {
    return (
        <Container>
            <Content className="container">
                <h1>Clientes registrados recientemente</h1>
                <h6 className="text-muted">Los clientes más recientes se muestran arriba</h6>
                <ClientsList>
                    <Client>
                        <table className="table table-sm table-hover text-center">
                            <thead className="bg-light">
                                <tr>
                                    <th>Cliente</th>
                                    <th>Empresa / Agencia</th>
                                    <th>Reserva</th>
                                    <th>País</th>
                                    <th>Tipo de Habitación</th>
                                    <th>Entrada / Salida</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>EDUARDO DE LEON</td>
                                    <td>BOOKING</td>
                                    <td>RFS5324</td>
                                    <td>PANAMA</td>
                                    <td>JS</td>
                                    <td>01/06/2021 / 03/06/2021</td>
                                </tr>
                            </tbody>
                        </table>
                    </Client>
                </ClientsList>
            </Content>
        </Container>
    )
}

export default Clients;

const Container = styled.div`
    margin-top: 5px;
`;
const Content = styled.div`

`;
const ClientsList = styled.div`
    margin-top: 15px;
`;
const Client = styled.div`
    table{
        td:hover{
            cursor: pointer;
        }
    }
`;