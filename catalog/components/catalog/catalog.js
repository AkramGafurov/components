class Products {
  constructor(){
    this.lableAdd = 'Добавить в корзину';
    this.lableRemove = 'Удалить из корзины';
    this.classActive = 'products-item__button_active'
  }

  changeLocalStorage(id, element){
  let {isAdded,currentLocalStorage} = localStorageUtil.setLocalStorage(id);
  if (isAdded){
    element.classList.add(this.classActive);
    element.innerHTML =  this.lableRemove;
  }else{
    element.classList.remove(this.classActive);
    element.innerHTML = this.lableAdd;
  }
  header.render(localStorageUtil.getLocalStorage().length);
  }

  render(){
    
    let buttonText = '';
    let buttonClass = '';
    let catalogItems = '';
    let catalogStore = localStorageUtil.getLocalStorage();

    CATALOG.forEach(({id,img, name, price, button})=>{
      
    if(catalogStore.indexOf(id) === -1){
      buttonClass = ''
      buttonText = this.lableAdd
    }else{
      buttonText =  this.lableRemove;
      buttonClass = this.classActive
    }

    let catalogItem =
     `<li class = products-item>
        <p class = products-item__name>${name}</p>
        <img class = catalog__img src = ${img} alt ='guitar'>
        <p class = products-item__price>Price: ${price.toLocaleString()} rub</p>
        <button onclick = "products.changeLocalStorage('${id}', this)" class = 'products-item__button ${buttonClass}'>${buttonText}</button>
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

