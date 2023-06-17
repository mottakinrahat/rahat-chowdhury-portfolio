import React, { useState } from 'react';
import myImage from '../../assets/banner/editedBG-removebg-preview.png'

const AboutMe = () => {
  const [showFullParagraph, setShowFullParagraph] = useState(false);

  const handleShowMore = () => {
    setShowFullParagraph(true);
  };

  const paragraph =
    "Hi there! I'm MD. Mottakin Rahat, a passionate MERN stack developer ready to bring your ideas to life. With a solid foundation in web development and a keen eye for detail, I strive to create seamless, user-friendly experiences that make a lasting impact. I have honed my skills in the MERN (MongoDB, Express.js, React.js, Node.js) stack, allowing me to build robust and scalable applications. My expertise includes crafting responsive front-end interfaces using modern web technologies like HTML5, CSS3, and JavaScript, while utilizing React.js to deliver dynamic and interactive user experiences.I have a strong understanding of back-end development, working with Node.js and Express.js to create efficient APIs and manage server-side logic. Additionally, I am proficient in working with databases like MongoDB, ensuring data integrity and efficient retrieval.\n\nThroughout my journey as a developer, I have embraced a collaborative approach, actively seeking opportunities to work in cross-functional teams and contribute my skills to a diverse range of projects. I am constantly exploring new technologies and trends in the industry to stay up-to-date and deliver cutting-edge solutions.If you're looking for a dedicated MERN stack developer who is passionate about building exceptional web applications, I would be thrilled to collaborate with you. Let's bring your ideas to life and create impactful digital experiences together.";

  const displayParagraph = showFullParagraph ? paragraph : `${paragraph.slice(0, 500)}...`;

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-10">About Me</h2>
      <div>
        <div className="hero min-h-screen bg-base-200 w-full">
          <div className="hero-content  flex-col  lg:flex-row gap-40">
            <img src={myImage} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="w-full">
              <h1 className="text-5xl font-bold">About Me</h1>
              <h1 className="text-2 font-bold">React Developer</h1>
              <p className="py-6">{displayParagraph}</p>
              {!showFullParagraph ? 
                <button className="btn btn-primary" onClick={handleShowMore}>
                  Show more
                </button>:<button className="btn btn-primary" onClick={handleShowMore}>
                  Show Less
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
