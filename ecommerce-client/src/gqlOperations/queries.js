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