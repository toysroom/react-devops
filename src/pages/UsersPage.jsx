import axios from 'axios';
import React, { use } from 'react';
import Title from '../components/Title';

function UsersPage()
{

    const [users, setUsers] = React.useState([]);

    const loadUsers = () => {
        const url = 'https://jsonplaceholder.typicode.com/users';

        // 1 fetch
        // 2 axios 

        axios.get(url).then( 
            (response) => {
                console.log(response.data);
                // users = response.data;
                setUsers(response.data);
                console.log(users);
            }
        );
    }

    React.useEffect( () => {
        loadUsers();
    }, []);

    return (
        <>
            <Title label="Users" />
            
            <button onClick={ loadUsers }>Carica lista</button>
            
            <ul>
                {
                    users.map( (user) => {
                        return (
                            <li key={user.id}>{ user.name } - {user.email}</li>
                        )
                    } )
                }
            </ul>
        </>
    )
}

export default UsersPage