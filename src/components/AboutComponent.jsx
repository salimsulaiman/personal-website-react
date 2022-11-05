import React from "react";

function AboutComponent(props) {
  // console.log(props);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="mt-2">
            <h4 style={{ color: props.color }}>
              <b>{props.title}</b>
            </h4>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
