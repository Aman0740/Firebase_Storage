import React, { useState } from 'react';
import { addUser, updateUser } from '../firebaseOperations';

const UserForm = ({ user = {}, onSave }) => {
    const [formData, setFormData] = useState({
        name: user.name || '',
        email: user.email || '',
        age: user.age || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.id) {
            await updateUser(user.id, formData);
        } else {
            await addUser(formData);
        }
        onSave();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                required
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default UserForm;
