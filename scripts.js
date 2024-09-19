function searchProducts() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let products = document.getElementsByClassName('product');

    for (let i = 0; i < products.length; i++) {
        let productName = products[i].getAttribute('data-name').toLowerCase();
        if (productName.includes(input)) {
            products[i].style.display = '';
        } else {
            products[i].style.display = 'none';
        }
    }
}
