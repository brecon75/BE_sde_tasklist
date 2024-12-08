// Dummy product data
const products = [
    { name: "Smartphone", price: "$299", category: "Electronics" },
    { name: "Laptop", price: "$799", category: "Electronics" },
    { name: "T-shirt", price: "$19", category: "Clothing" },
    { name: "Jeans", price: "$49", category: "Clothing" },
    { name: "Sofa", price: "$499", category: "Home" },
    { name: "Lamp", price: "$29", category: "Home" }
  ];
  
  // display products
  function displayProducts(filteredProducts) {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Clear the current list
  
    // loop through each filtered product and display it
    filteredProducts.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <p class="price">${product.price}</p>
      `;
      
      productList.appendChild(productCard);
    });
  }
  
  //filter products based on category
  function filterProducts(category) {
    let filteredProducts;
  
    if (category === 'all') {
      filteredProducts = products;
    } else {
      filteredProducts = products.filter(product => product.category === category);
    }
  
    displayProducts(filteredProducts);
  }
  
  //initial display of all products
  displayProducts(products);
  