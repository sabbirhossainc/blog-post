import { Link } from "react-router-dom";
import Tags from "../tags/Tags";

const PostGridItem = ({ post }) => {
  const {id, title, image, tags, likes, isSaved, createdAt } = post|| {};
  const classname = "lws-tags"
  return (
    <div>
      {/* <!-- Single Post --> */}
      <div className="lws-card">
        <Link to={`/posts/${id}`}>
          <img src={image} className="lws-card-image" alt="no_image" />
        </Link>
        <div className="p-4">
          <div className="lws-card-header">
            <p className="lws-publishedDate">{createdAt}</p>
            <p className="lws-likeCount">
              <i className="fa-regular fa-thumbs-up"></i>{likes}
            </p>
          </div>
          <Link to={`/posts/${id}`} className="lws-postTitle">
            {" "}
            {title}{" "}
          </Link>
          {/* <!-- Show tags --> */}
          <Tags tags={tags} classname={classname}/>
          {/* <!-- Show this element if post is saved --> */}
          {isSaved === true ? (
            <div className="flex gap-2 mt-4">
              <span className="lws-badge"> Saved </span>
            </div>
          ) : (
            null
          )}
        </div>
      </div>
    </div>
  );
};

export default PostGridItem;
