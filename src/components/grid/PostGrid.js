import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../features/posts/postsSlice";
import PostGridItem from "./PostGridItem";
import CardLoading from "../../ui/CardLoading";

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
  const classname = "post-container";

  if (isLoading)
    content = <CardLoading times={6} classname={classname} heading={true} />;
  if (!isLoading && isError) {
    content = <div className={classname}>{error}</div>;
  }
  if (!isError && !isLoading && posts?.length === 0) {
    content = <div className={classname}>No Post found!</div>;
  }
  if (!isError && !isLoading && posts?.length > 0) {
    content = (
      <main className={classname} id="lws-postContainer">
        {posts?.map((post) => (
          <PostGridItem key={post.id} post={post} />
        ))}
      </main>
    );
  }

  return <div>{content}</div>;
};

export default PostGrid;
