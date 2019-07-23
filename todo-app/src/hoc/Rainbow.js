import React from "react";

const Rainbow = (Component) => {
  const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  const randomColor = colors[Math.floor(Math.random() * 5)];
  const className = `${randomColor}-text`;
  
  return (props) => {
    return (
      <div className={className}>
        <Component {...props}/>
      </div>
    )
  };
};
export default Rainbow;
