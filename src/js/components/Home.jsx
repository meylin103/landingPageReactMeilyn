import React from "react";
import Navbar from "./Navbar.jsx"; 
import CardMenu from "./CardMenu.jsx";
import CardHeader from "./CardHeader.jsx";

const Home = () => {
  const tours = [
    { 
      name: "Rafting Adventure", 
      description: "Experience thrilling rapids on Costa Rica’s wild rivers.", 
      image: "https://images.pexels.com/photos/7542627/pexels-photo-7542627.jpeg"
    },
    { 
      name: "Zipline Canopy Tour", 
      description: "Fly above the rainforest and enjoy breathtaking views.", 
      image: "https://images.pexels.com/photos/4938780/pexels-photo-4938780.jpeg"
    },
    { 
      name: "Night Jungle Walk", 
      description: "Discover nocturnal wildlife with expert guides.", 
      image: "https://images.pexels.com/photos/27397921/pexels-photo-27397921.jpeg"
    },
    { 
      name: "Chocolate Experience", 
      description: "Learn cacao traditions and taste authentic chocolate.", 
      image: "https://images.pexels.com/photos/50707/cocoa-man-colombia-peasant-50707.jpeg"
    }
  ];

  return (
    <div>
      <Navbar />
      <CardHeader />
        <div className="row g-4 mt-4">
          {tours.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-3 mb-4" key={index}>
              <CardMenu
                name={item.name}
                description={item.description}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
  );
};   

export default Home;