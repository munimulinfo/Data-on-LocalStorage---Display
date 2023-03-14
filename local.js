const addProduct = () => {
  const productField = document.getElementById('product-name');
  const productQuantity = document.getElementById('product-quantity');
  const product = productField.value;
  const quantity = productQuantity.value;
  productField.value = '';
  productQuantity.value = '';
  displayProduct(product, quantity);
  saveProductToLocalStorage(product, quantity);
}
const displayProduct = (product, quantity) => {
  const ul = document.getElementById('product-Container');
  const li = document.createElement('li');
  li.innerText = `${product}: ${quantity}`;
  ul.appendChild(li);
}
const getStoreShopingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
}
const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoreShopingCart();
  cart[product] = quantity;
  // console.log(cart);
  const cartStringify = JSON.stringify(cart);
  // console.log(cartStringify);
  localStorage.setItem('cart', cartStringify);
}
const displayProductsFromLocalStorage = () => {
  const savedCart = getStoreShopingCart();
  // console.log(savedCart);
  for (const product in savedCart) {
    const quantity = savedCart[product];
    // console.log(quantity)
    // console.log(product, quantity);
    displayProduct(product, quantity);
  }
}
displayProductsFromLocalStorage();
const deletData = () => {
  // localStorage.clear();
  document.getElementById('product-Container').style.display = 'none';
  // console.log('button');
}