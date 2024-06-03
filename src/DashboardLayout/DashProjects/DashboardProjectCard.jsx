import React from "react";
import { Link } from "react-router-dom";
import UpdateProduct from "../UpdateProduct/UpdateProduct";

const DashboardProjectCard = ({ project, index, handleDelete }) => {
  const { _id, project_name, github_client, github_server, live_link } =
    project;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{project_name}</td>
      <td>
        <Link to={github_client}>
          <button>client</button>
        </Link>
      </td>
      <td>
        <Link to={github_server}>
          <button>server</button>
        </Link>
      </td>
      <td>
        <Link to={live_link}>
          <button>link</button>
        </Link>
      </td>
      <td>
        <Link to={`/dashboard/updateproduct/${_id}`}>
          <button className="btn btn-primary btn-xs">update</button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-primary btn-xs"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default DashboardProjectCard;
