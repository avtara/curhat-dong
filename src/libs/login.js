
import {useLazyQuery} from "@apollo/client";
import { LOGIN } from "../graphql/query";

export default function LoginQuery(username, password) {
    const [searchUser, { loading, error, data: dataUser }] = useLazyQuery(LOGIN);

    console.log(searchUser({
        variables: {
            usern:username,
            pass:password
        }
    }));
}