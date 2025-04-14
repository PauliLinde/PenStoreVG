function loadProductPage() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((products) => render(products));
}

function render(products) {
  let output = '<div class="row g-4">';


  products.forEach((product) => {
    output += `
<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
<div class="card" style="width: 100%">
  <img src="${product.image}" class="card-img-top" alt="${product.title}">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <button class="btn btn-secondary" onclick="addToCart(${product.id})">Add to cart ${(
      product.price * 10).toFixed(2)} kr</a>
  </div>
</div>
</div>
`;
    let productInfo = [
      product.image,
      product.title,
      product.description,
      (product.price *10).toFixed(2),
      0
    ];
    localStorage.setItem(product.id, JSON.stringify(productInfo));
  });


  output += "</div>";

  document.getElementById("Products").innerHTML = output;
}

//Hämtar valda produktens id
/*function loadProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  localStorage.setItem("orderId", id);
  console.log(id);

  //Hämtar produktinformation från Local Storage
  const product = JSON.parse(localStorage.getItem(id));
  console.log(product);

  //Lägger till card till formulärsidan
  document.getElementById("itemToOrder").innerHTML = `<div class="row g-0">
        <div class="col-md-4">
            <img src="${product[0]}" id="image-order" class="img-fluid rounded-start" alt="${product[1]}">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${product[1]}</h5>
            <p class="card-text">${product[2]}</p>
            <p class="card-text"><small class="text-body-secondary">${product[3]} kr</small></p>
            </div>
        </div>
    </div>
    `;
}*/

function loadCompleteOrder() {
  console.log(localStorage.getItem("orderId"));

  let orderId = localStorage.getItem("orderId");
  const product = JSON.parse(localStorage.getItem(orderId));

  removeAll()

  document.getElementById("completeOrder").innerHTML = `<div class="row g-0">
              <h4>Order Complete!</h4>
              <a href="product.html" class="btn btn-secondary">Back to shoping</a>
      </div>
      `;
}

function addToCart(produktID){
  let product = JSON.parse(localStorage.getItem(produktID));
  let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || []
  let existing = shoppingCart.find(item => item [0] === product[0])

  if(existing){
    existing[4] += 1
  }
  else{
    product[4] = 1
    shoppingCart.push(product)
  }
  localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
  updateCart()
}

function addMore(product) {
  let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
  let toAdd = shoppingCart.find(item => item [1] === product)
  toAdd[4] += 1

  localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
  updateCart()
}

function updateCart() {
  let amount = countAmountOfItems();
  let cartUpdate = `<img src="images/shopping-cart.png" alt="shopping cart" width="20px">`;

  if (amount > 0) {
    cartUpdate += ` ${amount}`;
  }

  document.getElementById('cartAmount').innerHTML = cartUpdate;
  getCart();
}

function removeOne(product) {
  let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
  let toRemoveOne = shoppingCart.find(item => item [1] === product)
  
  if(toRemoveOne[4] <= 1) {
    shoppingCart = shoppingCart.filter(item => item[1] !== product)
  }
  else {
    toRemoveOne[4] -= 1
  }
  localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
  updateCart()
}

function removeAll() {
  localStorage.removeItem('shoppingCart')
  updateCart()
}

function  getCart(){
  let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
  let output = '';

  const cartElement = document.getElementById("Cart");
  if (!cartElement) {
    return;
  }

  if (shoppingCart && shoppingCart.length > 0) {
    console.log("Det finns varor")
    
    shoppingCart.forEach((product) => {
      output += `<div class="row g-0">
          <div class="col-md-4">
              <img src="${product[0]}" id="image-order" class="img-fluid rounded-start" alt="${product[1]}">
          </div>
          <div class="col-md-8">
          <div class="card-body">
              <h5 class="card-title">${product[1]}</h5>
              <p class="card-text"><small class="text-body-secondary">${product[3]} kr</small></p>
              <p class="card-text"><small class="text-body-secondary"><button onclick="removeOne('${product[1]}')"><img src="images/minus.png" alt="minus" width="15px"></button>
              ${product[4]}
              <button onclick="addMore('${product[1]}')"><img src="images/add.png" alt="add" width="15px"></button>
              </small></p>
              </div>
          </div>
      </div>
      `;
    });
    let sum = calculateTheSum()
    output += `
    <div id="sumToPay"></div>
      <h4>Sum to pay: ${sum} kr</h4>
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-dark" onclick="window.location.href='order.html'">Buy</button>
        <button type="button" class="btn btn-outline-dark" onclick="removeAll()">Remove cart</button>
      </div>
    `;
  }
  else{
    console.log("Korgen är tom")
    output += `<h4>Your cart is empty</h4>`
  }

  cartElement.innerHTML = output;
}

function calculateTheSum() {
  let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
  let sum = 0;

    shoppingCart.forEach((product) => {

      sum += (product[4] * product[3])
    });
    return sum.toFixed(2)
}

function countAmountOfItems() {
  let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
  let amount = 0;

  if (shoppingCart && shoppingCart.length > 0){
    shoppingCart.forEach((product) => {

      amount += product[4]
    });
  }
    
    return amount
}

function validateForm(e) {
  e.preventDefault();
  let validater = true;

  let name = document.forms["customerForm"]["customerName"].value;
  let mail = document.forms["customerForm"]["e-mail"].value;
  let phone = document.forms["customerForm"]["phoneNumber"].value;
  let street = document.forms["customerForm"]["street"].value;
  let zipcode = document.forms["customerForm"]["zipCode"].value;
  let city = document.forms["customerForm"]["city"].value;

  document.getElementById("nameLable").innerHTML = "First- and Last Name:";
  if (name.length < 2 || name.length > 50) {
    document.getElementById(
      "nameLable"
    ).innerHTML += `<div style="color:Tomato">At least 2 symbols, max 50</div>`;
    validater = false;
  }

  document.getElementById("mailLable").innerHTML = "E-mail:";
  if (!mail.includes("@") || mail.length > 50) {
    document.getElementById(
      "mailLable"
    ).innerHTML += `<div style="color:Tomato">Must contain an '@' symbol</div>`;
    validater = false;
  }

  document.getElementById("phoneLable").innerHTML = "Phone Number:";
  if (/[^\d()-]/.test(phone) || phone == "") {
    document.getElementById(
      "phoneLable"
    ).innerHTML += `<div style="color:Tomato">Only numbers, hyphen and parentheses</div>`;
    validater = false;
  }

  document.getElementById("streetLable").innerHTML = "Street:";
  if (street.length < 2 || street.length > 50) {
    document.getElementById(
      "streetLable"
    ).innerHTML += `<div style="color:Tomato">At least 2 symbols, max 50</div>`;
    validater = false;
  }

  document.getElementById("zipLable").innerHTML = "Zip code:";
  if (zipcode.length != 5 || /[^\d]/.test(zipcode)) {
    document.getElementById(
      "zipLable"
    ).innerHTML += `<div style="color:Tomato">Exactly 5 numbers</div>`;
    validater = false;
  }

  document.getElementById("cityLable").innerHTML = "City:";
  if (city.length < 2 || city.length > 50) {
    document.getElementById(
      "cityLable"
    ).innerHTML += `<div style="color:Tomato">At least 2 symbols, max 50</div>`;
    validater = false;
  }

  if (validater) {
    console.log(localStorage.getItem("orderId"));
    alert("Order Successful");
    window.location = "orderComplete.html";
  }
}
