import React from "react";
import SkillsComponent from "../components/SkillsComponent";
import { useState } from "react";
import profile from "../assets/img/profile-img.png";
import Navbar from "../components/Navbar";

export default function Skills() {
  const [name, setName] = useState("Salim Sulaiman");
  const [img, setImg] = useState(profile);
  const [data, setData] = useState([
    {
      img: "https://cdn-icons-png.flaticon.com/512/2306/2306154.png",
      title: "PHP",
      desc: "Can using php language to build dynamic website",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      title: "Figma",
      desc: "Make Web and Mobile Design",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
      title: "Photoshop",
      desc: "Editing photo and colorizing picture",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
      title: "Premiere Pro",
      desc: "Editing and create cinematic video",
    },
  ]);
  return (
    <div>
      <Navbar name={name} img={img} />
      <div className="container my-5">
        <h3 className="color-primary fw-bold">Skills</h3>
        <p>Some skills that i have</p>
        <div className="row justify-content-around my-2">
          {data.map((item, index) => {
            // console.log(item);
            return (
              <div className="col-lg-3" key={index}>
                <SkillsComponent img={item.img} title={item.title} desc={item.desc} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
