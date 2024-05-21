const CardLoading = ({ times, classname, heading }) => {
  return (
    <div className={classname}>
      {/* <!-- Loading Card  --> */}
      <div className="skeleton-card disabled" >
        <div className=" font-semibold text-xl mt-2 ml-2">
          Free server!!! 🥲
          <hr />
          Please wait... less than 60s for start server or reload untill it start.
          Thank you!
          <hr />
        </div>
      </div>
      {Array.from({ length: times }).map((_, index) => (
        <div class="skeleton-card" key={index}>
          <img
            className={`skeleton skeleton-text ${
              heading === true ? "imgheight" : "skeleton-image"
            }`}
            alt=""
          />
          {/* body */}
          <div className="p-4">
            {heading === true ? (
              <div className="skeleton_container">
                <span className="skeleton skeleton-text skeleton-feature"></span>
                <div className="skeleton skeleton-text skeleton-feature"></div>
              </div>
            ) : null}
            <div className={heading === true ? "mt-4" : ""}>
              <h3 className="headertitle">
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
      ))}
    </div>
  );
};

export default CardLoading;
