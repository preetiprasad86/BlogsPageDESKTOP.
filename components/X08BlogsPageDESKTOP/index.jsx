import React from "react";
import BlogCard from "../BlogCard";
import BlogCard2 from "../BlogCard2";
import Frame1641 from "../Frame1641";
import Button22 from "../Button22";
import HeaderWithBackground22 from "../HeaderWithBackground22";
import Footer32 from "../Footer32";
import "./X08BlogsPageDESKTOP.css";

function X08BlogsPageDESKTOP(props) {
  const {
    title,
    group182,
    text28,
    line4,
    line5,
    line6,
    line7,
    line8,
    blogCardProps,
    blogCard2Props,
    blogCard2Props2,
    frame1641Props,
    frame16412Props,
    button22Props,
    headerWithBackground22Props,
    footer32Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x08-blogs-page-desktop screen">
        <div className="overlap-group">
          <div className="frame-1576">
            <div className="overlap-group1">
              <h1 className="title valign-text-middle typographyheadlineh2-extrabold-40">{title}</h1>
              <img className="group-182" src={group182} />
              <div className="group-129">
                <div className="overlap-group2">
                  <div className="ellipse-101"></div>
                </div>
                <div className="ellipse-100"></div>
                <div className="ellipse-10"></div>
                <div className="ellipse-10"></div>
                <div className="ellipse-10"></div>
              </div>
              <div className="frame-1568">
                <div className="frame-1640">
                  <BlogCard
                    blogThumbnail={blogCardProps.blogThumbnail}
                    address={blogCardProps.address}
                    text1={blogCardProps.text1}
                    text2={blogCardProps.text2}
                    frame1587Props={blogCardProps.frame1587Props}
                  />
                  <BlogCard2
                    blogThumbnail={blogCard2Props.blogThumbnail}
                    address={blogCard2Props.address}
                    text4={blogCard2Props.text4}
                    text5={blogCard2Props.text5}
                    frame1587Props={blogCard2Props.frame1587Props}
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
                <Frame1641
                  blogCard2Props={frame1641Props.blogCard2Props}
                  blogCardProps={frame1641Props.blogCardProps}
                  blogCard2Props2={frame1641Props.blogCard2Props2}
                />
                <Frame1641
                  blogCard2Props={frame16412Props.blogCard2Props}
                  blogCardProps={frame16412Props.blogCardProps}
                  blogCard2Props2={frame16412Props.blogCard2Props2}
                />
                <Button22>{button22Props.children}</Button22>
              </div>
              <p className="text-28 typographybody16-regular">{text28}</p>
              <div className="group-89">
                <img className="line-4" src={line4} />
                <img className="line" src={line5} />
                <div className="biarrow-right-short">
                  <img
                    className="vector"
                    src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-183@2x.svg"
                  />
                </div>
                <img className="line-6" src={line6} />
                <img className="line" src={line7} />
                <img className="line-8" src={line8} />
              </div>
            </div>
          </div>
          <HeaderWithBackground22 {...headerWithBackground22Props} />
        </div>
        <Footer32
          group32Props={footer32Props.group32Props}
          frame5Props={footer32Props.frame5Props}
          frame6Props={footer32Props.frame6Props}
          frame7Props={footer32Props.frame7Props}
        />
      </div>
    </div>
  );
}

export default X08BlogsPageDESKTOP;
