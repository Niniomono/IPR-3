

var firebaseConfig = {

      apiKey: "AIzaSyDMgOoW__IaFf0AJEtw3Ju7cTgr7L1iL1Q",
    
      authDomain: "redsocial-b496a.firebaseapp.com",
    
      databaseURL: "https://redsocial-b496a-default-rtdb.firebaseio.com",
    
      projectId: "redsocial-b496a",
    
      storageBucket: "redsocial-b496a.appspot.com",
    
      messagingSenderId: "1086287688421",
    
      appId: "1:1086287688421:web:18782a6ad2f018c6839a0c"
    
    };
    
      firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Mucho gusto verte " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      function addRoom() {
            const firebaseConfig = {
                  apiKey: "AIzaSyCdn0O3n8Fn6ZUCbfr4NpZGQGBPJHE4rBE",
                  authDomain: "institutopanciotecnicorancion.firebaseapp.com",
                  projectId: "institutopanciotecnicorancion",
                  storageBucket: "institutopanciotecnicorancion.appspot.com",
                  messagingSenderId: "846109587538",
                  appId: "1:846109587538:web:7a1cc4d51128ff6d01478b"
                };
                
                // Initialize Firebase
                const app = initializeApp(firebaseConfig);
      }
      //Final del código
      });});}
getData();
