import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../firebaseOperations';
import UserForm from './UserForm';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getUsers();
            console.log(users)
            setUsers(users);
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            await deleteUser(id);
            setUsers(users.filter(user => user.id !== id));
        }
    };

    const handleSave = () => {
        setEditingUser(null);
        const fetchUsers = async () => {
            const users = await getUsers();
            setUsers(users);
        };

        fetchUsers();
    };

    return (
        <div>
            <h1>User List</h1>
            {editingUser ? (
                <UserForm user={editingUser} onSave={handleSave} />
            ) : (
                <UserForm onSave={handleSave} />
            )}
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.email}, {user.age})
                        <button onClick={() => setEditingUser(user)}>Edit</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
