function Navbar({

search,
setSearch,
dark,
setDark,
cartCount

}){

return(

<header className="navbar">

<h1>Amazon</h1>

<input
value={search}
placeholder="Search products..."
onChange={(e)=>
setSearch(e.target.value)
}
/>

<button
onClick={()=>
setDark(!dark)
}
>
{dark?"☀":"🌙"}
</button>

<div>
🛒 {cartCount}
</div>

</header>

);

}

export default Navbar;