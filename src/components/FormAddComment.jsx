import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../graphql/mutation";

const FormAddComment = (props) => {
    let input;
    const [addPost, { data, loading, error }] = useMutation(ADD_COMMENT);
    const { id } = props;
    return (
        <>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    addPost({ variables: { comment: input.value, id_user: sessionStorage.getItem('id'), id_post: id } });
                    input.value = '';
                }}
            >
                <div className="flex">
                    <div className="m-2 w-10 py-1">
                        <img className="inline-block h-10 w-10 rounded-full" src={sessionStorage.getItem('photo')} alt="" />
                    </div>
                    <div className="flex-1 px-2 pt-2 mt-2">
                        <textarea ref={node => {
                            input = node;
                        }} className=" bg-transparent text-gray-400 font-medium text-lg w-full" rows={2} cols={50} placeholder="What's happening?" defaultValue={""} />
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10" />
                    <div className="flex-1 mb-3">
                        <button type="submit" className="bg-blue-400 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full mr-8 float-right">
                            Posting
                        </button>
                    </div>
                </div>
                <hr className="border-gray-800 border-4" />
            </form>
        </>
    )
}

export default FormAddComment;