import React from "react";

const App = () => {
  return (
    <div class="container">
      <div class="card">
        <div class="image">
          <img src="https://assets.codepen.io/4164355/shoes.png" />
        </div>
        <div class="data">
          <h2>Nike Shoes</h2>
          <div class="size">
            <h3>Size :</h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div class="color">
            <h3>Color :</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href="#">Buy Now</a>
        </div>
      </div>
    </div>
  );
};

export default App;
