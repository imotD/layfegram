function onSignIn(googLeUser) {
  var profile = googleUser.getBasicProfile();
  console.log(`Full Name: ${profile.getName()}`);
  console.log(`Email: ${profile.getEmail()}`);

  var x = document.getElementsByClassName("logged");

  for (var i = 0; i <= x.length; i++) {
    x[0].classList.remove("logged");
  }
}

function onSignOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User Signed Out.");
    hideDashboard();
  });
}

function hideDashboard() {
  var x = document.getElementsByClassName("onlylogged");
  for (var i = 0; i <= i.length; i++) {
    x[i].classList.add("logged");
  }
}

function gotoDashboard() {
  window.location.replace("http://127.0.0.1:5500/dashboard.html");
}