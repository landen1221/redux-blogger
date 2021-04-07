import { useState } from "react";
import DeleteButton from "./Buttons/DeleteButton";
import "./CSS/Comments.css";
import { v4 as uuid } from 'uuid'; 

const postComments = [
  { id: 1, comment: "I like blue" },
  { id: 2, comment: "Blue is also my favorite color" },
];

const Comments = () => {
  const INITIAL_STATE = { comment: "" };
  const [comments, setComments] = useState(postComments);
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleDelete = (id) => {
    const deletedComment = comments.filter((comment) => comment.id !== id);
    setComments(deletedComment);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // be sure to add id
    console.log("new data submitted");
    setComments([...comments, {id: uuid(), comment: formData.comment}])
  };

  return (
    <div className="Comments">
      <form>
        <input
          name="comment"
          value={formData.comment}
          placeholder="New Comment..."
          onChange={handleChange}
        ></input>
        <button onClick={handleSubmit}>Add</button>
      </form>
      {comments.map((comment) => {
        return (
          <p>
            <DeleteButton handleDelete={handleDelete} id={comment.id} />
            {comment.comment}
          </p>
        );
      })}
    </div>
  );
};

export default Comments;
