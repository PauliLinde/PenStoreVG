/*
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => render(products));

function render(products){

    let output = '<div class="row">'

products.forEach(product => {
output += `
<div class="col-12 col-md-6 col-lg-3 mb-4">
<div class="card" style="width: 18rem;">
  <img src="${product.image}" class="card-img-top" alt="${product.title}">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <a href="order.html?id=${product.id}" class="btn btn-secondary">Köp ${(product.price * 10).toFixed(2)}kr</a>
  </div>
</div>
</div>
`
let productInfo = [product.image, product.title, product.description, product.price]
localStorage.setItem(product.id, JSON.stringify(productInfo))
});

    output += '</div>'

    document.getElementById('Products').innerHTML = output
}
    */