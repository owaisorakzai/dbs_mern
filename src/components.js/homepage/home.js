import React from "react";
import './home.css';
import HomeAbout from "./home-about";
import HomeBlog from "./home-blog";
import HomeReviews from "./home-reviews";
import HomeTicker from "./home-ticker";
import Hero from "./hero";

const Homepage=()=>{
   return(
        <section>
            <Hero />
            <HomeReviews />
            <HomeTicker />
            <HomeAbout />
    </section>
    );
}
export default Homepage;