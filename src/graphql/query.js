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

export const DETAIL_POST = gql`
    query DetailPost($id_post: Int!) {
        posting(where: {id: {_eq: $id_post}}) {
            created_at
            post
            id
            updated_at
            user {
                username
                photo
                name
            }
        }
    }
`;


