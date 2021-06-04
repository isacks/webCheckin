import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function MenuBar() {
    return (
        <Container>
            <Content className="container">
                <NavLink to="/register" className="btn"><div className="d-flex align-items-center"><AddCircleOutlineIcon/><span className="px-1">Registrar Huésped</span></div></NavLink>
            </Content>
        </Container>
    )
}

export default MenuBar;

const Container = styled.div`
    background: #f5f5f5;
    padding: 5px;
`;
const Content = styled.div``;
