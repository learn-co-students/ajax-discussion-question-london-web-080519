const fullname = document.getElementById("fullname");
const emailTag = document.getElementById("email");
const streetTag = document.getElementById("street");
const cityTag = document.getElementById("city");
const stateTag = document.getElementById("state");
const postcodeTag = document.getElementById("postcode");
const phoneId = document.querySelector("#phone");
const cellId = document.querySelector("#cell");
const dobID = document.querySelector("#date_of_birth")

const button = document.querySelector("button.btn-primary");

console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  function addFullName(name) {
    fullname.innerText = `${name["title"]} ${name["first"]} ${name["last"]}`;
  }

  function addEmail(email) {
    emailTag.innerText = `${email}`;
  }

  function addLocation(location) {
    streetTag.innerText = `${location["street"]}`
    cityTag.innerText = `${location["city"]}`
    stateTag.innerText = `${location["state"]}`
    postcodeTag.innerText = `${location["postcode"]}`
  }

  function addPhone(phone) {
    phoneId.innerText = `${phone}`
  }

  function addCell(cell) {
    cellId.innerText = `${cell}`
  }

  function addDOB(dob) {
    dobID.innerText = `${dob["date"]}`
  }

  button.addEventListener("click", function(event) { 
 
  function getRandomUser() {
    fetch("https://randomuser.me/api")
      .then(resp => resp.json())
      .then(json => {
        const userDetails = json["results"][0]
        addFullName(userDetails["name"])
        addEmail(userDetails["email"])
        addLocation(userDetails["location"])
        addPhone(userDetails["phone"])
        addCell(userDetails["cell"])
        addDOB(userDetails["dob"])
       }
        //console.log(json["results"][0]["name"]["title"])
      )};
  getRandomUser()
  });
}); 

// operate on the return value of getRandomUser