import Client from 'shopify-buy';

const client = Client.buildClient({
    storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
    domain: process.env.SHOPIFY_DOMAIN,
});

var svc = {};
svc.client = client;
svc.products = fetchAllProducts;
svc.product = fetchProduct;
svc.productByHandle = fetchProductByHandle;
svc.collections = fetchAllCollections;
svc.collection = fetchCollection;
svc.collectionByHandle = fetchCollectionByHandle;
svc.checkoutCart = fetchCheckoutCart;
svc.addToCheckout = addToCheckout;
svc.removeFromCheckout = removeFromCheckout;
svc.updateCheckout = updateCheckout;

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
        fail && fail(error);
    });
}
function fetchProductByHandle(productHandle, success, fail) {
    productHandle = productHandle.replace(/\s+/g, '-').toLowerCase();
    svc.client.product.fetchByHandle(productHandle).then((product) => {
        success && success(product)
    }, (error) => {
        console.log("Error fetching product " + error)
        fail && fail(error);
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

function fetchCollectionByHandle(collectionHandle, success, fail) {
    svc.client.collection.fetchByHandle(collectionHandle).then((collection) => {
        console.log("got collection")
        console.log(collection)
        success && success(collection)
    }, (error) => {
        console.log("Error fetching collection " + error)
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

function getCheckoutCartId(){

	return localStorage.getItem('checkoutCartId');
}

function setCheckoutCartId(checkoutCartId){
	return localStorage.setItem('checkoutCartId', checkoutCartId);
}

function fetchCheckoutCart(success, fail) {
	const checkoutCartId = getCheckoutCartId();
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

function addToCheckout(productVariantId, quantity, success, fail) {

    const lineItemsToAdd = [{
        variantId: productVariantId,
        quantity: quantity
    }];
    const checkoutCartId = getCheckoutCartId();
    svc.client.checkout.addLineItems(checkoutCartId, lineItemsToAdd).then((checkout) => {
        success && success(checkout)
    }, (error) => {
        console.log("Error adding line item to checkout " + error)
        fail && fail(err);
    });
}


function removeFromCheckout(lineItemId, success, fail){
    const checkoutCartId = getCheckoutCartId();
    const lineItemIdsToRemove = [lineItemId];
    svc.client.checkout.removeLineItems(checkoutCartId, lineItemIdsToRemove).then((checkout) => {
    success && success(checkout)
    },(error) => {
        console.log("Error removing line item from checkout " + error)
        fail && fail(err);
    });
}

function updateCheckout(lineItemId,quantity, success, fail){
    const checkoutCartId = getCheckoutCartId();
    const lineItemsToUpdate = [{id: lineItemId, quantity: quantity}];
    svc.client.checkout.updateLineItems(checkoutCartId, lineItemsToUpdate).then((checkout) => {
        success && success(checkout)  
    },(error) => {
        console.log("Error updating line item in checkout " + error)
        fail && fail(err);
    });
}



export default svc
