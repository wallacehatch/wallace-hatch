import axios from 'axios'

const svc = {}
svc.getAllProducts = getAllProducts;
svc.getProduct = getProduct;

function getAllProducts() {
  return  Promise.resolve(axios.get(process.env.API_URL + 'get-all-products/'));
}
function getProduct(id) {
  return Promise.resolve(axios.get(process.env.API_URL + 'get-product/' + String(id)))
}




export default svc
