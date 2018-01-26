import axios from 'axios'

const svc = {}
svc.getAllProducts = getAllProducts;
svc.getProduct = getProduct;
svc.getProducts = getProducts;
svc.submitOrder = submitOrder;

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


function submitOrder(orderForm, bag){
	var form =  {
        account: {
          name: 'Greg Miller',
          email: 'greg711miller@gmail.com',
          password: 'fuckoff123',
          phone: '4403966613',
        },
        shipping: {
          name: 'Greg Miller',
          address: '364 East Northwood avenue',
          streetNumber: 'some street',
          streetName: 'some street name',
          aptSuite: 'some apartment suite',
          company: 'some company',
          city: 'Columbus',
          state: 'Ohio',
          country: 'USA',
          zip: '43201',
        },
        cardInfo: {
         cardNumber: "4242424242424242",
         exp: '02/2020',
         cvc: '123',
       },
      }
	return Promise.resolve(axios.post(process.env.API_URL + 'submit-order/', {account: form.account, shipping: form.shipping, cardInfo: form.cardInfo,  }))
	

}






export default svc
