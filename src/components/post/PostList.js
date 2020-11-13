import React, { useContext } from "react";
import PostContext from "../../context/posts/postContext";
import PostItem from "./PostItem";
const PostList = () => {
  const postContext = useContext(PostContext);
  const { posts, loading } = postContext;
  return (
    <div className='container p-10'>
      <hr></hr>
      <h1 className='pt-6 font-mono blue-grey-text text-lighten-2'>
        Latest Posts
      </h1>
      <br></br>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
};

export default PostList;
