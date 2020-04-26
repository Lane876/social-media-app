import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import postReducer from "./reducer";

export const UserContext = createContext();
export const PostContext = createContext({
  posts: [],
});

function App() {
  const [user, setUser] = useState("Milan");
  const initialPostState = useContext(PostContext);
  const [state, dispatch] = useReducer(postReducer, initialPostState);
  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = user ? `${user}'s feed` : "Please login";
  }, [user]);

  if (!user) {
    return (
      <div>
        <Login setUser={setUser} />
      </div>
    );
  }

  // function handleAddPost(post) {
  //   setPosts([post, ...posts]);
  // }

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={user}>
        <Header user={user} setUser={setUser} />
        <CreatePost
          user={user}
          //  handleAddPost={handleAddPost}
        />
        <PostList posts={state.posts} />
      </UserContext.Provider>
    </PostContext.Provider>
  );
}

export default App;
