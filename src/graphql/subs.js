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

export { GETDataPost };