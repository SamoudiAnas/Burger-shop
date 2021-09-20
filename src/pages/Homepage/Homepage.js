import React from "react";
import Burgers from "./Burgers";
import Header from "./Header";
import InstagramPhotos from "./InstagramPhotos";
import Newsletter from "./Newsletter";
import Testimonials from "./Testimonials";
import Welcome from "./Welcome";

function Homepage() {
  return (
    <>
      <Header />
      <Welcome />
      <Burgers />
      <Testimonials />
      <InstagramPhotos />
      <Newsletter />
    </>
  );
}

export default Homepage;
