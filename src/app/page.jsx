import React from "react";
import Hero from "./home/components/Hero";
import Logo from "./home/components/Logo";
import Category from "./home/components/Category";
import Jobs from "./home/components/Jobs";
import FeaturedJobs from "./home/components/FeaturedJobs";
import JobList from "./home/components/JobList";

const Home = () => {
  return (
    <div>
      <Hero />
      <Logo />
      <Category />
      <Jobs />
      <FeaturedJobs />
      <JobList />
    </div>
  );
};

export default Home;
