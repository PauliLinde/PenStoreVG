
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(products=>render(products))

function render(products){

let output = '<div class="row">'

products.forEach(product => {
output += `
<div class="col-12 col-md-6 col-lg-3 mb-4">
<div class="card" style="width: 18rem;">
  <img src="${product.image}" class="card-img-top" alt="${product.title}">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.description}</p>
    <a href="order.html?id=${product.id}" class="btn btn-secondary">Buy ${product.price}</a>
  </div>
</div>
</div>
`
});


output += '</div>'

document.getElementById('Products').innerHTML = output
}
  
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
    