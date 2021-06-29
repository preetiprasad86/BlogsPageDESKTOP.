import React from "react";
import Frame1587 from "../Frame1587";
import "./BlogCard.css";

function BlogCard(props) {
  const { blogThumbnail, address, text1, text2, className, frame1587Props } = props;

  return (
    <div className={`blog-card-1 ${className || ""}`}>
      <div className="blog-thumbnail" style={{ backgroundImage: `url(${blogThumbnail})` }}></div>
      <div className="address valign-text-middle overpass-semi-bold-scarpa-flow-16px">{address}</div>
      <div className="text valign-text-middle overpass-bold-shark-24px">{text1}</div>
      <p className="text-1 overpass-semi-bold-scarpa-flow-16px">{text2}</p>
      <Frame1587 text3={frame1587Props.text3} plusProps={frame1587Props.plusProps} />
    </div>
  );
}

export default BlogCard;
