import firebase from 'firebase/compat/app';
import {getStorage} from 'firebase/storage'
import { initializeApp } from "firebase/app";


//Deixei essas variáveis aqui sem utilizar um dotenv para manter o upload funcionando e permitir que a aplicação funcione
const firebaseConfig = {
  apiKey: "AIzaSyDrx5Z5Hd0MD_Nd5nHHygNAcJ2pgbrxzCU",
  authDomain: "endless-sol-403405.firebaseapp.com" ,
  projectId: "endless-sol-403405",
  storageBucket: "endless-sol-403405.appspot.com" ,
  messagingSenderId: "558587543852",
  appId: "1:558587543852:web:2ba73c8f1852d8ffd7ac89",
  measurementId: "G-5WFJNYSNWK"
};

  
    export const app = initializeApp(firebaseConfig);
    export const storage =  getStorage(app)

