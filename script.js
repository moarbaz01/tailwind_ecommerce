
let productBigImg = document.getElementById('productBigImg')
let quantity = document.getElementById('quantity')
let product = document.querySelectorAll('.product')

// Product Details fetch


// First we will add forEach loop in product to get all child element 

product.forEach((item) => {

    item.addEventListener('click', () => {

        var imageSrc = item.querySelector('.productImage').src;
        var parsedURL = new URL(imageSrc)

        // Product  Short Images Target 

        localStorage.setItem('price', item.querySelector('.price').textContent);
        localStorage.setItem('name', item.querySelector('.name').textContent);
        localStorage.setItem('image', parsedURL.pathname);
        localStorage.setItem('title', item.title);

        window.location.href = 'cart.html';

        // target all  productSmallImage elements by using for each loop

    })

});




// Click On ADD To Cart Button 

