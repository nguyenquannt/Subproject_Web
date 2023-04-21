const cartItemsList = document.querySelector('#cart-items');
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

cartItems.forEach((item) => {
  const listItem = document.createElement('li');
  listItem.innerText = item;
  cartItemsList.appendChild(listItem);
});
