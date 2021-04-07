import { Link } from "react-router-dom";
import "./CSS/BlogCard.css";

const BlogCard = ({ id, title, subtitle }) => {
  return (
    <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
      <div className="BlogCard">
        <p id="title">{title}</p>
        <p>{subtitle}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
