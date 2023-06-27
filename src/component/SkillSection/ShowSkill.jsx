import React from 'react';

const ShowSkill = ({ skill }) => {
  console.log(skill);
  const { image, name, description, progress } = skill;
  return (
    <div className="mt-20">
      <div className="card w-full h-auto bg-neutral bg-opacity-60 duration-300  text-neutral-content hover:ease-out hover:bg-yellow-500 hover:text-black">
        <div className="card-body items-center text-center">
         <div className='flex justify-between items-center gap-2'>
         <img className='h-10' src={image} alt="" />
          <h2 className="card-title">{name}</h2>
         </div>
          <div className='flex justify-between items-center'>
            <p className='font-bold'>{progress}%</p>

            <progress className="progress progress-warning w-20" value={progress} max="100"></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowSkill;
