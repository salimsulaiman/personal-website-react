import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import profile from "../assets/img/profile-img.png";
import BlogList from "../components/BlogList";
import Navbar from "../components/Navbar";
import BlogContent from "./blog/BlogContent";

function Blog() {
  const [name, setName] = useState("Salim Sulaiman");
  const [img, setImg] = useState(profile);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://635b3d50aa7c3f113db88e01.mockapi.io/blogs").then((res) => {
      setData(res.data);
    });
  }, []);

  //   console.log(data);
  return (
    <div>
      <Navbar name={name} img={img} />
      <div className="container my-5">
        <h3 className="color-primary fw-bold">Blog</h3>
        <p>Besides doing programming activities, I also write blogs.</p>
        {data.map((item, index) => {
          return (
            <div key={item.id}>
              <BlogList title={item.title} desc={item.desc} id={item.id} slug={item.slug} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
