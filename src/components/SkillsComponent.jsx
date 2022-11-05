import React from "react";

function SkillsComponent(props) {
  // console.log(props);
  return (
    <div>
      <div className="skill mx-1">
        <img src={props.img} alt="" width={"70px"} />
        <h4 className="text-center fw-bold my-3">{props.title}</h4>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default SkillsComponent;
