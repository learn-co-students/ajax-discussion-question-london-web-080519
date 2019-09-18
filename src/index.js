// const fullname = document.getElementById("fullname");
// console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

const button = document.querySelector("button")
const street = document.querySelector("#street")
const city = document.querySelector("#city")
const state = document.querySelector("#state")
const post = document.querySelector("#postcode") 
const name = document.querySelector("#fullname")
const phone = document.querySelector("#phone")
const cell = document.querySelector("#cell")
const email= document.querySelector("#email")
const dob = document.querySelector("#date_of_birth")


button.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  fetchData()
}

// function fetchData(){
//     fetch('https://randomuser.me/api/')
//     .then( res => res.json() )
//     // enter how you want json rendered .then( json => SOMETIHNG))
// }

function fetchData(){
    fetch('https://randomuser.me/api/')
      .then( res => res.json() )
      .then( json => renderResults(json.results[0]) )
}

function renderResults(json){

  let fullName= "${json.name.first} ${json.name.last}"

  street.innerText = upper(json.location.street)
  city.innerText = upper(json.location.city)
  state.innerText = upper(json.location.state)
  post.innerText = json.location.postcode
  name.innerText = upper(json.name.first)+" "+upper(json.name.last)
  phone.innerText = json.phone
  cell.innerText = json.cell
  email.innerText = json.email
  dob.innerText = json.dob.date
}


function upper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
  }