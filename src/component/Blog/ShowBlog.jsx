import React from "react";
import {
  FaGithubSquare,
  FaGithubAlt,
  FaLink,
  FaArrowCircleRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const ShowBlog = ({ blog }) => {
  return (
    <div className=" card md:w-[600px]  gap-6 bg-gray-800 mb-6 mx-auto  text-white opacity-90 ">
      <figure className="px-10 pt-10 ">
        <img
          src={blog?.project_image}
          alt="Shoes"
          className="rounded w-full h-80 object-cover object-top hover:object-bottom duration-1000 cursor-move"
        />
      </figure>
      <div className="card-body items-center text-center">
        <div className="flex flex-col gap-4 justify-between items-center ">
          <h2 className="text-4xl p-3 rounded-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 text-transparent bg-clip-text to-pink-500">
            {blog?.project_name}
          </h2>
          <p>{blog?.project_description}</p>
        </div>
        <p className="from-amber-900 mt-4">
          {" "}
          <span>Technologies: {blog?.technologies}</span>{" "}
        </p>
        <div className="card-actions">
          <Link to={blog?.live_link}>
            <button className="btn btn-primary">
              <FaLink /> website
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowBlog;
