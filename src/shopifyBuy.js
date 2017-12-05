
import ShopifyBuy from 'shopify-buy'



// EXAMPLE OF UISNG SHOPIFY SDK
var shopClient = ShopifyBuy.buildClient({
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  domain: process.env.SHOPIFY_DOMAIN,
  appId: process.env.SHOPIFY_APP_ID,
});

// Fetch all products in your shop
client.product.fetchAll().then((products) => {
  // Do something with the products
  console.log(products);
});

import Client, {Config} from 'shopify-buy';


const config = new Config({
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  domain: process.env.SHOPIFY_DOMAIN,
});

export default new Client(config);

