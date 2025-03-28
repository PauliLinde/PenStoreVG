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
      let validater = true;
    
      let name = document.forms["customerForm"]["customerName"].value;
    
      document.getElementById("nameLable").innerHTML = "För- och Efternamn:";
      if (name.length < 2 || name.length > 50) {
        //alert("Name must be filled out");
        document.getElementById(
          "nameLable"
        ).innerHTML += `<div style="color:Tomato">Minst 2 tecken, max 50</div>`;
        validater = false;
      }
      let mail = document.forms["customerForm"]["e-mail"].value;
    
      document.getElementById("mailLable").innerHTML = "E-post:";
      if (!mail.includes("@") || mail.length > 50) {
        //alert("Mail must be filled out");
        document.getElementById(
          "mailLable"
        ).innerHTML += `<div style="color:Tomato">En e-post måste innehålla '@'</div>`;
        validater = false;
      }
      let phone = document.forms["customerForm"]["phoneNumber"].value;
    
      document.getElementById("phoneLable").innerHTML = "Telefonnummer:";
      if (/[^\d()-]/.test(phone) || phone == "") {
        //alert("Phonenumber must be filled out");
        document.getElementById(
          "phoneLable"
        ).innerHTML += `<div style="color:Tomato">Endast siffror, bindestreck och parenteser</div>`;
        validater = false;
      }
    
      let street = document.forms["customerForm"]["street"].value;
      document.getElementById("streetLable").innerHTML = "Gatuadress:";
      if (street.length < 2 || street.length > 50) {
        //alert("Street must be filled out");
        document.getElementById(
          "streetLable"
        ).innerHTML += `<div style="color:Tomato">Minst 2 tecken, max 50</div>`;
        validater = false;
      }
    
      let zipcode = document.forms["customerForm"]["zipCode"].value;
      document.getElementById("zipLable").innerHTML = "Postnummer:";
      if (zipcode.length != 5 || /[^\d]/.test(zipcode)) {
        //alert("Zip-code must be filled out");
        document.getElementById(
          "zipLable"
        ).innerHTML += `<div style="color:Tomato">Exakt 5 siffror</div>`;
        validater = false;
      }
    
      let city = document.forms["customerForm"]["city"].value;
      document.getElementById("cityLable").innerHTML = "Ort:";
      if (city.length < 2 || city.length > 50) {
        //alert("City must be filled out");
        document.getElementById(
          "cityLable"
        ).innerHTML += `<div style="color:Tomato">Minst 2 tecken, max 50</div>`;
        validater = false;
      }
    
      return validater;
    }
    