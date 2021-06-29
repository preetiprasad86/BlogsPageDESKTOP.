import React from "react";
import BlogCard2 from "../BlogCard2";
import BlogCard from "../BlogCard";
import "./Frame1641.css";

function Frame1641(props) {
  const { blogCard2Props, blogCardProps, blogCard2Props2 } = props;

  return (
    <div className="frame-164">
      <BlogCard2
        blogThumbnail={blogCard2Props.blogThumbnail}
        address={blogCard2Props.address}
        text4={blogCard2Props.text4}
        text5={blogCard2Props.text5}
        className={blogCard2Props.className}
        frame1587Props={blogCard2Props.frame1587Props}
      />
      <BlogCard
        blogThumbnail={blogCardProps.blogThumbnail}
        address={blogCardProps.address}
        text1={blogCardProps.text1}
        text2={blogCardProps.text2}
        className={blogCardProps.className}
        frame1587Props={blogCardProps.frame1587Props}
      />
      <BlogCard
        blogThumbnail={blogCard2Props2.blogThumbnail}
        address={blogCard2Props2.address}
        text1={blogCard2Props2.text1}
        text2={blogCard2Props2.text2}
        className={blogCard2Props2.className}
        frame1587Props={blogCard2Props2.frame1587Props}
      />
    </div>
  );
}

export default Frame1641;
