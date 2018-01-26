import axios from 'axios'

const svc = {}
svc.getAllProducts = getAllProducts;
svc.getProduct = getProduct;
svc.getProducts = getProducts;

function getAllProducts() {
  return  Promise.resolve(axios.get(process.env.API_URL + 'get-all-products/'));
}


function getProduct(id) {
  return Promise.resolve(axios.get(process.env.API_URL + 'get-product/' + String(id)))
}


// ex ids = ["prod_CCDIhc5sXnbPmy", "prod_CCDBCRzlKEEp7V"]
function getProducts(ids) {
	return Promise.resolve(axios.post(process.env.API_URL + 'get-products/', {product_ids: ids }))
}


function createOrder(order){

	return

}

function addToOrder(){
	return 
}




export default svc
