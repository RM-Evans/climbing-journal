// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCZnRd9vlnSpbRUPOrA-g1gGHjOD0-PRe0',
  authDomain: 'climbing-log-1.firebaseapp.com',
  projectId: 'climbing-log-1',
  storageBucket: 'climbing-log-1.appspot.com',
  messagingSenderId: '1087181270222',
  appId: '1:1087181270222:web:d16eec2c173839c5d6f49f',
  measurementId: 'G-3GLC7LF0DC',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
const db = getFirestore(app)
export { app, db }
