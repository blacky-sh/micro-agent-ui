import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Hello there👋🏼</h1>
            <p className="py-6">
              Ready to supercharge your code with Micro Agent’s TDD magic?{" "}
              <br />
              Click Get Started to dive in and chat!
            </p>
            <Link to={`/chat`} className="btn btn-neutral">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
