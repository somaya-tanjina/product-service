import React from 'react';

const Product = ({ product }) => {
  const { name, picture, price, description } = product;
  return (
      <div class="card card-compact  bg-base-100 shadow-xl">
          <figure>
              <img src={picture} alt="Shoes" />
          </figure>
          <div class="card-body">
              <h2 class="card-title">{name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
              </div>
          </div>
      </div>
  );
};

export default Product;