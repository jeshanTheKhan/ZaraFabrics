function updateQuantity(button, change) {
    const quantityElement = button.parentElement.querySelector('.quantity-number');
    let currentQuantity = parseInt(quantityElement.textContent);

    currentQuantity += change;
    if (currentQuantity < 1) {
        currentQuantity = 1; // Prevent quantity from going below 1
    }
    quantityElement.textContent = currentQuantity;
}

function deleteProduct(button) {
    const productRow = button.parentElement.parentElement;
    productRow.remove();
}

function hideAddress(){
    document.getElementById('shipForm').style.display = 'none'
}
