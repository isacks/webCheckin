import React from 'react';
import styled from 'styled-components';
import fachada from '../assets/img/fachada2.jpg';

function Confirmation() {
    return (
        <Container>
            <Content className="container">
                <Header>
                    <img src={fachada} alt="" style={{height: 500, width: '100%'}}/>
                    <p className="text-white d-block px-2">
                        <h1>¡BIENVENIDO!</h1>
                        <div>TU RESERVA HA SIDO REALIZADA CORRECTAMENTE</div>
                    </p>
                </Header>
                <h3 className="p-4 bg-dark text-white text-center">PRODUCTOS RESERVADOS</h3>
                <div className="text-center p-2">
                    <h2>PRINCESS HOTEL PANAMA</h2>
                    <div>Marbella Calle 53 y Ave. 5ta. B Sur, Panama City, Panama.</div>
                    <div>Telefono: +507 309-6900</div>
                    <div>www.princesshotelpanama.com</div>
                    <div>reservas@princesshotelpanama.com</div>
                </div>
                <div className="p-3 bg-dark text-white">Total Habitaciones: 1</div>
                <table className="table text-center">
                    <thead>
                        <th>Entrada</th>
                        <th>Salida</th>
                        <th>Habitación</th>
                        <th>Cantidad</th>
                        <th>Adultos</th>
                        <th>Niños</th>
                        <th>Huésped</th>
                        <th>Precio</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>17/06/21</td>
                            <td>20/06/21</td>
                            <td>818</td>
                            <td>1</td>
                            <td>2</td>
                            <td>-</td>
                            <td>EDUARDO DE LEON</td>
                            <td>71.28 USD</td>
                        </tr>
                    </tbody>
                    </table>
                    <div className="d-flex flex-column align-items-end p-2 bg-light">
                        <div>Total: <span className="h2">71.28 USD</span></div>
                        <span>Impuestos incluidos</span>
                    </div>
                    
                
            </Content>
        </Container>
    )
}

export default Confirmation;

const Container = styled.div``;

const Content = styled.div``;

const Header = styled.header`
    margin-bottom: 10px;
    position: relative;
    p{
        position: absolute;
        top: 0;
        left: 0;
        h1{
            font-size: 5rem;
            font-weight: 700;
        }
        div{
            font-size: 2rem;
        }
    }
`;
