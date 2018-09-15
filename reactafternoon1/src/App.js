import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){

    super();

    this.state = {
      cart: [],
      hats: [
        {
          id: 1,
          title: "Fisherman's Hat",
          description:
            "Headgear commonly used by fishermen. Increases fishing skill marginally.",
          price: 12.99,
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/31kPs5rTSFL.jpg"
        },
        {
          id: 2,
          title: "Metal Hat",
          description: "Uncomfortable, but sturdy.",
          price: 8.99,
          imageUrl: "https://www.thegreenhead.com/imgs/xl/metal-top-hat-xl.jpg"
        }
      ],
      beachGear: [
        {
          id: 3,
          title: "Tent",
          description: "Portable shelter.",
          price: 32.99,
          imageUrl: "https://rivercountryproducts.com/wp-content/uploads/2018/03/Trekking-Pole-Tent-front-6.jpg"
        }
      ]
    };
  }

  addToCart(product){
    this.setState({
      cart: [...this.state.cart, product]
    })

  }

  checkout(){
    this.setState({
      cart: []
    })
    alert('Purchase is complete!')
  }

  render() {
    return (
      <div className="App">
      <section className = 'products'>
      <h1>Products</h1>
      <h2>Hats</h2>
      {this.state.hats.map(product => 
        <div key = {product.id} className = 'product'>
        <img src ={product.imageUrl}/>
        <div className = 'product-info'>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <p>{product.price}</p>
        </div>
        <button onClick = {() => this.addToCart(product)}>Add to Cart</button>
        </div>
      )}

        <h2>Beach Gear</h2>
        {this.state.beachGear.map(product => 
          <div key = {product.id} className = 'product'>
          <img src = {product.imageUrl} />
          <div className = 'product-info'>
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick = {() => this.addToCart(product)}>Add to Cart</button>
          </div>
          </div>)}
      </section>
      
      <section className = 'cart'>
        <h1>Cart</h1>
        <h2>Total: ${this.state.cart.reduce((totalPrice, product) => (totalPrice += product.price), 0)}</h2>
        <button onClick = {() => this.checkout()}>Checkout</button>
        {this.state.cart.map(product => 
        <div key = {product.id} className = 'product'>
        <img src ={product.imageUrl} />
        <div className = 'product-info'>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <p>{product.price}</p>
        </div>
        </div>
        )}
      </section>
      </div>
    );
  }
}

export default App;
