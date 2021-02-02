class Products {

  render(){
  let catalogList = '';
    CATALOG.forEach(({img, name, price, button})=>
  {  let catalogItem =
     `<li> <img src = ${img} alt ='guitar'>
            <p>${name}</p>
            <p>${price}</p>
            <button>${button}</button>
      </li>`
      catalogList += catalogItem;
    }
    ) 
    Catalog.innerHTML = catalogList
  }
}

let products = new Products();
products.render()

