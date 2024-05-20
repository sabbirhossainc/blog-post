const Tags = ({ tags,classname }) => {
  return (
      <div className={classname? classname : "lws-tags"}>
        {tags.map((tag , index) => (
          <span key={index}>
          #{tag} 
            { tags.length - 1 === index ? "" : ","}
          </span>
        ))}
      </div>
  );
};

export default Tags;
