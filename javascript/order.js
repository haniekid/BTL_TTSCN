import { product_data } from '../assets/data/product_data.js';

// const jsx = (
//   <div>
//     {product_data.data.product_hots.map((product) => {
//   <div class="product">
//     <img src={product.image} alt="" class="product-thumb" />
//     <div class="product-desc">
//       <h3 class="product-name">{product.title}</h3>
//       <span class="price-discount">{product.discount}</span>
//       <span class="price">{product.price}</span>
//     </div>
//   </div>;
//     })}
//   </div>
// );
// ReactDOM.render(jsx, document.getElementById('root'));
const order_container1 = document.querySelector(
  '.order-catogory1 .order-container'
);
product_data.data.product_hots.map((product) => {
  var product_container = document.createElement('div');
  product_container.className = 'product';
  var img = document.createElement('img');
  img.setAttribute('src', product.image);
  img.className = 'product-thumb';
  product_container.appendChild(img);
  var product_desc = document.createElement('div');
  product_desc.className = 'product-desc';
  var product_title = document.createElement('h3');
  product_title.className = 'product-name';
  product_title.innerText = product.title;
  var price_discount = document.createElement('span');
  price_discount.className = 'price-discount';
  price_discount.innerHTML = product.discount;
  var price = document.createElement('span');
  price.className = 'price';
  price.innerHTML = product.price;
  product_desc.appendChild(product_title);
  product_desc.appendChild(price_discount);
  product_desc.appendChild(price);

  product_container.appendChild(product_desc);
  order_container1.append(product_container);
});
