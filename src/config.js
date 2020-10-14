import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDgNACwNqyf3RyKw7MDHNZFEKyhnGRi3LM",
    authDomain: "mymessenger-f4297.firebaseapp.com",
    databaseURL: "https://mymessenger-f4297.firebaseio.com",
    projectId: "mymessenger-f4297",
    storageBucket: "mymessenger-f4297.appspot.com",
    messagingSenderId: "1057455209989",
    appId: "1:1057455209989:web:89487f0950415984ae666c",
    measurementId: "G-1H7HWDNR7Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.database();

  export default db;