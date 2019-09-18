document.addEventListener("DOMContentLoaded", () => {
  const baseUrl = "https://randomuser.me/api/";
  let addButton = document.querySelector("button")
  let fullName = document.querySelector("#fullname")
  let email = document.querySelector("#email")
  let street = document.querySelector("#street")
  let city = document.querySelector("#city")
  let state = document.querySelector("#state")
  let postcode = document.querySelector("#postcode")
  let phone = document.querySelector("#phone")
  let cell = document.querySelector("#cell")
  let date_of_birth = document.querySelector("#date_of_birth")

  addButton.addEventListener("click",getAllData)
  
  function getAllData() {
    fetch(baseUrl)
    .then(resp => resp.json()
    .then(json => renderAllData(json.results[0])));
    
    
  }
  
  
  function renderAllData(json) {
    fullName.innerText = json.name.first + " " + json.name.last 
    email.innerText = json.email 
    street.innerText = json.location.street
    city.innerText = json.location.city
    postcode.innerText = json.location.postcode 
    phone.innerText = json.phone
    cell.innerText = json.cell 
    state.innerText = json.location.state
    date_of_birth.innerText = json.dob.date.split("T")[0]
  }
  
});