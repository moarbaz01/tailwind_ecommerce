

// Function for image change 
function imageChange(src) {
    productBigImg.src = src;
    localStorage.setItem('productPageImage' , src)
}


// Functions for increment and decrement 
function increment(num) {
    quantity.innerHTML = parseInt(quantity.innerHTML) + num;
}

function decrement(num) {
    if (quantity.innerHTML == 1) {
        
    } else {
        quantity.innerHTML = parseInt(quantity.innerHTML) + num;
    }
}



function changeItemsOnShowPage() {
    let productPrice = document.querySelector('.productPrice');
    let productName = document.querySelector('.productName');
    let productFirstImage = document.querySelector('.productFirstImage');
    let productSmallImage = document.querySelectorAll('.productSmallImage')

    productName.textContent = localStorage.getItem('name');
    productPrice.textContent = localStorage.getItem('price');
    productFirstImage.src = localStorage.getItem('image');
    
    for(let i = 0 ; i < productSmallImage.length ; i++) {

    productSmallImage[i].src = localStorage.getItem('title') + i + '.png'; 

   }

}

changeItemsOnShowPage()



// let addToCartBtn = document.getElementById('add-to-cart-btn');

// addToCartBtn.addEventListener('click', () => {
//   let productName = localStorage.getItem('name');
//   let productPrice = localStorage.getItem('price');
  
//   // Append query parameters to the URL
//   let url = 'cart_list.html';
//   url += '?name=' + encodeURIComponent(productName);
//   url += '&price=' + encodeURIComponent(productPrice);
  
//   window.location.href = url;
// });


