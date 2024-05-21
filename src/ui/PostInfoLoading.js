
const PostInfoLoading = () => {
  return (
    <div>
      <img
            className={`skeleton skeleton-text postinfo-skeleton-image`}
            alt=""
          />
      {/* body */}
      <div className="">
      <div className="headertitle">
              <h3 className="">
                <div className="skeleton skeleton-text skeleton-text__body"></div>
              </h3>
            </div>
              <div className="skeleton_container">
                <span className="skeleton skeleton-text skeleton-feature"></span>
              </div>
                <div className="skeleton skeleton-text skeleton-feature"></div>
            <div className="mt-4">
              <h3 className="">
                <div className="skeleton skeleton-text skeleton-text__body"></div>
              </h3>
            </div>
            <div className="cardfooter">
              <div className="skeleton skeleton-text skeleton-footer"></div>
            </div>
            <div class="flex gap-2 mt-4">
              <div className="skeleton skeleton-text skeleton-feature"></div>
            </div>
          </div>
          <span className="sr-only">Loading...</span>
    </div>
  )
}

export default PostInfoLoading