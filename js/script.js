const config = {
    apiKey: "AIzaSyAe6mg772FPQgGmSCwcW_Nn5NHmat2af0w",
    authDomain: "fir-chat-2fd1f.firebaseapp.com",
    databaseURL: "https://fir-chat-2fd1f.firebaseio.com",
    projectId: "fir-chat-2fd1f",
    storageBucket: "",
    messagingSenderId: "941893552618"
};
firebase.initializeApp(config);

let provider = new firebase.auth.GoogleAuthProvider();

function googleLogin(){}

firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
}).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});

$(`#google-icon`).click(googleLogin)
