import React from 'react'
import {Button} from "reactstrap";


const UserRow = (props) => {
    const {id, avatar, name, email, rating} = props;

    const ProfileImage = ({src}) => {
        return (
            <img src={src} alt="Avatar" style={{borderRadius: '50%', width: '50px'}}/>
        )
    }

    return (
        <tr>
            <th scope="row">{id}</th>
            <td><ProfileImage src={avatar}/></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rating}</td>
            <td><Button>Edit</Button></td>
        </tr>
    )
}

export default UserRow;