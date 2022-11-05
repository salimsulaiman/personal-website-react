import parse from "html-react-parser";
import axios from "axios";
import React from "react";
import profile from "../../assets/img/profile-img.png";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import loading from "../../assets/img/loading.gif";

function BlogContent() {
  const [name, setName] = useState("Salim Sulaiman");
  const [img, setImg] = useState(profile);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    axios.get(`https://635b3d50aa7c3f113db88e01.mockapi.io/blogs/${id}`).then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);
  //   console.log(data.title);
  const htmlString = `${data.text}`;
  const reactElement = parse(htmlString);

  return (
    <>
      <Navbar name={name} img={img} />
      <div className="container my-5">
        {isLoading ? (
          <div className="text-center">
            <img src={loading} alt="" />
          </div>
        ) : (
          <div>
            <h3 className="fw-bold">{data.title}</h3>
            <div>{reactElement}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default BlogContent;
