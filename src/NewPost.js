import { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/NewPost.css";

import SubmitButton from "./Buttons/SubmitButton";
import CancelButton from "./Buttons/CancelButton";

const NewPost = () => {
  const INITIAL_STATE = {
    title: "",
    subtitle: "",
    body: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormData(INITIAL_STATE)
    console.log("Form Submitted");
  };

  return (
    <div className="NewPost">
      <h2>New Post</h2>
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
