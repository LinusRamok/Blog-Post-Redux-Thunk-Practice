import React from "react";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";
class PostList extends React.Component {
  renderedList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div className="ui relaxed divided list">{this.renderedList()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPosts })(PostList);
