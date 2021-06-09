import React from 'react';
import styled from 'styled-components';
import Client from './Client';

function Clients({ clients }) {

    const editClient = (e) => {
        console.log(e);
    }

    const removeClient = (e) => {
        console.log(e)
    }

    const copyLink = (e) => {
        const el = e.parentElement.parentElement.parentElement;
        const attrib = el.getAttribute('regid');
        const linkInput = document.createElement('input');
        linkInput.value = window.location.href + attrib;
        document.body.appendChild(linkInput);
        linkInput.select();
        document.execCommand("copy");
        document.body.removeChild(linkInput);
    }

    return (
        <Container>
            <Content className="container">
                <h1>Clientes registrados recientemente</h1>
                <h6 className="text-muted">Los clientes más recientes se muestran arriba</h6>
                <ClientsList>
                    <div className="table-responsive">
                        <table className="table table-sm table-hover text-center">
                            <thead className="bg-light">
                                <tr>
                                    <th>Cliente</th>
                                    <th>Empresa / Agencia</th>
                                    <th>Reserva</th>
                                    <th>País</th>
                                    <th>Tipo de Habitación</th>
                                    <th>Entrada / Salida</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clients.map((clientData, key) => (
                                    <Client 
                                        client={clientData} 
                                        key={key}
                                        editClient={editClient}
                                        removeClient={removeClient}
                                        copyLink={copyLink}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>

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