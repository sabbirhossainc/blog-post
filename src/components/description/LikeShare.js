import { useDispatch } from "react-redux";
import { updatePost } from "../../features/post/postSlice";

const LikeShare = ({ id, likes, isSaved, isLoading }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(updatePost({ id, mutationData: { likes: likes + 1 } }));
  };
  const handleSave = () => {
    dispatch(updatePost({ id, mutationData: { isSaved: !isSaved } }));
  };

  return (
    <div className="btn-group">
      {/* <!-- handle like on button click --> */}
      <button
        className="like-btn"
        id="lws-singleLinks"
        onClick={handleLike}
        disabled={isLoading}
      >
        <i className="fa-regular fa-thumbs-up"></i> {likes}
      </button>
      {/* <!-- handle save on button click --> */}
      <button
        className={isSaved === true ? `active save-btn` : `save-btn`}
        id="lws-singleSavedBtn"
        onClick={handleSave}
        disabled={isLoading}
      >
        <i className="fa-regular fa-bookmark"></i>{" "}
        {isSaved === true ? "Saved" : "Save"}
      </button>
    </div>
  );
};

export default LikeShare;
