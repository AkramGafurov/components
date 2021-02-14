class HeaderBlock {

  getProductCard(){
    shoppingCard.render();
  }

  render (counter){
    let html = `<p class = header__counter onclick='header.getProductCard();'>${counter}</p>`
    Header.innerHTML = html;
  }

}

let header = new HeaderBlock();
header.render(localStorageUtil.getLocalStorage().length)