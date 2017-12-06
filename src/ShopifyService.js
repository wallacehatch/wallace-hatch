import Client from 'shopify-buy';

const client = Client.buildClient({
    storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
    domain: process.env.SHOPIFY_DOMAIN,
});

var svc = {};
svc.client = client;
svc.products = fetchAllProducts;
svc.product = fetchProduct;
svc.collections = fetchAllCollections;
svc.collection = fetchCollection;
svc.checkoutCart = fetchCheckoutCart;
svc.addToCheckout = addToCheckout;

function fetchAllProducts(success, fail) {
    svc.client.product.fetchAll().then((products) => {
        success && success(products)
    }, (error) => {
        console.log("Error fetching all products " + error)
        fail && fail(err);
    });
}

function fetchProduct(productId, success, fail) {
    svc.client.product.fetch(productId).then((product) => {
        success && success(product)
    }, (error) => {
        console.log("Error fetching product " + error)
        fail && fail(err);
    });
}


function fetchAllCollections(success, fail) {
    svc.client.collection.fetchAllWithProducts().then((collections) => {
        success && success(collections)
    }, (error) => {
        console.log("Error fetching all collections collection " + error)
        fail && fail(err);
    });
}


function fetchCollection(collectionId, success, fail) {
    svc.client.collection.fetchWithProducts(collectionId).then((collection) => {
        success && success(collection)
    }, (error) => {
        console.log("Error fetching collection " + error)
        fail && fail(err);
    });
}

function checkoutCartId(){
	return localStorage.getItem('checkoutCartId');
}

function setCheckoutCartId(checkoutCartId){
	return localStorage.setItem('checkoutCartId', checkoutCartId);
}

function fetchCheckoutCart(success, fail) {
	var checkoutCartId = checkoutCartId();

    if (!checkoutCartId) {
        svc.client.checkout.create().then((checkout) => {
        	setCheckoutCartId(checkout.id)
            success && success(checkout)
        });
    } else {
        svc.client.checkout.fetch(checkoutCartId).then((checkout) => {
            setCheckoutCartId(checkout.id)
            success && success(checkout)
        });
    }
}

function addToCheckout(productVariantId, quantity, checkoutCartId, success, fail) {

    const lineItemsToAdd = [{
        variantId: productVariantId,
        quantity: quantity
    }];
    svc.client.checkout.addLineItems(checkoutCartId, lineItemsToAdd).then((checkout) => {
        success && success(checkout)
    }, (error) => {
        console.log("Error adding line items " + error)
        fail && fail(err);
    });
}




export default svc