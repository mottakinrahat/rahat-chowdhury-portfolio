import React from 'react';

const ShowSkill = ({ skill }) => {
  console.log(skill);
  const { image, name, description } = skill;
  return (
    <div className="mt-20">
      <div className="card w-[180px] h-[200px] bg-neutral bg-opacity-60 duration-300  hover:w-[190px] text-neutral-content hover:ease-out hover:bg-yellow-500 hover:text-black">
        <div className="card-body items-center text-center">
          <img src={image} alt="" />
          <h2 className="card-title">{name}</h2>

          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-ghost">Deny</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ShowSkill;
