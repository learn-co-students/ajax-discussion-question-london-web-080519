const fullname = document.getElementById("fullname");
const emailTag = document.getElementById("email")
const streetTag = document.getElementById("street")
const cityTag = document.getElementById("city")
const stateTag = document.getElementById("state")
const postcodeTag = document.getElementById("postcode")
const phoneTag = document.getElementById("phone")
const cellTag = document.getElementById("cell")
const dobTag = document.getElementById("date_of_birth")
const button = document.querySelector("button");

console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  button.addEventListener("click", function(event) {

    function addFullname(name) {
      fullname.innerText = `${name["title"]} ${name["first"]} ${name["last"]}`
    }

    function addEmail(email) {
      emailTag.innerText = email
    }

    function addLocation(location) {
      streetTag.innerHTML = location["street"]
      cityTag.innerHTML = location["city"]
      stateTag.innerHTML = location["state"]
      postcodeTag.innerHTML = location["postcode"]
    }

    function addPhone(phone) {
      phoneTag.innerText = phone
    }

    function addCell(cell) {
      cellTag.innerText = cell
    }

    function addDob(dob) {
      dobTag.innerText = dob["date"]
    }

    function getRandomUser() {
      fetch("https://randomuser.me/api/")
        .then(resp => resp.json())
        .then(json => {
          const userDetails = json["results"][0]
          addFullname(userDetails["name"])
          addEmail(userDetails["email"])
          addLocation(userDetails["location"])
          addPhone(userDetails["phone"])
          addCell(userDetails["cell"])
          addDob(userDetails["dob"])
        });
    }

    getRandomUser()
  });
});
