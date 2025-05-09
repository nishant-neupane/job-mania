import React from "react";
import Hero from "./components/Hero";
import Logo from "./components/Logo";
import Category from "./components/Category";

const page = () => {
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

export default page;
