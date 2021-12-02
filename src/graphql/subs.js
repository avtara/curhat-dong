import { gql } from "@apollo/client";

const GETDataPost = gql`
subscription MySubscription {
  posting(order_by: {updated_at: desc}) {
    user {
      username
      photo
      name
    }
    post
    id
    updated_at
  }
}
`;

const GETComment = gql`
subscription getComment {
  comment(where: {id_post: {_eq: 1}}, order_by: {id: desc}) {
    user {
      name
      username
      id
      photo
    }
    comment
    created_at
  }
}
`;




export { GETDataPost, GETComment };