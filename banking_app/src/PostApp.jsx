import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchPost from "./postAction";

// const URL = "https://jsonplaceholder.typicode.com/posts";

// const PostApp = () => {
//     const [posts, setState] = useState([]);

//     useEffect(() => {
//         // Promise
//         fetch(URL)
//             .then((response) => response.json())
//             .then((data) => {
//                 setState(data);
//         });
//     },[]);

//     const finalPost = posts.slice(0, 10);

//     return (
//         <div>
//             <p>Post is Live Now..</p>
//             <hr />
//             {finalPost.map(post => <p key={post.id}>{post.title}</p>)}
//         </div>
//     );
// };

const PostApp = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchPost());
    },[]);

    return (
        <div>
            <p>Post is Live Now..</p>
            <hr />
            {posts.map(post => <p key={post.id}>{post.title}</p>)}
        </div>
    );
};

export default PostApp;