import axios from 'axios'

const svc = {}
svc.getAllProducts = getAllProducts;
svc.getProduct = getProduct;
svc.getProducts = getProducts;
svc.submitOrder = submitOrder;
svc.createCustomer = createCustomer;
svc.validateCoupon = validateCoupon;

function getAllProducts() {
  return  Promise.resolve(axios.get(process.env.API_URL + 'get-all-products/'));
}


function getProduct(id) {
  return Promise.resolve(axios.get(process.env.API_URL + 'get-product/' + String(id)))
}


function getProducts(ids) {
	return Promise.resolve(axios.post(process.env.API_URL + 'get-products/', {product_ids: ids }))
}

function validateCoupon(coupon){
	return Promise.resolve(axios.get(process.env.API_URL + 'get-coupon/' + String(coupon)))


}


function createCustomer(form, coupon) {
	// var tmpForm =  {
  //       account: {
  //         name: 'Greg Miller',
  //         email: 'gregtesting@gmail.com',
  //         phone: '4403966613',
  //         acceptTerms: true,
  //       },
  //       shipping: {
  //         name: 'Greg Miller',
  //         address: '364 East Northwood avenue',
  //         streetNumber: 'some street',
  //         streetName: 'some street name',
  //         aptSuite: 'some apartment suite',
  //         company: 'some company',
  //         city: 'Columbus',
  //         state: 'Ohio',
  //         country: 'USA',
  //         zip: '43201',
  //       },
  //       billing: {
  //        cardNumber: "4000000000000127",
  //        exp: '02/19',
  //        cvc: '123',
  //      },
  //
  //     }
      // var tmpCoupon = "TEST_COUPON"
      return Promise.resolve(axios.post(process.env.API_URL + 'create-customer/', {account: form.account, shipping: form.shipping, cardInfo: form.billing,coupon: coupon }))
}


function submitOrder(form, bag, coupon){

	// temporary variables for testing only
	var tmpForm =  {
        account: {
          name: 'Greg Miller',
          email: 'greg711miller@gmail.com',
          phone: '4403966613',
          acceptTerms: true,
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
        billing: {
         cardNumber: "4242424242424242",
         exp: '02/19',
         cvc: '123',
       },
      }
     var tmpBag = {
     	items: [{
     		sku: "WR140S",
     		quantity: 3,
     	},
     	{
     		sku: "BR140P",
     		quantity: 2,
     	}]
	 }
	 var tmpCoupon = "TEST_COUPON"
	return Promise.resolve(axios.post(process.env.API_URL + 'submit-order/', {account: tmpForm.account, shipping: tmpForm.shipping, cardInfo: tmpForm.billing, cart: tmpBag, coupon: tmpCoupon }))

}






export default svc
