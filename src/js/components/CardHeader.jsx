import React from "react";

const CardHeader = ({ title, text, image }) => {
  return (
    <div className="card mb-4">
        <img 
          src="https://images.pexels.com/photos/923228/pexels-photo-923228.jpeg"
          className="card-img-top" 
          alt="Welcome"
          style={{ height: "300px", objectFit: "cover" }} 
        />
      <div className="card-body text-center">
        <h2 className="card-title">Welcome to Pura Vida Adventures</h2>
        <p className="card-text">
          Discover the best tours in Costa Rica — rafting, zipline, night walks, and chocolate experiences.
        </p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default CardHeader;
