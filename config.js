import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyA38olKbAP8meZ8wYOpHR-IYzUuHq36YWQ",
  authDomain: "team-vote-8a126.firebaseapp.com",
  databaseURL: "https://team-vote-8a126-default-rtdb.firebaseio.com",
  projectId: "team-vote-8a126",
  storageBucket: "team-vote-8a126.appspot.com",
  messagingSenderId: "1023954516311",
  appId: "1:1023954516311:web:c817840c5b9c0c7e946612"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
