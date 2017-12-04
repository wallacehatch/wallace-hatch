<template>
  <div class="product-page">
    <h3>{{product}}</h3>

    
  </div>
</template>

<script>
import {productQuery} from '@/apis/shopify';
export default {
   name: 'ProductPage',
   data () {
    return {
      productId: this.$route.params.id,
      product: {
        title: null,
        price:  null,
        images: null,
      }
    }
  },
  beforeMount() {
      this.$apollo.query({
        query: productQuery,
        variables: {
          productId: this.productId 
        }
      }).then((result) => {
        console.log("got result " + result.data.node.title)
        this.product.title = result.data.node.title
        this.product.price = result.data.node.variants.edges
      }, (err) => {
        debugger;
      })
    },
   mounted: function () {
    console.log("on product page " + this.productId);

   }

}
</script>

<style lang="scss">
  @import '../../styles/_variables.scss';
  .product-page{
    margin-top: 8rem;
    // height: 100rem;
    text-align: center;
    // background: green;
  }

</style>
