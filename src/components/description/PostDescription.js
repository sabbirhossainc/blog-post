import Tags from "../tags/Tags";

const PostDescription = ({post}) => {
  const { title, description, image, tags, likes, isSaved, } = post || {};
  const classname = 'tags';
  return (
    <div>
      <img src={image} alt="githum" className="w-100 rounded-md" id="lws-megaThumb"/>
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
          {/* <!-- tags --> */}
        <Tags tags={tags} classname={classname}/>
        <div className="btn-group">
          {/* <!-- handle like on button click --> */}
          <button className="like-btn" id="lws-singleLinks">
            <i className="fa-regular fa-thumbs-up"></i> 100
          </button>
          {/* <!-- handle save on button click --> */}
          {/* <!-- use ".active" className and "Saved" text  if a post is saved, other wise "Save" --> */}
          <button className="active save-btn" id="lws-singleSavedBtn">
            <i className="fa-regular fa-bookmark"></i> Saved
          </button>
        </div>
        <div className="mt-6">
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostDescription