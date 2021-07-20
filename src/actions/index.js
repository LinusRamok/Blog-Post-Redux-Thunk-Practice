import { placeholder } from "@babel/types";
import axios from "axios";
import JSONPlaceholder from "../apis/JSONPlaceholder";

export const fetchPost = () => async (dispatch) => {
  const response = await JSONPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response,
  });
};
