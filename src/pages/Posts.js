import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PostDescription from "../components/description/PostDescription";
import RelatedPostList from "../components/list/RelatedPostList";
import { fetchPost } from "../features/post/postSlice";
import PostInfoLoading from "../ui/PostInfoLoading";

const Posts = () => {
  const dispatch = useDispatch();
  const { post, isLoading, isError, error } = useSelector(
    (state) => state.post
  );

  const { id, tags } = post || {};

  const { postId } = useParams();

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, [dispatch, postId]);

  // decide what to show
  let content;

  if (isLoading)
    content = (
      <div className="post-page-container">
        <main className="post">
          <PostInfoLoading />
        </main>
      </div>
    );
  if (!isLoading && isError) {
    content = <div className="post-page-container">{error}</div>;
  }
  if (!isError && !isLoading && !post?.id) {
    content = <div className="post-page-container">Post Not found!</div>;
  }
  if (!isError && !isLoading && post?.id) {
    content = (
      <section className="post-page-container">
        <main className="post">
          {/* <!-- detailed post  --> */}
          <PostDescription post={post} isLoading={isLoading} />
        </main>
        {/* <!-- related posts --> */}
        <RelatedPostList currentPostId={id} tags={tags} />
      </section>
    );
  }

  return (
    <div>
      {/* <!-- Go Home / Go Back --> */}
      <div className="container mt-8">
        <Link
          to="/"
          className="inline-block text-gray-600 home-btn"
          id="lws-goHome"
        >
          <i className="mr-2 fa-solid fa-house"></i>Go Home
        </Link>
      </div>
      {content}
    </div>
  );
};

export default Posts;
