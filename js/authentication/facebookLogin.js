var facebookProvider = new firebase.auth.FacebookAuthProvider();

function facebookLogin() {
  firebase.auth().signInWithPopup(facebookProvider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;

    console.log('user ', user);

    window.user = user;

    

    $('#login_screen').fadeOut("slow", function () {
      $('#root').html(ChatScreen(user));
      chatScreenEvents(user);
      online(user);
    });
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
}