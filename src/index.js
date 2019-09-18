const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

// define variables
const button = document.querySelector('.btn.btn-primary')
let name = document.querySelector('#fullname')
let email = document.querySelector('#email')
let street = document.querySelector('#street')
let city = document.querySelector('#city')
let state = document.querySelector('#state')
let postcode = document.querySelector('#postcode')
let phone = document.querySelector('#phone')
let cell = document.querySelector('#cell')
let dob = document.querySelector('#date_of_birth')


// ------- define functions, and their corresponding event listeners ------- //

function addName(firstname, lastname, title){
  name.innerText = `${title} ` + `${firstname} ` + `${lastname}` 
}

function addEmail(newemail){
  email.innerText = `${newemail}`
}

function addLocation(newlocation){
  street.innerText = `${newlocation['street']}`
  city.innerText = `${newlocation['city']}`
  state.innerText = `${newlocation['state']}`
  postcode.innerText = `${newlocation['postcode']}`
}

function addPhone(newphone){
  phone.innerText = `${newphone}`
}

function addCell(newcell){
  cell.innerText = `${newcell}`
}

function addDob(newdob){
  let splitdob = newdob.split("-")
  let day = splitdob[2][0] + splitdob[2][1]
  let month = splitdob[1]
  let year = splitdob[0]
  let altogether = `${day}`+'/'+`${month}`+'/'+`${year}`
  dob.innerText = `${altogether}`
}


// overall function and event listener

function fetchRandomUser() {
  return fetch('https://randomuser.me/api/')
    .then(function(response) {
      return response.json();
    })
    .then(function(json){
      newUser = json["results"][0]
      addName(newUser["name"]['first'], newUser["name"]['last'], newUser["name"]['title'])
      addEmail(newUser["email"])
      addLocation(newUser['location'])
      addPhone(newUser['phone'])
      addCell(newUser['cell'])
      addDob(newUser['dob']['date'])
    })
  
}

button.addEventListener('click', fetchRandomUser)