function ProductCard({

item,
addToCart

}){

return(

<div className="card">

<img
src={item.image}
alt=""
/>

<h3>
{item.name}
</h3>

<h4>
₹{item.price}
</h4>

<button
onClick={()=>
addToCart(item)
}
>

Add To Cart

</button>

</div>

);

}

export default ProductCard;