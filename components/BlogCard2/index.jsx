import React from "react";
import Frame1587 from "../Frame1587";
import "./BlogCard2.css";

function BlogCard2(props) {
  const { blogThumbnail, address, text4, text5, className, frame1587Props } = props;

  return (
    <div className={`blog-card-3 ${className || ""}`}>
      <img className="blog-thumbnail-1" src={blogThumbnail} />
      <div className="address-1 valign-text-middle overpass-semi-bold-scarpa-flow-16px">{address}</div>
      <div className="text-3 valign-text-middle overpass-bold-shark-24px">{text4}</div>
      <p className="text-4 overpass-semi-bold-scarpa-flow-16px">{text5}</p>
      <Frame1587 text3={frame1587Props.text3} plusProps={frame1587Props.plusProps} />
    </div>
  );
}

export default BlogCard2;
