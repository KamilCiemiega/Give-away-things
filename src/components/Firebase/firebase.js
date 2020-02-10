import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBISq0SYH5YwDZ3GLgl9TVCxxMtW5qCnB4",
    authDomain: "give-away-things.firebaseapp.com",
    databaseURL: "https://give-away-things.firebaseio.com",
    projectId: "give-away-things",
    storageBucket: "give-away-things.appspot.com",
    messagingSenderId: "522739826021",
    appId: "1:522739826021:web:573c48970c8e076578358c",
    measurementId: "G-BJPFQ0YE3P"
  };
  
  class Firebase { 
    constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
    }
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();
  }
  export default Firebase;