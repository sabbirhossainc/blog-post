import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../features/posts/postsSlice";
import Loading from "../../ui/Loading";
import PostGridItem from "./PostGridItem";

const PostGrid = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );
  const { sortBy, filterStatus, search } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    dispatch(fetchPosts({ sortBy, status: filterStatus, search }));
  }, [dispatch, sortBy, filterStatus, search]);

  // decide what to show
  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <div className="">{error}</div>;
  }
  if (!isError && !isLoading && posts?.length === 0) {
    content = <div>No Post found!</div>;
  }
  if (!isError && !isLoading && posts?.length > 0) {
    content = posts.map((post) => <PostGridItem key={post.id} post={post} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
};

export default PostGrid;
