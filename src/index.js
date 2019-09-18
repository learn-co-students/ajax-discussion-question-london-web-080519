const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postcode = document.getElementById("postcode");
const phone = document.getElementById("phone");
const cell = document.getElementById("cell");
const date_of_birth = document.getElementById("date_of_birth");
const pro_pic = document.getElementById("profile_picture")

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector('button.btn')
  button.addEventListener("click", function(e) {
    fetch('https://randomuser.me/api/')
      .then(resp => resp.json())
      .then(handleDOMManipulation)
  })
  
  
  
  
});

function handleDOMManipulation(obj) {
  fullname.innerText = getName(obj)
  email.innerText = getEmail(obj)
  street.innerText = getStreet(obj)
  city.innerText = getCity(obj)
  state.innerText = getState(obj)
  postcode.innerText = getPostcode(obj)
  phone.innerText = getPhone(obj)
  cell.innerText = getCell(obj)
  date_of_birth.innerText = getDOB(obj)

  pro_pic.setAttribute('src', getImage(obj))

  console.log("CONTENT LOADED!");
}

function getName(obj) {
  const nameObj = obj.results[0].name
  const title = nameObj.title[0].toUpperCase() + nameObj.title.slice(1)
  const first = nameObj.first[0].toUpperCase() + nameObj.first.slice(1)
  const last = nameObj.last[0].toUpperCase() + nameObj.last.slice(1)
  return `${title} ${first} ${last}`
}

function getEmail(obj) {
  return obj.results[0].email
}

function getStreet(obj) {
  return obj.results[0].location.street
}

function getCity(obj) {
  return obj.results[0].location.city
}

function getState(obj) {
  return obj.results[0].location.state
}

function getPostcode(obj) {
  return obj.results[0].location.postcode
}

function getPhone(obj) {
  return obj.results[0].phone
}

function getCell(obj) {
  return obj.results[0].cell
}

function getDOB(obj) {
  let rawDate = new Date(obj.results[0].dob.date)
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return `${rawDate.getDay()} ${months[rawDate.getMonth()]}, ${rawDate.getFullYear()}`
}

function getImage(obj) {
  return obj.results[0].picture.large
}