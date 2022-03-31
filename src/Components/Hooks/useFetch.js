import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyCetcp9aMmnCIEKYcOa9YiJRSwGNls3www",
    authDomain: "tmdt-2022.firebaseapp.com",
    databaseURL: "https://tmdt-2022-default-rtdb.firebaseio.com",
    projectId: "tmdt-2022",
    storageBucket: "tmdt-2022.appspot.com",
    messagingSenderId: "362536700763",
    appId: "1:362536700763:web:4d7758ee25aaa76fc5e87e"
  };
firebase.initializeApp(firebaseConfig);

export const useFetch = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                let json;
                await firebase.database().ref('/')
                    .once('value')
                    .then(snapshot => {
                     json = snapshot.val();
                    //  console.log(json)
                    })
                // json = await fetch('DB.json');
                // const res = await json.json();
                // console.log(res)
                setResponse(json);
            } catch (err) {
                setError(err);
            }
        })();
    }, []);
    return { response, error };
};