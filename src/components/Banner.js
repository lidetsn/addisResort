import React from "react";
const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;

/*onst Banner = (props) => {
  return (
    <div className="banner">
      <h1>{props.title}</h1>
      <div />
      <p>{props.subtitle}</p>
      {props.children}
    </div>
  );
};

export default Banner;
*/