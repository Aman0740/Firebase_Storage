import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCr0Ul9x6XAo0F442jcpjW3U4wdzBcB-Cw",
    authDomain: "fir-71a4c.firebaseapp.com",
    projectId: "fir-71a4c",
    storageBucket: "fir-71a4c.appspot.com",
    messagingSenderId: "715447785639",
    appId: "1:715447785639:web:6f3281487769edd3492382",
    measurementId: "G-XKJ25XEBHY"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


