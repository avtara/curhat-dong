import { useSubscription } from "@apollo/client";
import { GETDataPost } from "../graphql/subs";

export default function useSubscribePost() {
  const { data, error, loading } = useSubscription(GETDataPost);
  return {
    data,
    error,
    loading,
  };
}