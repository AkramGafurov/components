class Products {

  render(){
  let catalogItems = '';
    CATALOG.forEach(({img, name, price, button})=>
  {  let catalogItem =
     `<li class = products-item>
     <p class = products-item__name>${name}</p>

             <img class = catalog__img src = ${img} alt ='guitar'>
            <p class = products-item__price>Price: ${price.toLocaleString()} rub</p>
            <button class = products-item__button>${button}</button>
      </li>`
      catalogItems += catalogItem;
    }
    ) 
   const catalogList= `<ul class = products-catalog> ${catalogItems}</ul>`
    Catalog.innerHTML = catalogList
  }
}

let products = new Products();
products.render()

