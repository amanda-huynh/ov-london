import React from "react";

function Main() {

  return (
    <div id="photoOverview" tabindex="1">
      <img src={process.env.PUBLIC_URL + '/gems-issues/ZS_Photo1.jpeg'} tabindex="2" alt="ZS_Photo1" width="300px" height="300px" className="photo" />
      <img src={process.env.PUBLIC_URL + '/gems-issues/ZS_Photo2.jpeg'} tabindex="3" alt="ZS_Photo2" width="300px" height="300px" className="photo" />
      <img src={process.env.PUBLIC_URL + '/gems-issues/ZS_Photo3.jpeg'} tabindex="4" alt="ZS_Photo3" width="300px" height="300px" className="photo" />
      <img src={process.env.PUBLIC_URL + '/gems-issues/ZS_Photo4.jpeg'} tabindex="5" alt="ZS_Photo4" width="300px" height="300px" className="photo" />
      <img src={process.env.PUBLIC_URL + '/gems-issues/ZS_Photo5.jpeg'} tabindex="6x" alt="ZS_Photo5" width="300px" height="300px" className="photo" />
    </div>
  );
}

export default Main;
