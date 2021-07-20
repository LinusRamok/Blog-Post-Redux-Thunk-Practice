import React from "react";
import { fetchPost } from "../actions";
import { connect } from "react-redux";
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPost();
  }
  render() {
    return <div>PostList</div>;
  }
}

export default connect(null, { fetchPost })(PostList);
