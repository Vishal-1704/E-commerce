// custom2.js

// Dummy data for cart items
let cartItems = [
    { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 49.99, quantity: 2 }
];

// Function to update cart display
function updateCartDisplay() {
    let cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            let itemTotal = item.price * item.quantity;
            total += itemTotal;
            cartItemsContainer.innerHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>$${item.price.toFixed(2)}</td>
                    <td>$${itemTotal.toFixed(2)}</td>
                    <td><button class="btn btn-danger" onclick="removeItem(${item.id})">Remove</button></td>
                </tr>
            `;
        });
        document.getElementById('order-total').innerText = `$${total.toFixed(2)}`;
        updateOrderSummary();
    }
}

// Function to update order summary display
function updateOrderSummary() {
    let orderSummaryContainer = document.getElementById('order-summary-items');
    if (orderSummaryContainer) {
        orderSummaryContainer.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            let itemTotal = item.price * item.quantity;
            total += itemTotal;
            orderSummaryContainer.innerHTML += `
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0">${item.name}</h6>
                        <small class="text-muted">Quantity: ${item.quantity}</small>
                    </div>
                    <span class="text-muted">$${itemTotal.toFixed(2)}</span>
                </li>
            `;
        });
        document.getElementById('order-total').innerText = `$${total.toFixed(2)}`;
    }
}

// Function to remove item from cart
function removeItem(itemId) {
    cartItems = cartItems.filter(item => item.id !== itemId);
    updateCartDisplay();
}

// Initial cart display update
updateCartDisplay();
