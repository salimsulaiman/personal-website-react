import React from "react";
import { useNavigate } from "react-router-dom";

function ProfileCard(props) {
  const navigation = useNavigate();

  const handleAbout = () => {
    navigation("/about");
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="text-center my-5">
              <img src={props.img} alt="" width={"200px"} className="rounded-circle" />
            </div>
          </div>
          <div className="col-lg-6 text-center my-auto">
            <h3 className="fw-bold">Hello, I'm Salim. I'm Interested in Web Development and also Android Development.</h3>
            <button className="btn btn-outline-primary mt-2" id="button-profile" onClick={() => handleAbout()}>
              Show more about me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
