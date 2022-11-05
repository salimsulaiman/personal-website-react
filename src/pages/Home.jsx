import React from "react";
import profile from "../assets/img/profile-img.png";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import { useState } from "react";

function Home() {
  const [name, setName] = useState("Salim Sulaiman");
  const [img, setImg] = useState(profile);
  return (
    <div>
      <Navbar name={name} img={img} />
      <div className="my-5">
        <ProfileCard img={img} />
      </div>
    </div>
  );
}

export default Home;
