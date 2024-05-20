import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedPosts } from "../../features/relatedPosts/relatedPostSlice";
import Loading from "../../ui/Loading";
import RelatedPostListItem from "./RelatedPostListItem";

const RelatedPostList = ({ currentPostId, tags }) => {
  const dispatch = useDispatch();
  const { relatedPosts, isLoading, isError, error } = useSelector(
    (state) => state.relatedPosts
  );

  useEffect(() => {
    dispatch(fetchRelatedPosts({ id: currentPostId, tags }));
  }, [dispatch, currentPostId, tags]);

  // decide what to show
  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <div className="">{error}</div>;
  }
  if (!isError && !isLoading && relatedPosts?.length === 0) {
    content = <div>No related post found!</div>;
  }
  if (!isError && !isLoading && relatedPosts?.length > 0) {
    content = relatedPosts.map((post, index) => (
      <RelatedPostListItem key={index} post={post} />
    ));
  }

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">{content}</div>
    </aside>
  );
};

export default RelatedPostList;
