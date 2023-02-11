import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, fetchPostList } from "./features/post/postApi";

function App() {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.post.postList);
  const loading = useSelector((state) => state.post.loading);
  const status = useSelector((state) => state.post.status);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    dispatch(fetchPostList());
  }, [dispatch]);

  const onSubmitPost = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, body }));
    // dispatch(fetchPostList());

    setTitle("");
    setBody("");
  };

  return (
    <>
      <h1>STUDY REDUX THUNK JS</h1>
      {(() => {
        if (loading) {
          return <p>Loading...</p>;
        }

        if (status === "rejected") {
          return <p>ERROR</p>;
        }

        return (
          <ul>
            {postList.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        );
      })()}

      <form onSubmit={onSubmitPost}>
        <label>title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>body</label>
        <input value={body} onChange={(e) => setBody(e.target.value)} />

        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
}

export default App;
