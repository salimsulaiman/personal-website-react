import React from "react";
import { useNavigate } from "react-router-dom";

function BlogList(props) {
  const navigate = useNavigate();

  const handleBlog = (id, slug) => {
    navigate(`/blog/${slug}/${id}`);
  };
  return (
    <div>
      <div className="blog-list my-2">
        <div className="blogs pt-3 px-5" onClick={() => handleBlog(props.id, props.slug)}>
          <h5 className="fw-bold">{props.title}</h5>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
