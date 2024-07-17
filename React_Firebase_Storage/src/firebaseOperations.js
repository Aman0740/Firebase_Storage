import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

// Create operation
export const addUser = async (user) => {
    await addDoc(collection(db, 'users'), user);
};

// Read operation
export const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

// Update operation
export const updateUser = async (id, updatedUser) => {
    const userDoc = doc(db, 'users', id);
    await updateDoc(userDoc, updatedUser);
};

// Delete operation
export const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
};
