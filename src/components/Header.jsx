import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


function Header() {
    return (
        <Container>
            <Content className="container">
                <Logo><NavLink to="/" className="text-white text-decoration-none">Web<span style={{color: '#0896ff'}}>Checkin</span></NavLink></Logo>
                <MenuBar>
                    <Link>Inciar Sesión</Link>
                </MenuBar>
            </Content>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    padding: 8px 16px;
    background: #003580;
`;
const Content = styled.div`
    color: white;
    display: flex;
`;
const Logo = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.5rem;
    text-decoration: none;
`;
const MenuBar = styled.div`
`;
const Link = styled.div`
    color: #0071c2;
    padding: 8px 16px;
    background: #fff;
    font-size: 0.8rem; 
    font-weight: 500;
`;