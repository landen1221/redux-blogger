import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router";
import DeleteButton from "./Buttons/DeleteButton";
import "./CSS/PostView.css";
import NewPost from "./NewPost";
import Comments from "./Comments";

const testBlogs = [
  {
    id: "1",
    title: "Blog post 1",
    subtitle: "Post 1 is excellent",
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    id: "2",
    title: "Blog post 2",
    subtitle: "Post 2 is even better!",
    body: `The Rite of Spring is a ballet and orchestral concert work by the Russian composer Igor Stravinsky. It was written for the 1913 Paris season of Sergei Diaghilev's Ballets Russes company, with choreography by Vaslav Nijinsky and stage designs and costumes (pictured) by Nicholas Roerich. The ballet caused a near-riot in the audience when first performed, on 29 May 1913 at the Théâtre des Champs-Élysées in Paris, but rapidly achieved success, and later became recognised as one of the most influential musical works of the 20th century. The score has many novel features, including experiments in tonality, metre, rhythm, stress and dissonance. The scenario is the celebration of spring by various primitive rituals, at the end of which a sacrificial victim dances herself to death. After its explosive premiere the ballet was not performed until the 1920s, when Léonide Massine's rechoreographed version was the first of many innovative productions directed by the world's leading choreographers. Providing "endless stimulation for performers and listeners" alike, The Rite is among the most recorded works in the classical repertoire.`,
  },
];

const PostView = () => {
  let history = useHistory();
  let { postID } = useParams();
  let currPost = testBlogs.filter((blog) => String(blog.id) === postID);
  let { id, title, subtitle, body } = currPost[0];

  const [blogs, setBlogs] = useState(testBlogs);
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
    console.log(edit);
  };

  const handleDelete = (id) => {
    const deleteBlog = blogs.filter((blog) => blog.id !== id);
    console.log(deleteBlog);
    setBlogs(deleteBlog);
    history.push("/");
  };

  if (edit) {
    return <NewPost currBlog={currPost} />;
  } else {
    return (
      <>
        <div className="PostView">
          <h1>{title}</h1>
          <p id="subtitle">{subtitle}</p>
          <p>{body}</p>
          <DeleteButton handleDelete={handleDelete} id={postID} />
          <button onClick={toggleEdit} id="edit">Edit</button>
          <hr/>
        </div>
        <Comments />
      </>
    );
  }
};

export default PostView;
