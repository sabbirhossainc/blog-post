import Tags from "../tags/Tags";
import LikeShare from "./LikeShare";

const PostDescription = ({ post }) => {
  const { id, title, description, image, tags, likes, isSaved, isLoading } =
    post || {};
  const classname = "tags";
  return (
    <div>
      <img
        src={image}
        alt="githum"
        className="w-full h-80 rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        {/* <!-- tags --> */}
        <Tags tags={tags} classname={classname} />
        {/* <!-- Like share  --> */}
        <LikeShare
          likes={likes}
          isSaved={isSaved}
          isLoading={isLoading}
          id={id}
        />
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDescription;
