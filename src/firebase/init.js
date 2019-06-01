// firebaseインポート
import firebase from 'firebase'
// firestoreメソッド使用のため
import firestore from 'firebase/firebase-firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCSo9ba9_6stL9igt5vb1y1G51s3ZVA6EE",
  authDomain: "udemy-ninja-chat-b58ab.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-b58ab.firebaseio.com",
  projectId: "udemy-ninja-chat-b58ab",
  storageBucket: "udemy-ninja-chat-b58ab.appspot.com",
  messagingSenderId: "869481700493",
  appId: "1:869481700493:web:5258e5e2ba25a76d"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// db操作用にエクスポート
export default firebaseApp.firestore()
