// eslint-disable-next-line no-unused-vars
import React from "react";
//import BCMessengerImg from "../assets/images/BCMessenger.jpeg";
//import BCMessengerImg from "../assets/images/BCMessenger.jpeg";
import projects from "../assets/data/projects";
import ProjectItem2 from "./ProjectItem2";

const Project = () => {
  return (
    <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-10">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Project</h1>
      <p className="text-center py-8">
        Showcasing a diverse range of tech stacks, highlighting my versatility
        as a developer. Alongside technical expertise, I offer a keen aesthetic
        and practical understanding of UI/UX design, ensuring seamless and
        engaging user experiences across my work.
      </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-12">
        {projects.map((item, idx) => (
          <ProjectItem2
            key={idx}
            title={item.title}
            imgUrl={item.imgUrl}
            stack={item.stack}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};
/*    <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={BCMessengerImg} title="Blockchain Messenger" />
        <ProjectItem img={BCMessengerImg} title="Blockchain Messenger" />
        <ProjectItem img={BCMessengerImg} title="Blockchain Messenger" />
        <ProjectItem img={BCMessengerImg} title="Blockchain Messenger" />
      </div>*/

export default Project;
