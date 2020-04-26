import React, { useState, useRef, useContext } from "react";
import { PostContext } from "../App";

const CreatePost = ({ user }) => {
  const { dispatch } = useContext(PostContext);
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const post = { user, content, image, id: Date.now() };
    dispatch({ type: "ADD_POST", payload: { post } });
    // handleAddPost(post);
    // const newPost = [post, ...posts];
    // setPosts(newPost);
    setContent("");
    imageRef.current.value = null;
  }

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add post content"
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
        <input
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
          ref={imageRef}
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
