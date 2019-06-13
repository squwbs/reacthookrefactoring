import React, { useContext } from "react";
import { Context } from "../context";
import Post from "./Post"

const Posts = () => {
  const [state] = useContext(Context);
  const { posts } = state;
    var id=0
    return (
        <div className="row">
          {posts.map(post => (
            <Post key={id++} post={post} />
          ))}
        </div>
    );
  
};

export default Posts;