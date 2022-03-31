import {initializeApp} from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCetcp9aMmnCIEKYcOa9YiJRSwGNls3www",
    authDomain: "tmdt-2022.firebaseapp.com",
    databaseURL: "https://tmdt-2022-default-rtdb.firebaseio.com",
    projectId: "tmdt-2022",
    storageBucket: "tmdt-2022.appspot.com",
    messagingSenderId: "362536700763",
    appId: "1:362536700763:web:4d7758ee25aaa76fc5e87e"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
export default db;