import React, { useContext } from "react";
import PostContext from "../../context/posts/postContext";
import PostItem from "./PostItem";
const PostList = () => {
  const postContext = useContext(PostContext);
  const { posts, loading } = postContext;
  return (
    <div>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
};

export default PostList;
