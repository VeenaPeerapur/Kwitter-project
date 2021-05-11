var firebaseConfig = {
      apiKey: "AIzaSyA07NJBwitGZHSb8CuMvC0oHZwq5Gs81zM",
      authDomain: "whitehat-b14ca.firebaseapp.com",
      databaseURL: "https://whitehat-b14ca-default-rtdb.firebaseio.com",
      projectId: "whitehat-b14ca",
      storageBucket: "whitehat-b14ca.appspot.com",
      messagingSenderId: "293233018256",
      appId: "1:293233018256:web:e1692146288910699d1f15"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
