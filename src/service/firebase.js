import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,  
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;