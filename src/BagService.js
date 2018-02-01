const svc = {}

svc.addItem = addItem;
svc.removeItem = removeItem;
svc.getBag = getBag;
svc.indexForSku = indexForSku;

function getBag() {
  return JSON.parse(localStorage.getItem('currentSessionBag'));
}

function addItem(product, sku, quantity) {
  var bag = JSON.parse(localStorage.getItem('currentSessionBag'));
  var foundInBag = false;
  if (bag && bag.items) {
    bag.items = bag.items.map((item) => {
      if ((item.product.id === product.id) && (item.sku === sku)) {
        item.quantity += quantity;
        console.log('found this in bag already');
        foundInBag = true
      }
      return item
    })
    !foundInBag && bag.items.push({product, sku, quantity})
  } else {
    bag = {items: [{product, sku, quantity}]};
  }
  localStorage.setItem('currentSessionBag', JSON.stringify(bag));
}

function indexForSku(product, sku) {
  return product.skus.data.reduce((total, item, ind) => {
    if (item.id === sku) return ind;
    return total;
  }, null)
}


function removeItem(product, sku, quantity) {
  var bag = JSON.parse(localStorage.getItem('currentSessionBag'));
  
  bag.items = bag.items.map((item) => {
    if ((item.product.id === product.id) && (item.sku === sku)) {
      item.quantity = Math.max(item.quantity - quantity, 0);
    }
    return item
  })

  localStorage.setItem('currentSessionBag', JSON.stringify(bag));
}


export default svc
