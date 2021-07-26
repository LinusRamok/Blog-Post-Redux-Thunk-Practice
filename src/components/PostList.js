import React from "react";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";
import UserHeader from "./UserHeader";
class PostList extends React.Component {
  renderedList() {
    return this.props.posts.map((post, index) => {
      if (index <= 2)
        return (
          <div className="item" key={post.id}>
            <i className="large middle aligned icon user" />
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <UserHeader userId={index + 1} />
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
