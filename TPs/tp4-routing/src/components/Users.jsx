import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
const Users = () => {

    const [usersAll, setUsersAll] = useState([]);

    useEffect(
        () => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((res) => {
                    setUsersAll(res.data)
                })
                .catch((err) => {
                    console.error('Erreur:', err)
                })
        }, []
    )
    const { id } = useParams()
    const userFound = usersAll.find((user) => (
        user.id == id
    ))

    const suppUser = (id) => {
        setUsersAll(usersAll.filter((user) => (user.id !== id)))
    }
    return (
        <>
            {
                id !== undefined
                    ?
                    (
                        <div>
                            
                            <h2>ID : {userFound.id}</h2>
                            <p>Username : {userFound.username}</p>
                            <h3>Name : {userFound.name}</h3>
                            <p>Email : {userFound.email}</p>
                            <p>Phone : {userFound.phone}</p>
                            <p>City : {userFound.address.city}</p>
                            <p>Street : {userFound.address.street}</p>
                        </div>
                    )
                    :
                    (
                        <table>
                            <thead>
                                <th>Name</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </thead>
                            <tbody>
                                {
                                    usersAll.map(
                                        (user) =>
                                        (
                                            <tr key={user.id}>
                                                <td>{user.name}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.address.city}, {user.address.street}</td>
                                                <td>{user.phone}</td>
                                                <td>
                                                    <Link className='btn btn-details' to={`/users/${user.id}`}>Details</Link>
                                                    <button className="btn btn-delete" onClick={() => suppUser(user.id)}>Supprimer</button>
                                                </td>
                                            </tr>
                                        )

                                    )
                                }
                            </tbody>
                        </table>
                    )
            }
        </>
    )

}
export default Users;