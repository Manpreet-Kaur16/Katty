function SearchBar()
{
    return(
       <div>
  <input
    type="search"
    placeholder="Search..."
    className="border border-black mt-2"
  />
  <div className="flex gap-2">
    <input type="checkbox" />
    <p>Only Show products in stock</p>
  </div>
</div>
    )
}

 export default SearchBar;



