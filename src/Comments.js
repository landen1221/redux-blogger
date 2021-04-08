import { useState } from "react";
import DeleteButton from "./Buttons/DeleteButton";
import "./CSS/Comments.css";

import CommentForm from "./CommentForm";

const postComments = [
  { id: 1, comment: "I like blue" },
  { id: 2, comment: "Blue is also my favorite color" },
];

const Comments = () => {
  
  const [comments, setComments] = useState(postComments);
  

  const handleDelete = (id) => {
    const deletedComment = comments.filter((comment) => comment.id !== id);
    setComments(deletedComment);
  };

  

  return (
    <div className="Comments">
      <CommentForm comments={comments} setComments={setComments} />
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
