import { combineReducers } from "redux";
import PostsReducer from "./PostsReducer";
import usersReducer from "./UsersReducer";

export default combineReducers({
  posts: PostsReducer,
  users: usersReducer,
});
