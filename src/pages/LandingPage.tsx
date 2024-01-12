import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export function LandingPage() {
  const [imageIndex, setImageIndex] = useState(1);

  const handleClickLeftArrow = () => {
    setImageIndex((prevIndex) => (prevIndex === 1 ? 5 : prevIndex - 1));
  };

  const handleClickRightArrow = () => {
    setImageIndex((prevIndex) => (prevIndex === 5 ? 1 : prevIndex + 1));
  };


  return (
    <div
      key="1"
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(/images/assets/landing-background-${imageIndex}.jpg)`,
        backgroundSize : 'cover'
      }}
    >
      <div
        className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center"
      >
        <h1 className="mb-4 text-5xl font-bold text-cyan-500">SHOW WHAT YOU SEE<br/>NOT WHAT YOU THINK</h1>
        <p className="mb-8 text-xl text-cyan-500">정기동</p>
        <Link to="/main">
          <Button variant="contained">GO</Button>
        </Link>
      </div>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4"
        onClick={handleClickLeftArrow}
      >
          <XIcon_left className="h-6 w-6 text-white" />
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4"
        onClick={handleClickRightArrow}
      >
          <XIcon_right className="h-6 w-6 text-white" />
      </div>
    </div>
  )
}


function XIcon_left(props:any) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <text x="10" y="40" fontFamily="Arial" fontSize="40" fill="white">&#60;</text>
</svg>
  )
}

function XIcon_right(props:any) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <text x="10" y="40" fontFamily="Arial" fontSize="40" fill="white">&#62;</text>
</svg>
  )
}
