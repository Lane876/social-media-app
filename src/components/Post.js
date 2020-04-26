import React, { useContext } from "react";
import { UserContext } from "../App";
import { PostContext } from "../App";

const Post = ({ image, content, user, id }) => {
  const { dispatch } = useContext(PostContext);
  const currentUser = useContext(UserContext);
  const isCurrentUser = currentUser === user;

  function handleDeletePost() {
    dispatch({ type: "DELETE_POST", payload: { id } });
  }

  return (
    <>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          style={{ height: 100, width: 200, objectFit: "cover" }}
          alt="post cover"
        />
      )}
      <p>{content}</p>
      <div style={{ color: isCurrentUser && "green" }}>{user}</div>
      <div>
        {isCurrentUser && <button onClick={handleDeletePost}>DELETE</button>}
      </div>
    </>
  );
};

export default Post;
