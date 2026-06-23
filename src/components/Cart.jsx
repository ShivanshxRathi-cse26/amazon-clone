function Cart({

cart

}){

return(

<div className="cart">

<h2>
Your Cart
</h2>

{
cart.length===0

?

<p>
No Products
</p>

:

cart.map((item,index)=>(

<div
className="cartItem"
key={index}
>

<img
src={item.image}
alt=""
/>

<div>

<p>
{item.name}
</p>

<h4>
₹{item.price}
</h4>

</div>

</div>

))

}

</div>

);

}

export default Cart;