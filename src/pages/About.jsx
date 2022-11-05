import React from "react";
import profile from "../assets/img/profile-img.png";
import Navbar from "../components/Navbar";
import { useState } from "react";
import AboutComponent from "../components/AboutComponent";

function About() {
  const [name, setName] = useState("Salim Sulaiman");
  const [img, setImg] = useState(profile);
  const [about, setAbout] = useState([
    {
      title: "About Me",
      desc: "Hello, I'm Salim Sulaiman. I'm student in University Dian Nuswantoro Semarang. My major is Informatics Engineering at the Faculty of Computer Science.",
    },
    {
      title: "My Hobies",
      desc: "My Hobbies?. Programming and Playing Game. Talk about programming, i prefer to be front end developer.",
    },
    {
      title: "Why I Like Web Development",
      desc: "I Like Web Development bacause i think become Web Development is so fun.",
    },
    {
      title: "Other",
      desc: "You can follow my social media accounts to see my professional activities every day.",
    },
  ]);
  return (
    <div>
      <Navbar name={name} img={img} />
      <div className="my-5">
        {about.map((item, index) => {
          return (
            <div key={index}>
              <AboutComponent title={item.title} desc={item.desc} color={"#0181b0"} />;
            </div>
          );
        })}
      </div>
      <div className="container">
        <div className="row my-1 justify-content-center">
          <div className="col-lg-3">
            <img src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" alt="" width={"40px"} className="my-1" />
            <span className="mx-2">salimsulaiman</span>
          </div>
          <div className="col-lg-3">
            <img src="https://cdn-icons-png.flaticon.com/512/1400/1400829.png" alt="" width={"40px"} className="my-1" />
            <span className="mx-2">leamxxs</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
