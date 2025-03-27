//Hämtar valda produktens id
const params = new URLSearchParams(window.location.search)
const id = params.get('id')
console.log(id)

//Hämtar produktinformation från Local Storage
const product = JSON.parse(localStorage.getItem(id))
console.log(product)

//Lägger till card till formulärsidan
document.getElementById('itemToOrder').innerHTML =
    `<div class="row g-0">
        <div class="col-md-4">
            <img src="${product[0]}" class="img-fluid rounded-start" alt="${product[1]}">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${product[1]}</h5>
            <p class="card-text">${product[2]}</p>
            <p class="card-text"><small class="text-body-secondary">${product[3]}$</small></p>
            </div>
        </div>
    </div>
    `;

function validateForm() {
    let name = document.forms["customerForm"]["customerName"].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    let mail = document.forms["customerForm"]["e-mail"].value;
    if (mail == "") {
      alert("Mail must be filled out");
      return false;
    }
    let phone = document.forms["customerForm"]["phoneNumber"].value;
    if (phone == "") {
      alert("Phonenumber must be filled out");
      return false;
    }
    let street = document.forms["customerForm"]["street"].value;
    if (street == "") {
      alert("Street must be filled out");
      return false;
    }
    let zipcode = document.forms["customerForm"]["zipCode"].value;
    if (zipcode == "") {
      alert("Zip-code must be filled out");
      return false;
    }
    let city = document.forms["customerForm"]["city"].value;
    if (city == "") {
      alert("City must be filled out");
      return false;
    }
  }
    