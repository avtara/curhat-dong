import { gql } from '@apollo/client'

export const LOGIN = gql`
    query Login($usern: bpchar!, $pass: bpchar!) {
        users(where: {username: {_eq: $usern}, password: {_eq: $pass}}) {
            id
            username
            photo
            name
        }
    }
`;