import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useEffect } from 'react';
import { skills, experiences } from '../constants';
import CTA from '../compenents/CTA';

const About = () => {
    useEffect(() => {
        document.title = 'About';
    }, []);
    return (
        <section className='max-container'>
            <h1 className="head-text">
                Hello, We are {" "} <span className="blue-gradient_text font-semibold drop-shadow">Linkedin Park</span>
            </h1>

            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p className="blue-gradient_text font-light drop-shadow">
                    We are a team of innovative students from Centurion University of Technology, passionate about harnessing technology to drive social change.
                    With expertise in AI, web development, and data analytics, we craft impactful solutions.
                    Our projects revolutionize education and beyond, including Smart Classroom Management System, Dean Dashboard,
                    Facial Emotion Recognition System, Online Examination System, and YouTube Ad Revenue Predictor.
                    Recipients of the 2022 Education Innovation Award, our work yields significant results: 30% increase
                    in educational efficiency and 95% accuracy in sentiment analysis. Dedicated to innovation and excellence,
                    we push boundaries, explore new technologies, and solve real-world problems with collaboration and creativity
                    to make a lasting impact.
                </p>
            </div>

            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">Our Skills</h3>

                <div className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill) => (
                        <div className="block-container w-20 h-20">
                            <div className="btn-back rounded-xl" />
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.nmae}
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-16">
                <h3 className="subhead-text">Work Experience</h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                        about our Work Experience.
                    </p>
                </div>
                <div>
                    <VerticalTimeline>
                        {experiences.map((experience, index) => (
                            <VerticalTimelineElement
                                key={experience.company_name}
                                date={experience.date}
                                iconStyle={{ background: experience.iconBg }}
                                icon={
                                    <div className='flex justify-center items-center w-full h-full'>
                                        <img
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            className='w-[60%] h-[60%] object-contain'
                                        />
                                    </div>
                                }
                                contentStyle={{
                                    borderBottom: "8px",
                                    borderStyle: "solid",
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: "none",
                                }}
                            >
                                <div>
                                    <h3 className='text-black text-xl font-poppins font-semibold'>
                                        {experience.title}
                                    </h3>
                                    <p
                                        className='text-black-500 font-medium text-base'
                                        style={{ margin: 0 }}
                                    >
                                        {experience.company_name}
                                    </p>
                                </div>

                                <ul className='my-5 list-disc ml-5 space-y-2'>
                                    {experience.points.map((point, index) => (
                                        <li
                                            key={`experience-point-${index}`}
                                            className='text-black-500/50 font-normal pl-1 text-sm'
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
            <hr className='border-slate-200' />
            <CTA />
        </section>
    );
};

export default About;