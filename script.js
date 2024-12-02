const products = [
  { name: "iPhone 13", price: 799.00, category: "smartphones", image: "iPhone 13.jpg ", description: "Latest iPhone with A15 chip, 5G support.", rating: 5.0, reviews: 230 },
  { name: "Samsung Galaxy S21", price: 899.00, category: "smartphones", image: " Samsung Galaxy S21.jpg", description: "Powerful smartphone with stunning display.", rating: 5.0, reviews: 150 },
  { name: "Google Pixel 6", price: 749.00, category: "smartphones", image: "Google Pixel 6.jpg ", description: "Android phone with Google’s Tensor chip.", rating: 4.0, reviews: 120 },
  { name: "OnePlus 9", price: 729.00, category: "smartphones", image: " OnePlus 9.jpg", description: "Fast charging, sleek design, high performance.", rating: 3.5, reviews: 200 },

{ name: "iPad Air", price: 599.00, category: "tablets", image: " iPad Air.jpg", description: "Lightweight tablet with powerful performance.", rating: 4.0, reviews: 80 },
  { name: "Samsung Galaxy Tab S7", price: 649.00, category: "tablets", image: " Samsung Galaxy Tab S7.jpg", description: "Powerful tablet with a high refresh rate screen.", rating: 4.0, reviews: 130 },
  { name: "Microsoft Surface Pro 7", price: 799.00, category: "tablets", image: " Microsoft Surface Pro 7.jpg", description: "Convertible tablet with keyboard and stylus support.", rating: 3.5, reviews: 200 },
  { name: "Amazon Fire HD 10", price: 149.00, category: "tablets", image: " Amazon Fire HD 10.jpg", description: "Affordable tablet with a decent display.", rating: 3.0, reviews: 320 },

 { name: "MacBook Pro 16-inch Laptop", price: 2399.00, category: "laptops", image: "MacBook Pro 16-inch.jpg", description: "Powerful 16-inch laptop with M1 Pro chip.", rating: 3.0, reviews: 180 },
  { name: "Dell XPS 13   Laptop", price: 999.00, category: "laptops", image: "Dell XPS 13.jpg", description: "Compact and powerful laptop.Best for daily use and office purpose", rating: 3.0, reviews: 250 },
  { name: "HP Spectre x360", price: 1159.00, category: "laptops", image: " HP Spectre x360.jpg", description: "2-in-1 laptop with a beautiful design.", rating: 5.0, reviews: 160 },
  { name: "Microsoft Surface Laptop 4", price: 1399.00, category: "laptops", image: " Microsoft Surface Laptop 4.jpg", description: "Perfect laptop for business and everyday use.", rating: 3.5, reviews: 140 },

  { name: "Philips Sonicare Electric Toothbrush", price: 99.00, category: "accessories", image: " Philips Sonicare Electric Toothbrush.jpg", description: "Electric toothbrush for superior oral care.", rating: 4.0, reviews: 80 },
  { name: "Razer BlackWidow V3", price: 129.00, category: "accessories", image: "Razer BlackWidow V3.jpg", description: "Mechanical gaming keyboard with RGB lighting.", rating: 4.5, reviews: 60 },

  { name: "Fitbit Charge 5", price: 179.00, category: "accessories", image: " Fitbit Charge 5.jpg", description: "Smart fitness tracker with built-in GPS.", rating: 4.0, reviews: 150 },
  { name: "Nikon D3500 DSLR Camera", price: 449.00, category: "accessories", image: " Nikon D3500 DSLR Camera.jpg", description: "Easy-to-use DSLR camera for beginners.", rating: 3.5, reviews: 220 },

 
  
  { name: "Apple AirPods Pro", price: 249.00, category: "accessories", image: "Apple AirPods Pro.jpg", description: "Noise-cancelling wireless earbuds.", rating: 5.0, reviews: 300 },
  { name: "Logitech MX Master 3", price: 99.00, category: "accessories", image: " Logitech MX Master 3.jpg", description: "Advanced wireless mouse for productivity.", rating: 4.5, reviews: 220 },
   { name: "Sony WH-1000XM4", price: 348.00, category: "accessories", image: " Sony WH-1000XM4.jpg", description: "Industry-leading noise cancellation headphones.", rating: 4.5, reviews: 180 },

  { name: "Amazon Echo Dot (4th Gen)", price: 49.00, category: "accessories", image: " Amazon Echo Dot (4th Gen).jpg", description: "Smart speaker with Alexa built-in.", rating: 3.5, reviews: 350 },
];

let cart = [];

