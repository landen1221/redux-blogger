import { useState } from "react";
import BlogCard from "./BlogCard";
import "./CSS/Home.css"

const testBlogs = [
  {
    id: 1,
    title: "Blog post 1",
    subtitle: "Post 1 is excellent",
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    id: 2,
    title: "Blog post 2",
    subtitle: "Post 2 is even better!",
    body: `The Rite of Spring is a ballet and orchestral concert work by the Russian composer Igor Stravinsky. It was written for the 1913 Paris season of Sergei Diaghilev's Ballets Russes company, with choreography by Vaslav Nijinsky and stage designs and costumes (pictured) by Nicholas Roerich. The ballet caused a near-riot in the audience when first performed, on 29 May 1913 at the Théâtre des Champs-Élysées in Paris, but rapidly achieved success, and later became recognised as one of the most influential musical works of the 20th century. The score has many novel features, including experiments in tonality, metre, rhythm, stress and dissonance. The scenario is the celebration of spring by various primitive rituals, at the end of which a sacrificial victim dances herself to death. After its explosive premiere the ballet was not performed until the 1920s, when Léonide Massine's rechoreographed version was the first of many innovative productions directed by the world's leading choreographers. Providing "endless stimulation for performers and listeners" alike, The Rite is among the most recorded works in the classical repertoire.`,
  },
];

const Home = () => {
  const [blogs, setBlogs] = useState(testBlogs);

  return (
    <div className="Home">
      <p id="welcome">
        Welcome to <b>Microblog,</b> our innovative site for communicating on
        the information superhighway.
      </p>

      {blogs.map((blog) => {
        return <BlogCard key={blog.id} title={blog.title} subtitle={blog.subtitle} id={blog.id}/>;
      })}
    </div>
  );
};

export default Home;
