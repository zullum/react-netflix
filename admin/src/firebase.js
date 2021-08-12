import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDT_jyPS6t5aHIw24viFIjZ0p-08LEy51s",
  authDomain: "infinite-unity-651.firebaseapp.com",
  projectId: "infinite-unity-651",
  storageBucket: "infinite-unity-651.appspot.com",
  messagingSenderId: "424433324238",
  appId: "1:424433324238:web:36042c0de911d28877009f",
  measurementId: "G-W1Y5HPMJFC",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
