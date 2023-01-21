const firebaseConfig = {
    apiKey: "AIzaSyBVDIFuc05wwlGARqvs_soObnUBD9YEYAQ",
    authDomain: "lets-chat-appp.firebaseapp.com",
    databaseURL: "https://lets-chat-appp-default-rtdb.firebaseio.com",
    projectId: "lets-chat-appp",
    storageBucket: "lets-chat-appp.appspot.com",
    messagingSenderId: "875064236555",
    appId: "1:875064236555:web:e7effbdaf22ba9ceb0c50e",
    measurementId: "G-M4P3VFHJQH"
  };


firebase.initializeApp(firebaseConfig);  

username = localStorage.getItem("username");
document.getElementById("username_label").innerHTMl = "Welcome " + username + "!";
