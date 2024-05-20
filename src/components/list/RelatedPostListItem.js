import { Link } from "react-router-dom";
import Tags from "../tags/Tags";

const RelatedPostListItem = ({ post }) => {
  const { id, title, image, tags, createdAt } = post || {};
  const classname = "mb-0 tags";
  return (
    <div className="card">
      <Link to={`/posts/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link
          to={`/posts/${id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </Link>
        {/* <!-- related Tags  --> */}
        <Tags tags={tags} classname={classname} />
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default RelatedPostListItem;
