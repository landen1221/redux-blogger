import { useState } from "react";
import { v4 as uuid } from 'uuid'; 

const CommentForm = ({ comments, setComments }) => {
  const INITIAL_STATE = { comment: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // be sure to add id
    console.log("new data submitted");
    setComments([...comments, { id: uuid(), comment: formData.comment }]);
  };

  return (
    <form>
      <input
        name="comment"
        value={formData.comment}
        placeholder="New Comment..."
        onChange={handleChange}
      ></input>
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default CommentForm;
