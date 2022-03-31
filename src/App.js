import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAeBpsf6feMk73qSLaJfDNBrThsTHEZyhw',
//   authDomain: 'mrdonalds-6bf9a.firebaseapp.com',
//   databaseURL: 'https://mrdonalds-6bf9a-default-rtdb.europe-west1.firebasedatabase.app/',
//   projectId: 'mrdonalds-6bf9a',
//   storageBucket: 'mrdonalds-6bf9a.appspot.com',
//   messagingSenderId: '654924579859',
//   appId: '1:654924579859:web:9e4530b5b7974ee6642be6'
// };
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

// const getData = () => {
//     firebase.database().ref('/')
//     .once('value')
//     .then(snapshot => {
//       // console.log('User data: ', typeof(snapshot.val()));
//       // const element = document.createElement("a");
//       // const file = new Blob([JSON.stringify(snapshot.val())], {
//       // type: "text/plain"
//       // });
//       // element.href = URL.createObjectURL(file);
//       // element.download = "myFile.json";
//       // document.body.appendChild(element);
//       // element.click();
//       console.log(snapshot.val());
//     });    
// }

function App() {
  // getData();
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);
  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      firebaseDatabase: firebase.database,
    }}>

      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu />
      {openItem.openItem && <ModalItem />}
      {orderConfirm.openOrderConfirm && <OrderConfirm />}
    </Context.Provider>
  );
}

export default App;
