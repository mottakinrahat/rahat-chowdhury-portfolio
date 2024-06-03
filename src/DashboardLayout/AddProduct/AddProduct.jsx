import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const projectData = {
      project_image: data.projectImage,
      project_name: data.projectName,
      github_client: data.githubClient,
      github_server: data.githubServer,
      live_link: data.liveSite,
      project_features: data.projectFeature,
      project_description: data.projectDescription,
      technologies: data.technology,
    };
    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projectData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Project is Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card-body bg-gray-800 lg:min-w-[600px] min-w-[350px]">
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Project Name</span>
              </label>
              <input
                type="text"
                {...register("projectName", {
                  required: "Project Name is required",
                })}
                placeholder="Project Name"
                className="input input-bordered w-full"
              />
              {errors.projectName && (
                <p className="error">{errors.projectName.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Project Image</span>
              </label>
              <input
                type="text"
                {...register("projectImage", {
                  required: "Project Image is required",
                })}
                placeholder="Project Image"
                className="input input-bordered w-full"
              />
              {errors.projectImage && (
                <p className="error">{errors.projectImage.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">GitHub Client Link</span>
              </label>
              <input
                type="text"
                {...register("githubClient", {
                  required: "GitHub Client Link is required",
                })}
                placeholder="GitHub Client Link"
                className="input input-bordered"
              />
              {errors.githubClient && (
                <p className="error">{errors.githubClient.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">GitHub Server Link</span>
              </label>
              <input
                type="text"
                {...register("githubServer", {
                  required: "GitHub Server Link is required",
                })}
                placeholder="GitHub Server Link"
                className="input input-bordered"
              />
              {errors.githubServer && (
                <p className="error">{errors.githubServer.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Live Site Link</span>
              </label>
              <input
                type="text"
                {...register("liveSite", {
                  required: "Live Site Link is required",
                })}
                placeholder="Live Site Link"
                className="input input-bordered"
              />
              {errors.liveSite && (
                <p className="error">{errors.liveSite.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Project Technology</span>
              </label>
              <input
                type="text"
                {...register("technology", {
                  required: "Technology is required",
                })}
                placeholder="Technology"
                className="input input-bordered"
              />
              {errors.technology && (
                <p className="error">{errors.technology.message}</p>
              )}
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Project Feature</span>
            </label>
            <input
              type="text"
              {...register("projectFeature", {
                required: "Project Feature is required",
              })}
              placeholder="Project Feature"
              className="input input-bordered"
            />
            {errors.projectFeature && (
              <p className="error">{errors.projectFeature.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Project Description</span>
            </label>
            <input
              type="text"
              {...register("projectDescription", {
                required: "Project Description is required",
              })}
              placeholder="Project Description"
              className="input input-bordered"
            />
            {errors.projectDescription && (
              <p className="error">{errors.projectDescription.message}</p>
            )}
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Add Project
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
