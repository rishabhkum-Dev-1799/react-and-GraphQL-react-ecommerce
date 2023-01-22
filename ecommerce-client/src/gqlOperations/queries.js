import { gql } from "@apollo/client";

export const GET_ALLPRODUCTS = gql`
query getAllProducts{
    products{
      data{
        id
        attributes{
          Name
          description
          price
          image{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`
export const GET_PRODUCTBYID = gql`
query getProductById($productId:ID){
    product(id:$productId){
      data{
        id
        attributes{
          Name
          description
          price
          image{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`
export const GET_ALLCATEGORIES = gql`
query Categories {
  categories {
    data {
      id
       attributes {
         name
       }
      } 
    }
  }
`

export const GET_PRODUCT_BYCATEGORY = gql`
query Category($categoryId: ID) {
  category(id: $categoryId) {
    data {
      attributes {
        name
        products {
        data {
          id
          attributes {
            Name
            price
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }  
        }
      }
    }
  }
}
`
export const SEARCH_PRODUCTS = gql`
query SearchProductsQuery($filters:ProductFiltersInput){
  products(filters:$filters){
    data{
      id
    attributes{
      Name
    }
  }
  }
}
`