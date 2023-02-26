const URL = "https://jsonplaceholder.typicode.com/posts";

// const fetchPost = async () => {
//   const response = await fetch(URL);
//   const data = await response.json();
//   return {
//     type: "FETCH_POST",
//     payload: data,
//   };
// };

//// now using Redux thunk  :  -

const fetchPost = () => {
  return async (dispatch, getState) => {
    const response = await fetch(URL);
    const data = await response.json();
    dispatch({
      type: "FETCH_POST",
      payload: data,
    });
  };
};

export default fetchPost;
