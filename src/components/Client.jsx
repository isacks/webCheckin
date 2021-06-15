import React from 'react';
import styled from 'styled-components';

import LinkIcon from '@material-ui/icons/Link';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function Client({ client, editClient, removeClient, copyLink, }) {
    return (
        <tr regid={client.id}>
            <td>{client.name +' '+ client.surname}</td>
            <td>{client.agency}</td>
            <td>{client.reserve}</td>
            <td>{client.country}</td>
            <td>JS</td>
            <td>{client.chkinDate} / {client.chkoutDate}</td>
            <td>
                <OptionIcons className="d-flex align-items-center justify-content-around clear-fix">
                    <div onClick={() => copyLink(client.id)}><LinkIcon/></div>
                    <div><EditIcon onClick={() => editClient("Editing...")} /></div>
                    <div><DeleteIcon onClick={() => removeClient(client.id)}/></div>
                </OptionIcons>
            </td>
        </tr>
    )
}

export default Client;

const Container = styled.tr`
    margin-top: 5px;
`;

const OptionIcons = styled.div`
    div:hover{
        color: #0896ff;
        cursor: pointer;
    }
`;