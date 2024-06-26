document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to "Buy Now" buttons
    const buyNowButtons = document.querySelectorAll('.buy-now');
    buyNowButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            alert('This feature is not yet implemented.');
        });
    });

    // Add event listeners to "View Details" buttons
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = 'single-product.html';
        });
    });
});
