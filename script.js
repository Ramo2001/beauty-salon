document.addEventListener('DOMContentLoaded', function() {
    const navButton = document.querySelector('.nav-button');
    const navList = document.querySelector('.nav-list');
  
    navButton.addEventListener('click', function() {
    navList.classList.toggle('active');
    });
   });
/*products */  
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const productFormSection = document.getElementById('productForm');
    const addProductForm = document.getElementById('addProductForm');
    const productList = document.getElementById('productList');
  
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    updateUI(isLoggedIn);
  
    // Login functionality (basic)
    loginBtn.addEventListener('click', function() {
    // In a real application, you'd validate credentials
    localStorage.setItem('isLoggedIn', 'true');
    updateUI('true');
    });
  
    // Logout functionality
    logoutBtn.addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');
    updateUI(null);
    });
  
    // Add product functionality (basic)
    addProductForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const productName = document.getElementById('productName').value;
    const productImage = document.getElementById('productImage').value;
    const productDescription = document.getElementById('productDescription').value;
  
    // Create product HTML
    const productHTML = `
    <div class="product">
    <img src="${productImage}" alt="${productName}">
    <h3>${productName}</h3>
    <p>${productDescription}</p>
    </div>
    `;
  
    // Append to product list
    productList.querySelector('.products-grid').innerHTML += productHTML;
  
    // Clear the form
    addProductForm.reset();
    productFormSection.style.display = 'none';
    });
  
    // Function to update UI based on login status
    function updateUI(isLoggedIn) {
    if (isLoggedIn) {
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'block';
    productFormSection.style.display = 'block';
    } else {
    loginBtn.style.display = 'block';
    logoutBtn.style.display = 'none';
    productFormSection.style.display = 'none';
    }
    }
   });
  