// const fullname = document.getElementById("fullname");
// console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  let fullname = document.querySelector("#fullname");
  let email = document.querySelector("#email");
  let street = document.querySelector("#street");
  let city = document.querySelector("#city");
  let state = document.querySelector("#state");
  let postcode = document.querySelector("#postcode");
  let phone = document.querySelector("#phone");
  let cell = document.querySelector("#cell");
  let date_of_birth = document.querySelector("#date_of_birth");
  let button = document.querySelector("button");
  
  function fetchData() {
    fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( json => displayData(json.results[0]))
  }

  function displayData(json) {
    fullname.innerText = json.name.first + " " + json.name.last;
    email.innerText = json.email;
    street.innerText = json.location.street;
    city.innerText = json.location.city;
    state.innerText = json.location.state;
    postcode.innerText = json.location.postcode;
    phone.innerText = json.phone;
    cell.innerText = json.cell;
    date_of_birth.innerText = json.dob.date;
  }

  button.addEventListener("click", fetchData);
});
