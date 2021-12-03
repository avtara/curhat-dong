import { gql } from "@apollo/client";

const GETDataPost = gql`
subscription MySubscription($keyword: bpchar!) {
  posting(order_by: {updated_at: desc}, where: {post: {_iregex: $keyword}}) {
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
subscription getComment($id_post: Int!) {
  comment(where: {id_post: {_eq: $id_post}}, order_by: {id: desc}) {
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