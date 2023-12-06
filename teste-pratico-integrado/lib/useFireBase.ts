import firebase from 'firebase/compat/app';
import {getStorage} from 'firebase/storage'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NUXT_PUBLIC_API_KEY ,
  authDomain:process.env.NUXT_PUBLIC_AUTH_DOMAIN ,
  projectId: process.env.NUXT_PUBLIC_PROJECT_ID,
  storageBucket:process.env.NUXT_PUBLIC_STORAGE_BUCKET ,
  messagingSenderId: process.env.NUXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NUXT_PUBLIC_APPID,
  measurementId: process.env.NUXT_PUBLIC_MEASUREMENTID
};

  
    export const app = initializeApp(firebaseConfig);
    export const storage =  getStorage(app)

