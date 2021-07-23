import JSONPlaceholder from "../apis/JSONPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const response = await JSONPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};
export const fetchUser = (id) => async (dispatch) => {
  const response = await JSONPlaceholder.get(`/posts/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
};
