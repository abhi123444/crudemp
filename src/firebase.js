import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBSCIoVzdjttrJw0k1VXzWl-HcD-045mTw",
    authDomain: "crudemp-cd4c3.firebaseapp.com",
    projectId: "crudemp-cd4c3",
    storageBucket: "crudemp-cd4c3.appspot.com",
    messagingSenderId: "243979579085",
    appId: "1:243979579085:web:e50a77e67454037da04384"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;