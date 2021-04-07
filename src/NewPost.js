import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/NewPost.css";

import SubmitButton from "./Buttons/SubmitButton";
import CancelButton from "./Buttons/CancelButton";

const NewPost = ({ currBlog }) => {
  let history = useHistory();
  const INITIAL_STATE = {
    title: "",
    subtitle: "",
    body: "",
  };

  const [formData, setFormData] = useState(
    currBlog ? currBlog[0] : INITIAL_STATE
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  //   FIXME: handle state change
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    history.push("/");
  };

  return (
    <div className="NewPost">
      {currBlog ? <h2>Edit Post</h2> : <h2>New Post</h2>}
      <form>
        <label htmlFor="title">Title:</label>
        <input
          name="title"
          placeholder="Blog Title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="subtitle">Subtitle:</label>
        <input
          name="subtitle"
          placeholder="Subtitle / Brief Description"
          value={formData.subtitle}
          onChange={handleChange}
        />
        <label htmlFor="body">Body:</label>
        <textarea
          name="body"
          placeholder="Blog Title"
          value={formData.body}
          onChange={handleChange}
          rows="25"
        ></textarea>
        <div className="submitButton">
          <SubmitButton handleSubmit={handleSubmit} />
          <Link to="/">
            <CancelButton />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
