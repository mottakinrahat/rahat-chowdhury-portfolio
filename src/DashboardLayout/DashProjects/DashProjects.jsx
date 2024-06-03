import React, { useEffect, useState } from "react";
import DashboardProjectCard from "./DashboardProjectCard";
import Swal from "sweetalert2";

const DashProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://rahat-portfolio-server-phi.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://rahat-portfolio-server-phi.vercel.app/projects/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.result?.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = projects.filter(
                (project) => project._id !== id
              );
              setProjects(remaining);
            }
          })
          .catch((error) => {
            Swal.fire("Error!", `${error.message}`, "error");
          });
      }
    });
  };
  return (
    <div className="bg-gray-900 text-white">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Project Name</th>
              <th>GitHub_client</th>
              <th>GitHub_server</th>
              <th>Live-link</th>
              <th>update</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {projects.map((project, index) => (
              <DashboardProjectCard
                key={project._id}
                project={project}
                index={index}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashProjects;
