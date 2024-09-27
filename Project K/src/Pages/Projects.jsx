import { Link } from "react-router-dom";

import CTA from "../compenents/CTA";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Our{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='blue-gradient_text drop-shadow font-worksans mt-5'>
        "Our team's diverse portfolio showcases expertise in AI, web development, and e-governance.
        Innovative projects include Facial Emotion Recognition, Automatic Attendance, and YouTube AD-Revenue Predictor,
        leveraging machine learning. Web development highlights feature Smart Classroom Management, Online Exam System, and
        Dean Dashboard, built using Django. Our secure Election Voting System utilizes PHP and frontend technologies.<br />
        These initiatives demonstrate our commitment to driving positive impact. By making our projects open-source,
        we foster collaboration and community growth. Explore our codebases and join us in shaping the future"</p>

      <p className='text-slate-500 leading-relaxed mt-10'>  These initiatives demonstrate our commitment to driving positive impact through technology. By making our projects open-source,
         we foster collaboration and community growth. Explore our codebases and join us in shaping the future.
          Our expertise spans Artificial Intelligence, Web Development, E-Governance, and Education Technology.
      </p>
      <p className='text-slate-500 mt-2 leading-relaxed'>Together, let's harness technology for social change and innovation.
         Discover the possibilities and collaborate with us to create a better tomorrow. Our team is dedicated to delivering
          impactful solutions, promoting technological advancements, and empowering communities. Join the movement and contribute
           to our open-source initiatives today!</p>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Github Repositorie Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;