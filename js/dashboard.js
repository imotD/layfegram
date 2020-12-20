var startApp = function () {
  gapi.load('auth2', function () {
    auth2 = gapi.auth2.init({
      client_id: '28444918888-7hptkdl74vtn2nipb4q2ck9c3ilf6cm1.apps.googleusercontent.com',
      cookiepolicy: 'none',
      scope: 'openid profile email',
    }).then(function () {
      retrieve();
    })
  })
}
var retrieve = function () {
  let auth2 = gapi.auth2.getAuthInstance();
  let profile = auth2.currentUser.get().getBasicProfile();
  document.getElementById('email-id').innerHTML = profile.getEmail();
  document.getElementById('nama-lengkap').innerHTML = profile.getName();
}

function SignOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User Signed Out.");
    gotoFront();
  });
}

function gotoFront() {
  window.location.replace("http://localhost:4000/");
}

startApp();