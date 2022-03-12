// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyBI-hWXiWidvvnVV3wMlGQwhcESDpkCuIs",
      authDomain: "kwitter-2c4c5.firebaseapp.com",
      databaseURL: "https://kwitter-2c4c5-default-rtdb.firebaseio.com",
      projectId: "kwitter-2c4c5",
      storageBucket: "kwitter-2c4c5.appspot.com",
      messagingSenderId: "354086969446",
      appId: "1:354086969446:web:8e7f90756285fa5e560da7",
      measurementId: "G-X9QPHMT4YD"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomNames(this.id)'>#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom(){
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      document.getElementById("room_name").value = "";
      localStorage.setItem("room_name", room_name);
}
function changeUsername(){
      user = localStorage.getItem("username");
     document.getElementById("user_name").innerHTML = "Welcome! " + user;
}
function redirectToRoomNames(name1){
      console.log(name1);
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}