import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import ReactHtmlParser from "react-html-parser";

const PostDetail = () => {
  const [post, setPosts] = useState({
    id: JSON.parse(localStorage.getItem("currentPostDetails")).id,
    title: JSON.parse(localStorage.getItem("currentPostDetails")).title,
    subtitle: JSON.parse(localStorage.getItem("currentPostDetails")).subtitle,
    image: JSON.parse(localStorage.getItem("currentPostDetails")).image,
    content: JSON.parse(localStorage.getItem("currentPostDetails")).content,
  });

  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" heroImg={post.image} title={post.title} />

      <div className="container">
        <b>{post.subtitle}</b>
        <br />
        <br />

        {ReactHtmlParser(post.content)}

        <button>Download pdf</button>
      </div>

      <Footer />
    </div>
  );
};

export default PostDetail;
