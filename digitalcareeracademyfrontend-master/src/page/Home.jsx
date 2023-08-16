import React from "react";
import Hero from "../components/Hero";
import Careers from "../components/Careers";
import Card from "../components/model/Card";

const Home = () => {
  const handleEnrollClick = () => {
    console.log("Enroll button clicked!");
    // Implement your desired action here
  };

  return (
    <div>
      <Hero />
      <div className="container-margin">
        <Careers />
      </div>
      <div className="card-margin">
        <p className="text-courses">ALL Courses</p>
        <div className="card-container">
          <Card
            imageUrl="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            title="Sample Card"
            description="Line 32:11: The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslin"
            enroll="Enroll"
            enrollLink={handleEnrollClick} // Replace with your desired URL or handleEnrollClick
          />
          <Card
            imageUrl="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            title="Sample Card"
            description="Line 32:11: The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslin"
            enroll="Enroll"
            enrollLink={handleEnrollClick}
          />
          <Card
            imageUrl="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            title="Sample Card"
            description="Line 32:11: The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslin"
            enroll="Enroll"
            enrollLink={handleEnrollClick} // Replace with your desired URL or handleEnrollClick
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
