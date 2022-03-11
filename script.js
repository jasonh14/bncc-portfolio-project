const firebaseConfig = {
  apiKey: "AIzaSyD1e7g-q_r-LeOZB2uIr1t8npBDCTxYZMc",
  authDomain: "contactform-f594e.firebaseapp.com",
  databaseURL: "https://contactform-f594e-default-rtdb.firebaseio.com",
  projectId: "contactform-f594e",
  storageBucket: "contactform-f594e.appspot.com",
  messagingSenderId: "24898659001",
  appId: "1:24898659001:web:7c7dddec0e01f348917168",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const contactFormDB = firebase.database().ref("contactForm");

const form = document.getElementById("form");
const nameuser = document.getElementById("name-box");
const email = document.getElementById("email-box");
const phone = document.getElementById("phone-box");
const comment = document.getElementById("comment-box");

form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  const newContactForm = contactFormDB.push();

  newContactForm.set({
    username: nameuser.value,
    email: email.value,
    phone: phone.value,
    comment: comment.value,
  });

  nameuser.value = "";
  email.value = "";
  phone.value = "";
  comment.value = "";
}
