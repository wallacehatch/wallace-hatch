const svc = {}

svc.addItem = addItem;
svc.removeItem = removeItem;
svc.getBag = getBag;

function getBag() {
  return JSON.parse(localStorage.getItem('currentSessionBag'));
}

function addItem(product, quantity) {
  var bag = JSON.parse(localStorage.getItem('currentSessionBag'));
  var foundInBag = false;
  if (bag && bag.items) {
    bag.items = bag.items.map((item) => {
      if (item.product.id === product.id) {
        item.quantity += quantity;
        foundInBag = true
      }
      return item
    })
    !foundInBag && bag.items.push({product, quantity})
  } else {
    bag = {items: [{product, quantity}]};
  }
  localStorage.setItem('currentSessionBag', JSON.stringify(bag));
}


function removeItem(product, quantity) {
  var bag = JSON.parse(localStorage.getItem('currentSessionBag'));
  bag.items = bag.items.map((item) => {
    if (item.product.id === product.id) {
      item.quantity = Math.max(item.quantity - quantity, 0);
    }
    return item
  })
  localStorage.setItem('currentSessionBag', JSON.stringify(bag));
}


export default svc
