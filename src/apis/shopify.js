import gql from 'graphql-tag';
//. Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQzMDA4NjM1NzAzMA==
export const productsQuery = gql
`query products($numProducts: Int!, $numImages: Int!){
  shop {
    products(first: $numProducts) {
      edges {
        node {
          id
          handle
          title
          variants(first: 1){
            edges{
              node{
                price
                sku
                title
                weight
                available
                availableForSale
                compareAtPrice
                weightUnit
              }
            }
          }
          images(first: $numImages){
            edges{
              node{
                altText
                src
              }
            }
          }
        }
      }
      
    }
  }
}`;


export const productQuery = gql
`query product($productId: ID!){
  node(id: $productId){
    ... on Product{
      title
      variants(first: 1){
            edges{
              node{
                price
                sku
                title
                weight
                available
                availableForSale
                compareAtPrice
                weightUnit
              }
            }
          }
      images(first: 10){
            edges{
              node{
                altText
                src
              }
            }
          }
    }
  }
}`;