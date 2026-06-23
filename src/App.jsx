import "./App.css";
import { useState } from "react";

import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";

import products from "./data";

function App() {

const [cart,setCart]=useState([]);
const [search,setSearch]=useState("");
const [dark,setDark]=useState(false);

const addToCart=(item)=>{
setCart([...cart,item]);
};

const filteredProducts=
products.filter((item)=>
item.name
.toLowerCase()
.includes(
search.toLowerCase()
)
);

return(

<div className={dark?"app dark":"app"}>

<Navbar
search={search}
setSearch={setSearch}
dark={dark}
setDark={setDark}
cartCount={cart.length}
/>

<div className="container">

<div>

<div className="hero">

<div className="overlay">

<h1>Amazon Classic Sale</h1>

<h2>Up To 70% OFF</h2>

<p>
Mobiles • Fashion • Electronics • Home
</p>

<button>
Shop Now
</button>

</div>

</div>

<ProductGrid
products={filteredProducts}
addToCart={addToCart}
/>

</div>

<Cart cart={cart}/>

</div>

</div>

);

}

export default App;