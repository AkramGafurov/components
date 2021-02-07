class LocalStorageUtil{
  constructor () {
    this.keyName = 'products'
  }

  getLocalStorage (){
    const productsLocalStorage = localStorage.getItem(this.keyName);

    if(productsLocalStorage){
      return JSON.parse(productsLocalStorage)
    }
    return []
  }

  setLocalStorage (id){
    let currentLocalStorage = this.getLocalStorage();

    let indexItem = currentLocalStorage.indexOf(id);

    let isAdded =false;

    if(indexItem===-1){
      currentLocalStorage.push(id);
      isAdded = true;
    }else(
      currentLocalStorage.splice(indexItem,1)
    )

    localStorage.setItem(this.keyName, JSON.stringify (currentLocalStorage))

    return {isAdded,currentLocalStorage}
  }

}

const localStorageUtil = new LocalStorageUtil()
