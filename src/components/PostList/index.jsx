import React from "react";
import PropTypes from "prop-types";

PostList.propTypes = {
  postList: PropTypes.array,
};

PostList.defaultProps = {
  postList: [],
};

function PostList(props) {
  let { postList } = props;
  return (
    <ul>
      {postList.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default PostList;
