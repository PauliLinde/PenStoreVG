fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => render(products));

function render(products) {
  let output = '<div class="row">';

  products.forEach((product) => {
    output += `
<div class="col-md-4">
<div class="card" style="width: 18rem;">
  <img src="${product.image}" class="card-img-top" alt="${product.title}">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.description}</p>
    <a href="order.html?id=${product.id}" class="btn btn-primary">Buy ${product.price}</a>
  </div>
</div>
</div>
`;
  });

  output += "</div>";

  document.getElementById("Products").innerHTML = output;
}

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
//zipcode.length < 5 ||zipcode.length > 5
