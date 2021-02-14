class ShoppingCard {

  closeBlock(){
    shopping.innerHTML = '';
  }

  render (){
   let htmlCatalog = '';
   let htmlTotalPrice = 0;
   let catalogStore = localStorageUtil.getLocalStorage();

   CATALOG.forEach(({id,name,img,price})=>{
     if(catalogStore.indexOf(id)!==-1){
      htmlCatalog += `
      <tr>
          <td><img class = shopping__content_img src = ${img}></td>
          <td class = shopping__content_name>${name}</td>
          <td class = shopping__content_price>${price.toLocaleString()} rub</td>
      </tr>
      `
      htmlTotalPrice+=price
     }
   }) 
   
   let html = `
   <div class = shopping__container>
    <img src = "../../img/guitar.svg" class = "shopping__close" onclick = "shoppingCard.closeBlock();">
      <table class = shopping__content>
        ${htmlCatalog}
        <tr>
        <td></td>
        <td class = shopping__content_name>Total price</td>
        <td class = shopping__content_price>${htmlTotalPrice} rub</td>
        </tr>
      </table>
      </div>

   `;
   console.log(html);
   Shopping.innerHTML = html;
  }

}

const shoppingCard = new ShoppingCard();

