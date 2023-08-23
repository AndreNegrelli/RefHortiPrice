import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCBIiAfEZY9faRfJBxh5hMBqg2FisA-YEc",
    authDomain: "hortiprice.firebaseapp.com",
    projectId: "hortiprice",
    storageBucket: "hortiprice.appspot.com",
    messagingSenderId: "423705768047",
    appId: "1:423705768047:web:b5d1432725fd6b29551d9a",
    measurementId: "G-YQXJPLQH1G"
}

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db , auth };

