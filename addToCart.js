// Cart Page 
let cartItemsContainer = document.querySelector('.cart-items-container');
let addToCartBtn = document.querySelector('#add-to-cart-btn');


// Function To Make List  of product I mean product list in cart 
function continueShoppingBtn() {
  const shoppingCartPage = document.getElementById('shoppingCartPage')
  shoppingCartPage.style.display = 'none';
}

function openShoppingCart() {
  const shoppingCartPage = document.getElementById('shoppingCartPage')
  shoppingCartPage.style.display = 'block';

}

function loadcart() {
  cartItemsContainer.innerHTML = localStorage.getItem('fullCart')
}

const priceArr = [];
let arr = [];

// Function for total price 

function totalCartListProductPrice() {
  const cartProductPriceContainer = document.querySelectorAll('.cart-list-product-price');
  const totalPriceOnCheckout = document.querySelector('.totalPriceOnCheckout');


  cartProductPriceContainer.forEach((item) => {
    priceArr.push(Number(item.textContent))
  })

  totalPriceOnCheckout.textContent = priceArr.reduce((accumulator, value) => {
    return accumulator + value;
  })

  console.log(priceArr)

}
// function totalCartListProductPriceUpdate() {
//   const cartProductPriceContainer = document.querySelectorAll('.cart-list-product-price');
//   const totalPriceOnCheckout = document.querySelector('.totalPriceOnCheckout');


//   cartProductPriceContainer.forEach((item) => {
//     priceArr.push(Number(item.textContent))
//   })

//   totalPriceOnCheckout.textContent = priceArr.reduce((accumulator, value) => {
//     return accumulator + value;
//   })

//   console.log(priceArr)

// }

//  Function for total price update 



// Function to create a new <tr> element for each product in the cart
addToCartBtn.addEventListener('click', () => {
  // Retrieve the product details from the localStorage
  const productName = localStorage.getItem('name');
  const productPrice = localStorage.getItem('price');
  const productPageImage = localStorage.getItem('image');

  // Create the <tr> element
  const tr = document.createElement('tr');
  tr.className = 'border-b-2 cart-container'

  // Create the first <td> element containing the product image and name
  const td1 = document.createElement('td');
  const td1Div = document.createElement('div');
  td1Div.className = 'flex items-center gap-4';

  const td1DivImg = document.createElement('img');
  td1DivImg.className = 'h-32 payment-page-product-img';
  td1DivImg.src = productPageImage;

  const td1DivDiv = document.createElement('div');
  const td1DivDivH2 = document.createElement('h2');
  td1DivDivH2.className = 'text-2xl text-black';
  td1DivDivH2.textContent = productName;

  const td1DivDivBtn = document.createElement('button');
  td1DivDivBtn.className = 'text-red-500 productRemoveBtn text-xs bg-transparent';
  td1DivDivBtn.textContent = 'Remove';

  // Append the child elements to the <td> and <tr>
  td1DivDiv.appendChild(td1DivDivH2);
  td1DivDiv.appendChild(td1DivDivBtn);
  td1Div.appendChild(td1DivImg);
  td1Div.appendChild(td1DivDiv);
  td1.appendChild(td1Div);
  tr.appendChild(td1);

  // Create the second <td> element containing the product price
  const td2 = document.createElement('td');
  const td2Div = document.createElement('div');
  td2Div.className = 'flex justify-center items-center';

  const td2DivSpan = document.createElement('span');
  td2DivSpan.textContent = '$';

  const td2DivH2 = document.createElement('h2');
  td2DivH2.textContent = productPrice;

  // Append the child elements to the <td> and <tr>
  td2Div.appendChild(td2DivSpan);
  td2Div.appendChild(td2DivH2);
  td2.appendChild(td2Div);
  tr.appendChild(td2);

  // Create the third <td> element for quantity (I assume you have the increment and decrement functions defined elsewhere)
  const td3 = document.createElement('td');
  const td3Div = document.createElement('div');
  td3Div.className = 'flex items-center w-20 py-1 px-1 m-auto gap-2';

  const td3DivSpan1 = document.createElement('span');
  td3DivSpan1.className = 'px-1 rounded-2xl';
  td3DivSpan1.setAttribute('onClick', 'decrement(-1)');

  const td3DivSpan1I = document.createElement('i');
  td3DivSpan1I.className = 'fa-solid text-xs fa-minus';

  const td3DivSpan2 = document.createElement('span');
  td3DivSpan2.setAttribute('class', 'quantity');
  td3DivSpan2.className = 'select-none text-xl';
  td3DivSpan2.textContent = '1';

  const td3DivSpan3 = document.createElement('span');
  td3DivSpan3.className = 'px-1 rounded-2xl';
  td3DivSpan3.setAttribute('onClick', 'increment(+1)');

  const td3DivSpan3I = document.createElement('i');
  td3DivSpan3I.className = 'fa-solid text-xs fa-plus';

  // Append the child elements to the <td> and <tr>
  td3DivSpan1.appendChild(td3DivSpan1I);
  td3DivSpan3.appendChild(td3DivSpan3I);
  td3Div.appendChild(td3DivSpan1);
  td3Div.appendChild(td3DivSpan2);
  td3Div.appendChild(td3DivSpan3);
  td3.appendChild(td3Div);
  tr.appendChild(td3);

  // Create the fourth <td> element containing the product total price
  const td4 = document.createElement('td');
  const td4Div = document.createElement('div');
  td4Div.className = 'flex justify-center items-center font-bold';

  const td4DivSpan = document.createElement('span');
  td4DivSpan.textContent = '$';

  const td4DivH2 = document.createElement('h2');
  td4DivH2.className = 'cart-list-product-price'
  td4DivH2.textContent = productPrice;

  // Append the child elements to the <td> and <tr>
  td4Div.appendChild(td4DivSpan);
  td4Div.appendChild(td4DivH2);
  td4.appendChild(td4Div);
  tr.appendChild(td4);

  // Append the <tr> to the cart items container

  cartItemsContainer.appendChild(tr);
  localStorage.setItem('fullCart', cartItemsContainer.innerHTML)
  arr.push(tr)

  // Remove cart elements 

  totalCartListProductPrice()
  openShoppingCart()

  const cartContainer = document.querySelectorAll('.cart-container')
  cartContainer.forEach((item, index) => {
    item.querySelector('button').addEventListener('click', (e) => {
      priceArr.splice(index, 1)
      arr.splice(index, 1)
      item.remove();

      console.log(priceArr, index)
      totalCartListProductPrice()

      localStorage.setItem('fullCart',)
      console.log(cartContainer)
    })
  })





})



//  Function for total value of cart
















