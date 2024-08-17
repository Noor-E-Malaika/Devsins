<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBWWZmHi1bG7q_9Q90rIdUlfqY4aYnWRqs",
    authDomain: "devsinz.firebaseapp.com",
    projectId: "devsinz",
    storageBucket: "devsinz.appspot.com",
    messagingSenderId: "234677890551",
    appId: "1:234677890551:web:81aa87a013aa0aeebb12f2",
    measurementId: "G-CWL4E0V84Q"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const analytics = getAnalytics(app);
</script>
