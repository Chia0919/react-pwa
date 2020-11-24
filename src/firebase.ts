import firebase from 'firebase';
var firebaseConfig = {
  apiKey: 'AIzaSyAGPZiB6XtoYa0juFqyuY762-kXK5gJQTU',
  authDomain: 'react-pwa-notification.firebaseapp.com',
  databaseURL: 'https://react-pwa-notification.firebaseio.com',
  projectId: 'react-pwa-notification',
  storageBucket: 'react-pwa-notification.appspot.com',
  messagingSenderId: '583659852717',
  appId: '1:583659852717:web:873b87b397c8322146c724',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
