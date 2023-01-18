import { gql } from "@apollo/client"

export const LOGIN_USER = gql`
mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
       jwt
       user {
         username
       }
    }
  }
`

export const SIGN_UPUSER = gql`
mutation Register($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        username
        email
      }
    }
  }
`