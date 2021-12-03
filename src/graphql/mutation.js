import { gql } from '@apollo/client'

export const ADD_POST = gql`
    mutation MyMutation($id_user: Int!, $content: bpchar!) {
        insert_posting_one(object: {post: $content, user_id: $id_user}) {
          id
        }
    }      
`;

export const ADD_COMMENT = gql`
mutation MyMutation($id_user: Int!, $id_post: Int!, $comment: bpchar!) {
  insert_comment_one(object: {id_post: $id_post, id_user: $id_user, comment: $comment}) {
    id
  }
}
`