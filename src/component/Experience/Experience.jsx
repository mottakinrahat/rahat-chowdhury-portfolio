import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Experience = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-40">Experience</h2>
      <div
        className="relative animation flex flex-wrap justify-center items-center"
        data-aos="zoom-out"
      >
        <div className="mt-20 ">
          <div className=" shadow card lg:w-[1000px] bg-neutral bg-opacity-60 duration-300  text-neutral-content hover:ease-out hover:bg-yellow-500  hover:text-cyan-400">
            <div className="flex flex-col justify-center items-center py-4">
              <div className="">
                <img
                  src="https://i.ibb.co/Z2NtJdR/farmsbook.webp"
                  className="h-40 w-40 mx-auto"
                  alt=""
                />
              </div>
              <div className="card-body  px-4 md:px-0 items-center text-center">
                <div className="flex flex-col  items-center gap-2">
                  <h2 className="card-title">
                    FarmsBook Private Solution pvt. ltd.
                  </h2>
                  <p>Full Stack Developer</p>
                  <p>Job Type: Remote</p>
                  <p>Duration: 1/8/2023 – 1/11/2023</p>
                  <p className="flex items-center gap-2">
                    <FaLocationDot />
                    Jaipur,Rajasthan,India
                  </p>
                  <div>
                    <p>
                      During the working period with farmsbook, I build two
                      website there. I provided the link below.
                    </p>
                  </div>

                  <div className="">
                    <Link to="https://drive.google.com/file/d/1t9l-43XXvoDdGno3eAIhCVay4imchoK1/view?usp=drive_link">
                      {" "}
                      <button className="box px-[28px] py-[12px] hover:bg-cyan-600 mr-2 bg-[#00EEFF] text-black font-bold mt-10 rounded-[50px]">
                        Reward
                      </button>
                    </Link>
                    <Link to="https://www.farmsbook.com/">
                      <button className="box px-[28px] py-[12px] hover:bg-cyan-600   border-[#00EEFF] border-2 text-white font-bold mt-10 rounded-[50px]">
                        farmsbook
                      </button>
                    </Link>
                    <Link to="https://www.organicfarmer.earth/">
                      <button className="box px-[28px] py-[12px] hover:bg-cyan-600 ml-2  border-[#00EEFF] border-2 text-white font-bold mt-10 rounded-[50px]">
                        organic
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
