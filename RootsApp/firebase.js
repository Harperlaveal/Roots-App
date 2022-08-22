import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAhLUqSHjA0cS8rPJIQHSZ7hfqFdJx-ZdM',
  authDomain: 'roots-e5868.firebaseapp.com',
  databaseURL: "https://roots-e5868-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "roots-e5868.appspot.com",
  appId: 'com.swen325.roots',
  projectId: 'roots-e5868',
};

const app = initializeApp(firebaseConfig);

export function getApp() {
    return app;
}