// Function to display products
function displayProducts(products) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = ''; // Clear existing products

  products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <img class="product-image" src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: $${product.price.toFixed(2)}</p>
      <p>Rating: ${generateStars(product.rating)} (${product.reviews} reviews)</p>
      <button class="add-to-cart" onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
    `;
    productList.appendChild(productCard);
  });

  // Apply styles to the buttons and images
  applyStyles();
}

// Function to generate star ratings
function generateStars(rating) {
  const fullStars = Math.floor(rating); // Full stars
  const halfStar = rating % 1 >= 0.5 ? "⭐" : ""; // Half star if applicable
  return "⭐".repeat(fullStars) + halfStar;
}

// Function to apply styles to buttons and images
function applyStyles() {
  // Style Add to Cart Buttons
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.style.borderRadius = '20px'; // Curved border
    button.style.padding = '10px 20px'; // Some padding for the button
    button.style.fontSize = '14px'; // Font size for better readability
    button.style.transition = 'all 0.3s ease'; // Smooth transition on hover
    button.style.backgroundColor = '#28a745'; // Green color for add to cart
    button.style.border = 'none'; // Remove default border
    button.style.cursor = 'pointer'; // Pointer cursor to show it's clickable
    button.style.color= '#fff'; // white text color
    button.addEventListener('mouseover', function () {
    button.style.backgroundColor = '#218838'; // Darker green on hover
    button.style.color= '#fff'; // white text color

    });
    button.addEventListener('mouseout', function () {
      button.style.backgroundColor = '#28a745'; // Reset to original green color
    });
  });

  // Style Remove from Cart Buttons
  const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
  removeFromCartButtons.forEach(button => {
    button.style.borderRadius = '20px'; // Curved border
    button.style.padding = '5px 10px'; // Some padding for the button
    button.style.fontSize = '12px'; // Font size for better readability
    button.style.transition = 'all 0.3s ease'; // Smooth transition on hover
    button.style.backgroundColor = '#dc3545'; // Red color for remove button
    button.style.color= '#fff'; // white text color
    button.style.border = 'none'; // Remove default border
    button.style.cursor = 'pointer'; // Pointer cursor to show it's clickable
    button.addEventListener('mouseover', function () {
      button.style.backgroundColor = '#c82333'; // Darker red on hover
    });
    button.addEventListener('mouseout', function () {
      button.style.backgroundColor = '#dc3545'; // Reset to original red color
    });
  });

  // Style Product Images
  const productImages = document.querySelectorAll('.product-image');
  productImages.forEach(image => {
    image.style.borderRadius = '8px'; // Slight curve for images
    image.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease'; // Smooth transformation
    image.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)'; // Subtle shadow for depth
    
    // Hover effect to scale the image
    image.addEventListener('mouseover', () => {
      image.style.transform = 'scale(1.05)'; // Slight zoom effect
      image.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)'; // Darker shadow on hover
    });

    image.addEventListener('mouseout', () => {
      image.style.transform = 'scale(1)'; // Reset zoom effect
      image.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)'; // Reset shadow
    });
  });
}

// Function to filter products by category
function filterByCategory(category) {
  let filteredProducts;
  if (category === 'all') {
    filteredProducts = products; // Show all products
  } else {
    filteredProducts = products.filter((product) => product.category === category); // Filter by selected category
  }
  displayProducts(filteredProducts); // Display filtered products
}

// Function to filter products by exact rating
function filterByRating(rating) {
  let filteredProducts;
  if (rating === 'all') {
    filteredProducts = products; // Show all products
  } else {
    filteredProducts = products.filter((product) => product.rating === parseFloat(rating)); // Show products with exact rating
  }
  displayProducts(filteredProducts); // Display filtered products
}

// Function to filter products by price range
function filterByPrice(maxPrice) {
  const filteredProducts = products.filter((product) => product.price <= maxPrice);
  displayProducts(filteredProducts);
}

// Function to sort products by price
function sortByPrice(order) {
  const sortedProducts = [...products]; // Create a copy to sort
  if (order === 'low-to-high') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (order === 'high-to-low') {
    sortedProducts.sort((a, b) => b.price - a.price);
  }
  displayProducts(sortedProducts);
}

// Function to add product to cart
function addToCart(name, price) {
  const item = cart.find((item) => item.name === name);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}

// Function to remove product from cart
function removeFromCart(name) {
  cart = cart.filter((item) => item.name !== name);
  updateCart();
}

// Function to update cart display
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');
  cartItems.innerHTML = ''; // Clear existing cart items
  let total = 0;
  cart.forEach((item) => {
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} 
    <button style="background-color: red; color: white; border-radius: 5px; padding: 5px 10px;" onclick="removeFromCart('${item.name}')">Remove</button>`;
    cartItems.appendChild(cartItem);
    total += item.price * item.quantity;
  });
  totalPrice.innerHTML = `Total Price: $${total.toFixed(2)}`;
}

// Initialize the product display when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Add event listeners for rating and price range filters
  const ratingFilter = document.getElementById('rating-filter');
  ratingFilter.addEventListener('change', function () {
    const selectedRating = ratingFilter.value;
    filterByRating(selectedRating);
  });

  const priceRange = document.getElementById('price-range');
  priceRange.addEventListener('input', function () {
    const maxPrice = priceRange.value;
    updatePriceValue(maxPrice);
    filterByPrice(maxPrice);
  });

  const sortFilter = document.getElementById('sort-filter');
  sortFilter.addEventListener('change', function () {
    const sortOrder = sortFilter.value;
    sortByPrice(sortOrder);
  });

  displayProducts(products); // Display all products initially
});

// Function to update price value display
function updatePriceValue(value) {
  const priceValue = document.getElementById('price-value');
  priceValue.innerHTML = `$${value}`;
}
