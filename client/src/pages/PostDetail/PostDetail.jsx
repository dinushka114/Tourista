import React, { useState,useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import ReactHtmlParser from "react-html-parser";
import { useReactToPrint } from "react-to-print";

const PostDetail = () => {
  const [post, setPosts] = useState({
    id: JSON.parse(localStorage.getItem("currentPostDetails")).id,
    title: JSON.parse(localStorage.getItem("currentPostDetails")).title,
    subtitle: JSON.parse(localStorage.getItem("currentPostDetails")).subtitle,
    image: JSON.parse(localStorage.getItem("currentPostDetails")).image,
    content: JSON.parse(localStorage.getItem("currentPostDetails")).content,
  });

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  return (
    <div ref={componentRef}>
      <Navbar />
      <Hero cName="hero-mid" heroImg={post.image} title={post.title} />

      <div className="container">
        <b>{post.subtitle}</b>
        <br />
        <br />

        {ReactHtmlParser(post.content)}

        <button onClick={handlePrint}>Download pdf</button>
      </div>

      <Footer />
    </div>
  );
};

export default PostDetail;
