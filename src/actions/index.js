import _ from "lodash";
import JSONPlaceholder from "../apis/JSONPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const response = await JSONPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};
export const fetchUser = (id) => async (dispatch) => {
  const response = await JSONPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
};

export const fetchPostsandUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((userId) => dispatch(fetchUser(userId)))
    .value();
};

//Memoized version--
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await JSONPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data,
//   });
// });
