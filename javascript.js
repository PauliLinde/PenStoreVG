
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(products=>render(products))

function render(products){

    let output = '<div class="row">'

    products.forEach(product => {
      output += `
        <div class="col-md-4">
        <div class="card" style="width: 18rem;">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <a href="order.html?id=${product.id}" class="btn btn-primary">Buy ${product.price}$</a>
          </div>
        </div>
        </div>
        `;

        let productInfo = [product.image, product.title, product.description, product.price]
        localStorage.setItem(product.id, JSON.stringify(productInfo))
    });


    output += '</div>'

    document.getElementById('Products').innerHTML = output
}

