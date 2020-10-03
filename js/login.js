function onSignIn(googleUser) {
  let profile = googleUser.getBasicProfile();
  console.log(`Full Name: ${profile.getName()}`);
  console.log(`Email: ${profile.getEmail()}`);

  let x = document.getElementsByClassName("logged");
  for (let i = 0; i < x.length; i++) {
    x[0].classList.remove("logged");
  }
}

function onSignOut() {
  let auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    .console.log("User Signed Out.");
    hideDashboard();
  })
}

function hideDashboard() {
  let x = document.getElementsByClassName("onlylogged");
  for (let i = 0; i < array.length; i++) {
    x[i].classList.add("logged");
  }
}

function gotoDashboard() {
  window.location.replace("http://127.0.0.1:5500/dashboard.html");
}