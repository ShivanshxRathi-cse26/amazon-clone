import ProductCard from "./ProductCard";

function ProductGrid({

products,
addToCart

}){

if(products.length===0){

return(
<h2>
No Products Found
</h2>
);

}

return(

<div className="products">

{
products.map((item)=>(

<ProductCard
key={item.id}
item={item}
addToCart={addToCart}
/>

))
}

</div>

);

}

export default ProductGrid;